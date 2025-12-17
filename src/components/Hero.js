import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { useLanguage } from '../context/LanguageContext';

const Hero = () => {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "Digi Dhost",
            tagline: "Your Friendly Guide to the Digital World.",
            cta: "Start Digi Dhost Chatbot"
        },
        ta: {
            title: "டிஜி தோஸ்த்",
            tagline: "டிஜிட்டல் உலகிற்கான உங்கள் நண்பன்.",
            cta: "டிஜி தோஸ்த் உடன் பேசுங்கள்"
        }
    };

    const t = content[language];

    return (
        <section style={{
            minHeight: '80vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            textAlign: 'center',
            padding: '2rem',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Decorative Circles */}
            <motion.div
                animate={{ y: [0, -20, 0] }}
                transition={{ repeat: Infinity, duration: 5, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    top: '10%',
                    left: '10%',
                    width: '100px',
                    height: '100px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.2)',
                }}
            />
            <motion.div
                animate={{ y: [0, 30, 0] }}
                transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
                style={{
                    position: 'absolute',
                    bottom: '20%',
                    right: '10%',
                    width: '150px',
                    height: '150px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.15)',
                }}
            />

            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, type: "spring" }}
                style={{
                    fontSize: '5rem',
                    fontFamily: "'Righteous', cursive",
                    fontWeight: '800',
                    color: '#fff',
                    marginBottom: '1rem',
                    textShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}
            >
                {t.title}
            </motion.h1>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 1 }}
                style={{
                    fontSize: '1.5rem',
                    color: '#fff',
                    marginBottom: '3rem',
                    maxWidth: '600px'
                }}
            >
                {t.tagline}
            </motion.p>

            <Link href="/chatbot">
                <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 10px 20px rgba(0,0,0,0.2)" }}
                    whileTap={{ scale: 0.95 }}
                    style={{
                        padding: '1rem 3rem',
                        fontSize: '1.2rem',
                        fontWeight: '600',
                        color: '#730101',
                        backgroundColor: '#FFFFFF',
                        borderRadius: '50px',
                        boxShadow: '0 4px 15px rgba(0,0,0,0.1)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px'
                    }}
                >
                    {t.cta} <span>→</span>
                </motion.button>
            </Link>
        </section>
    );
};

export default Hero;
