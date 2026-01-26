import type React from "react";
import type { Metadata } from "next";
import { Rajdhani, Share_Tech_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const _rajdhani = Rajdhani({
    subsets: ["latin"],
    weight: ["300", "400", "500", "600", "700"],
});

const _shareTechMono = Share_Tech_Mono({
    subsets: ["latin"],
    weight: ["400"],
});

export const metadata: Metadata = {
    title: "Abdelrahman | Software Engineer",
    icons: {
        icon: "/favicon.png",
    },
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className="dark">
            <body className="font-sans antialiased">
                {children}
                <Analytics />
            </body>
        </html>
    );
}
