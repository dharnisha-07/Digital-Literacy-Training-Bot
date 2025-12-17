import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';

const LanguageToggle = () => {
    const { language, toggleLanguage } = useLanguage();

    return (
        <div
            onClick={toggleLanguage}
            style={{
                width: '120px',
                height: '40px',
                backgroundColor: '#EFEFEF',
                borderRadius: '20px',
                display: 'flex',
                alignItems: 'center',
                padding: '4px',
                cursor: 'pointer',
                position: 'relative',
                boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.1)'
            }}
        >
            <motion.div
                layout
                transition={{ type: "spring", stiffness: 700, damping: 30 }}
                style={{
                    width: '50%',
                    height: '100%',
                    backgroundColor: '#C7070F', // Venetian Red
                    borderRadius: '16px',
                    position: 'absolute',
                    left: language === 'en' ? '4px' : '50%',
                    boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
                }}
            />
            <div style={{ flex: 1, textAlign: 'center', zIndex: 1, fontSize: '0.9rem', fontWeight: '600' }}>
                🇬🇧 EN
            </div>
            <div style={{ flex: 1, textAlign: 'center', zIndex: 1, fontSize: '0.9rem', fontWeight: '600' }}>
                🇮🇳 TA
            </div>
        </div>
    );
};

export default LanguageToggle;
