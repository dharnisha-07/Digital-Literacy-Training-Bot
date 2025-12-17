import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { Smartphone, Briefcase, ShieldCheck } from 'lucide-react';

const InfoCards = () => {
    const { language } = useLanguage();

    const content = {
        en: [
            {
                title: "New Smartphone Users",
                desc: "Learn everything from camera settings to social apps safely.",
                icon: <Smartphone size={40} color="#fff" />,
                color: "#C7070F"
            },
            {
                title: "Professionals",
                desc: "Master tools like PowerBI, Excel, Firebase, and more.",
                icon: <Briefcase size={40} color="#fff" />,
                color: "#910508"
            },
            {
                title: "Risk-free Practice",
                desc: "Confidently explore technology with interactive labs.",
                icon: <ShieldCheck size={40} color="#fff" />,
                color: "#730101"
            }
        ],
        ta: [
            {
                title: "புதிய ஸ்மார்ட்போன் பயனர்கள்",
                desc: "கேமரா முதல் சமூக ஊடகங்கள் வரை அனைத்தையும் பாதுகாப்பாகக் கற்றுக்கொள்ளுங்கள்.",
                icon: <Smartphone size={40} color="#fff" />,
                color: "#C7070F"
            },
            {
                title: "தொழில் வல்லுநர்கள்",
                desc: "PowerBI, Excel, Firebase போன்ற கருவிகளை கற்றுக்கொள்ளுங்கள்.",
                icon: <Briefcase size={40} color="#fff" />,
                color: "#910508"
            },
            {
                title: "பாதுகாப்பான பயிற்சி",
                desc: "பயமின்றி தொழில்நுட்பத்தை ஆராயுங்கள்.",
                icon: <ShieldCheck size={40} color="#fff" />,
                color: "#730101"
            }
        ]
    };

    const cards = content[language];

    return (
        <section className="container" style={{ padding: '4rem 20px', marginTop: '-50px', position: 'relative', zIndex: 10 }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem' }}>
                {cards.map((card, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2, duration: 0.5 }}
                        whileHover={{ y: -10 }}
                        style={{
                            backgroundColor: '#fff',
                            borderRadius: '20px',
                            padding: '2rem',
                            boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            textAlign: 'center',
                            borderTop: `5px solid ${card.color}`
                        }}
                    >
                        <div style={{
                            backgroundColor: card.color,
                            padding: '1rem',
                            borderRadius: '50%',
                            marginBottom: '1.5rem',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                            {card.icon}
                        </div>
                        <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem', color: 'var(--text-dark)' }}>{card.title}</h3>
                        <p style={{ color: '#666', lineHeight: '1.6' }}>{card.desc}</p>
                    </motion.div>
                ))}
            </div>
        </section>
    );
};

export default InfoCards;
