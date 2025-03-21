import { ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
    return twMerge(clsx(inputs));
}

export function getUserIp(req: any) {
    const xForwardedFor = req.headers.get("x-forwarded-for");
    return xForwardedFor ? xForwardedFor.split(",")[0] : req.ip || req.connection.remoteAddress;
}

export function formatTimeLeft(timeLeft: number) {
    const daysLeft = Math.floor(timeLeft / (24 * 60 * 60)); // Convert to days
    const hoursLeft = Math.floor((timeLeft % (24 * 60 * 60)) / 3600); // Convert to hours
    const minutesLeft = Math.floor((timeLeft % 3600) / 60); // Convert to minutes
    const secondsLeft = Math.floor(timeLeft % 60); // Remainder is seconds

    if (daysLeft > 0) {
        return `${daysLeft} day${daysLeft > 1 ? 's' : ''}`;
    } else if (hoursLeft > 0) {
        return `${hoursLeft} hour${hoursLeft > 1 ? 's' : ''}${minutesLeft > 0 ? `, ${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}` : ''}`;
    } else if (minutesLeft > 0) {
        return `${minutesLeft} minute${minutesLeft > 1 ? 's' : ''}${secondsLeft > 0 ? `, ${secondsLeft} second${secondsLeft > 1 ? 's' : ''}` : ''}`;
    } else {
        return `${secondsLeft} second${secondsLeft > 1 ? 's' : ''}`;
    }
}