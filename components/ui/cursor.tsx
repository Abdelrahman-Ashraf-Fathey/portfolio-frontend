"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import "@/styles/cursor.css";

export default function Cursor() {
    const [position, setPosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const move = (e: MouseEvent) => {
            setPosition({ x: e.clientX, y: e.clientY });
        };
        window.addEventListener("mousemove", move);
        return () => window.removeEventListener("mousemove", move);
    }, []);

    return (
        <motion.div
            className="custom-cursor "
            animate={{
                x: position.x - 12,
                y: position.y - 12,
            }}
            transition={{
                type: "spring",
                stiffness: 1000,
                damping: 50,
            }}
        />
    );
}
