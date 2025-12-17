import React, { useState } from 'react';
import Link from 'next/link';
import LanguageToggle from './LanguageToggle';
import { useLanguage } from '../context/LanguageContext';

const Navbar = () => {
    const { language } = useLanguage();
    const [isHovered, setIsHovered] = useState(false);

    const navItems = [
        { name: language === 'en' ? 'Fun Facts' : 'வேடிக்கை உண்மைகள்', path: '/fun-facts' },
        { name: language === 'en' ? 'Practice' : 'பயிற்சி', path: '/practice' },
        { name: language === 'en' ? 'Tutorials' : 'பாடங்கள்', path: '/tutorials' },
        { name: language === 'en' ? 'Chatbot' : 'உதவி', path: '/chatbot' },
    ];

    return (
        <nav
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                position: 'fixed', // Fixed to ensure it stays at top
                top: 0,
                left: 0,
                width: '100%',
                zIndex: 100,
                backgroundColor: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(10px)',
                borderBottom: '1px solid var(--glass-border)',
                padding: '1rem 0',
                opacity: isHovered ? 1 : 0,
                transition: 'opacity 0.4s ease-in-out',
                pointerEvents: 'auto', // Ensure it captures hover even if 0 opacity (Wait, 0 opacity captures events? Yes. But visibility:hidden doesn't. Opacity is safe.)
                // Actually to be accessible, maybe use transform Y? No, user explicitly said "hide... shown up when cursor is moved towards".
                // I'll add a 'trigger area' invisible div if opacity 0 makes it hard to hit?
                // Standard opacity:0 element is still present and interactive.
            }}>
            <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Link href="/">
                    <h1 style={{ fontSize: '3rem', fontFamily: "'Righteous', cursive", color: 'var(--primary)', cursor: 'pointer', letterSpacing: '2px' }}>
                        Digi Dhost
                    </h1>
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                    {navItems.map((item) => (
                        <Link key={item.path} href={item.path}>
                            <span style={{ fontWeight: '500', color: 'var(--text-dark)', cursor: 'pointer', transition: 'color 0.2s' }}>
                                {item.name}
                            </span>
                        </Link>
                    ))}
                    <LanguageToggle />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
