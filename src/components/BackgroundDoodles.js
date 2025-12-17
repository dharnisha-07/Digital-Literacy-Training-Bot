import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import {
    Laptop, Smartphone, Wifi, Usb, QrCode, Mouse, Cloud,
    Settings, Bot, Cpu, HardDrive, Bluetooth, Signal,
    Watch, Shield, Globe, Mail, Video, Zap, Database
} from 'lucide-react';

const icons = [
    Laptop, Smartphone, Wifi, Usb, QrCode, Mouse, Cloud,
    Settings, Bot, Cpu, HardDrive, Bluetooth, Signal,
    Watch, Shield, Globe, Mail, Video, Zap, Database
];

const BackgroundDoodles = () => {
    const [doodles, setDoodles] = useState([]);

    useEffect(() => {
        // Generate random doodles on client-side to avoid hydration mismatch
        const newDoodles = Array.from({ length: 30 }).map((_, i) => ({
            id: i,
            Icon: icons[Math.floor(Math.random() * icons.length)],
            x: Math.random() * 100,
            y: Math.random() * 100,
            size: Math.random() * 30 + 20, // 20px to 50px
            duration: Math.random() * 20 + 10, // 10s to 30s
            delay: Math.random() * 5,
            rotation: Math.random() * 360
        }));
        setDoodles(newDoodles);
    }, []);

    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: 0,
            pointerEvents: 'none',
            overflow: 'hidden'
        }}>
            {doodles.map((doodle) => (
                <motion.div
                    key={doodle.id}
                    initial={{
                        x: `${doodle.x}vw`,
                        y: `${doodle.y}vh`,
                        opacity: 0,
                        rotate: doodle.rotation
                    }}
                    animate={{
                        y: [`${doodle.y}vh`, `${doodle.y - 20}vh`, `${doodle.y}vh`],
                        x: [`${doodle.x}vw`, `${doodle.x + 10}vw`, `${doodle.x}vw`],
                        opacity: [0.4, 0.7, 0.4],
                        rotate: doodle.rotation + 360
                    }}
                    transition={{
                        duration: doodle.duration,
                        repeat: Infinity,
                        ease: "linear",
                        delay: doodle.delay
                    }}
                    style={{
                        position: 'absolute',
                        color: 'rgba(145, 5, 8, 0.2)', // Sangria tint
                    }}
                >
                    <doodle.Icon size={doodle.size} />
                </motion.div>
            ))}
        </div>
    );
};

export default BackgroundDoodles;
