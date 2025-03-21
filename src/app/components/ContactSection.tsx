"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { toast } from "react-hot-toast";
import GithubIcon from "../../../public/github-icon.svg";
import LinkedinIcon from "../../../public/linkedin-icon.svg";

const ContactSection: React.FC = () => {
    const [loading, setLoading] = useState<boolean>(false);

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        setLoading(true);

        const name = e.target.name.value;
        const email = e.target.email.value;
        const subject = e.target.subject.value;
        const message = e.target.message.value;

        const emailHTML = `
        <div style="font-family: Arial, sans-serif; color: #333; padding: 20px; max-width: 600px; margin: auto; border: 1px solid #ddd; border-radius: 8px;">
            <h2 style="color: #007BFF;">New Contact Form Submission</h2>
            <p style="font-size: 16px;"><strong>Name:</strong> ${name}</p>
            <p style="font-size: 16px;"><strong>Email:</strong> ${email}</p>
            <p style="font-size: 16px;"><strong>Subject:</strong> ${subject}</p>
            <hr style="border: 1px solid #ddd;">
            <p style="font-size: 16px;"><strong>Message:</strong></p>
            <p style="background: #f9f9f9; padding: 10px; border-radius: 5px;">${message}</p>
            </div>
            `;

        const endpoint = "/api/send";
        const JSONdata = JSON.stringify({ name, email, subject, message: emailHTML });

        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSONdata,
        };

        try {
            const response = await fetch(endpoint, options);
            const data = await response.json(); // Parse the response as JSON
        
            if (response.status === 200) {
                // Display the message from the response dynamically
                toast.success(data.message || "Email sent successfully!");
                e.target.reset(); // Clear the form
            } else {
                // Display the error message from the response dynamically
                toast.error(data.error || "Failed to send email. Try again.");
            }
        } catch (error) {
            toast.error("Error sending email. Check your network.");
        } finally {
            setLoading(false);
        }
        
    };

    return (
        <section id="contact" className="grid md:grid-cols-2 my-6 md:my-6 py-2 gap-4 relative">
            <div className="z-10">
                <h5 className="text-xl font-bold text-white my-2">Let&apos;s Connect</h5>
                <p className="text-[#ADB7BE] mb-4 max-w-md">
                    Creating elegant solutions through clean and efficient code.
                </p>
                <div className="socials flex flex-row gap-2">
                    <Link href="https://github.com">
                        <Image src={GithubIcon} alt="Github Icon" />
                    </Link>
                    <Link href="https://www.linkedin.com/in/dhanji-bhagat" target="_blank">
                        <Image src={LinkedinIcon} alt="Linkedin Icon" />
                    </Link>
                </div>
            </div>
            <div>
                <form className="flex flex-col" onSubmit={handleSubmit}>
                    <div className="mb-6">
                        <label htmlFor="name" className="text-white block mb-2 text-sm font-medium">
                            Your Name
                        </label>
                        <input name="name" type="text" id="name" required className="bg-[#18191E] border border-[#33353F] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Dune Rae" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="email" className="text-white block mb-2 text-sm font-medium">
                            Your email
                        </label>
                        <input name="email" type="email" id="email" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="dune@db.com" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="subject" className="text-white block text-sm mb-2 font-medium">
                            Subject
                        </label>
                        <input name="subject" type="text" id="subject" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Just saying hi" />
                    </div>
                    <div className="mb-6">
                        <label htmlFor="message" className="text-white block text-sm mb-2 font-medium">
                            Message
                        </label>
                        <textarea name="message" id="message" required className="bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5" placeholder="Let's talk about..."
                        />
                    </div>
                    <button type="submit" disabled={loading} className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2.5 px-5 rounded-lg w-full">
                        {loading ? "Sending..." : "Send Message"}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default ContactSection;
