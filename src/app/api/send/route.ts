import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { RateLimiterRedis } from "rate-limiter-flexible";
import Redis from "ioredis";
import { formatTimeLeft, getUserIp } from "@/app/lib/utils";

// Create a Redis client to connect to your local Redis server
const redis = new Redis({
    host: "localhost", // Local Redis server
    port: 6379, // Default Redis port
    // You can add other options if needed like password or DB number
});

const requestLimit = 10; // 6 requests allowed
const requestDuration = 24 * 60 * 60; // 24 hours in seconds

// Initialize the rate limiter with Redis
const rateLimiter = new RateLimiterRedis({
    storeClient: redis,
    points: requestLimit, // 2 requests allowed
    duration: requestDuration, // 24 hours
    keyPrefix: "rateLimit", // Prefix for the keys in Redis
});

export async function POST(req: Request) {
    try {
        const { name, email, subject, message } = await req.json();

        if (!name || !email || !subject || !message) {
            return NextResponse.json({ error: "All fields are required" }, { status: 400 });
        }

        // Extract the user's IP address
        const userIp = getUserIp(req);

        // Check if the IP's rate limit key exists
        const currentLimit = await rateLimiter.get(userIp);
        if (currentLimit === null) {
            // Initialize the key with the allowed points if it doesn't exist
            await rateLimiter.set(userIp, requestLimit, requestDuration); // 2 points for 24 hours (in seconds)
        }

        // When rate limit is exceeded, generate the message with the time left
        const remainingTime = await rateLimiter.get(userIp);
        const timeLeft = remainingTime ? remainingTime.msBeforeNext / 1000 : 0;

        // Rate limiting check before sending the email
        try {
            await rateLimiter.consume(userIp); // Consume a point for this IP address
        } catch (error) {
            const timeMessage = formatTimeLeft(timeLeft);
            return NextResponse.json({ error: `You have exceeded the submission limit. Please try again in ${timeMessage}.` }, { status: 429 });
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.RECEIVER_EMAIL,
            subject: `New Contact Form Submission: ${subject}`,
            html: message,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: "Email sent successfully!" }, { status: 200 });

    } catch (error) {
        console.error("Error sending email:", error);
        return NextResponse.json({ error: "Error sending email" }, { status: 500 });
    }
}
