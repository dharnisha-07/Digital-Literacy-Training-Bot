import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';

const FunFactCard = ({ fact, illustration, color, detail, textColor }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <>
            <motion.div
                layoutId={`card-${fact}`}
                onClick={() => setIsOpen(true)}
                whileHover={{ y: -10, boxShadow: '0 15px 30px rgba(0,0,0,0.1)' }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{
                    backgroundColor: '#FFFFFF',
                    borderBottom: '8px solid #910508',
                    borderRight: '8px solid #910508',
                    borderTop: '2px solid #910508',
                    borderLeft: '2px solid #910508',
                    borderRadius: '20px',
                    padding: '20px',
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    height: '300px',
                    position: 'relative',
                    overflow: 'hidden',
                    boxShadow: '0 4px 15px rgba(0,0,0,0.05)'
                }}
            >
                {/* Funny Picture Area */}
                <div style={{
                    fontSize: '80px',
                    marginBottom: '20px',
                    filter: 'drop-shadow(0 5px 10px rgba(0,0,0,0.1))',
                    transition: 'transform 0.3s'
                }}>
                    {illustration}
                </div>

                {/* Fact Text */}
                <h3 style={{
                    textAlign: 'center',
                    fontSize: '1.5rem', // Bigger font
                    fontWeight: '800', // Thicker font
                    color: textColor || '#333', // Use passed textColor
                    lineHeight: '1.3',
                    width: '100%'
                }}>
                    {fact}
                </h3>

                {/* Decorative Doodles (Subtle) */}
                <div style={{
                    position: 'absolute',
                    bottom: '-20px',
                    right: '-20px',
                    opacity: 0.2,
                    fontSize: '100px',
                    pointerEvents: 'none'
                }}>
                    {illustration}
                </div>
            </motion.div>

            {/* Modal */}
            <AnimatePresence>
                {isOpen && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100vw',
                        height: '100vh',
                        backgroundColor: 'rgba(0,0,0,0.6)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        zIndex: 1000,
                        padding: '20px'
                    }} onClick={() => setIsOpen(false)}>
                        <motion.div
                            layoutId={`card-${fact}`}
                            style={{
                                backgroundColor: 'rgba(199, 7, 15, 0.85)',
                                backdropFilter: 'blur(10px)',
                                width: '100%',
                                maxWidth: '500px',
                                borderRadius: '30px',
                                padding: '40px',
                                position: 'relative',
                                display: 'flex',
                                flexDirection: 'column',
                                alignItems: 'center',
                                boxShadow: '0 25px 50px rgba(0,0,0,0.2)'
                            }}
                            onClick={(e) => e.stopPropagation()}
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                style={{
                                    position: 'absolute',
                                    top: '20px',
                                    right: '20px',
                                    background: 'rgba(255,255,255,0.5)',
                                    border: 'none',
                                    borderRadius: '50%',
                                    width: '40px',
                                    height: '40px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer'
                                }}
                            >
                                <X size={24} color="#333" />
                            </button>

                            <div style={{ fontSize: '120px', marginBottom: '30px' }}>
                                {illustration}
                            </div>

                            <h2 style={{ textAlign: 'center', marginBottom: '20px', color: '#FFFFFF' }}>
                                {fact}
                            </h2>

                            <p style={{ textAlign: 'center', fontSize: '1.1rem', color: '#FAFAFA', lineHeight: '1.6' }}>
                                {detail}
                            </p>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </>
    );
};

export default FunFactCard;
