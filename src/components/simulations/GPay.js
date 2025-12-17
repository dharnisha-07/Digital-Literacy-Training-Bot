import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, ArrowRight, Smartphone } from 'lucide-react';

const GPay = () => {
    const [step, setStep] = useState(1);
    const [amount, setAmount] = useState('');
    const [phone, setPhone] = useState('');
    const [pin, setPin] = useState('');

    const nextStep = () => setStep(step + 1);
    const reset = () => {
        setStep(1);
        setAmount('');
        setPhone('');
        setPin('');
    };

    return (
        <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: '20px', color: '#5F6368' }}>Google Pay Practice</h3>

            <div style={{
                width: '300px',
                height: '600px',
                border: '10px solid #333',
                borderRadius: '30px',
                overflow: 'hidden',
                position: 'relative',
                backgroundColor: '#fff',
                boxShadow: '0 20px 50px rgba(0,0,0,0.2)'
            }}>
                {/* Header */}
                <div style={{ padding: '15px', backgroundColor: '#fff', borderBottom: '1px solid #eee', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#eee' }}></div>
                    <span style={{ fontWeight: 'bold', color: '#555' }}>GPay</span>
                </div>

                {/* Content */}
                <div style={{ padding: '20px', height: 'calc(100% - 60px)', display: 'flex', flexDirection: 'column' }}>

                    {step === 1 && (
                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ textAlign: 'center', marginTop: '50px' }}>
                            <div style={{ width: '80px', height: '80px', backgroundColor: '#E8F0FE', borderRadius: '50%', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <span style={{ fontSize: '40px', color: '#1A73E8' }}>₹</span>
                            </div>
                            <h2 style={{ color: '#333' }}>Send Money</h2>
                            <p style={{ color: '#777', marginBottom: '40px' }}>Securely pay friends and family</p>

                            <button
                                onClick={nextStep}
                                style={{
                                    backgroundColor: '#1A73E8',
                                    color: '#fff',
                                    padding: '12px 30px',
                                    borderRadius: '25px',
                                    fontSize: '16px',
                                    fontWeight: '500',
                                    boxShadow: '0 4px 10px rgba(26, 115, 232, 0.3)'
                                }}
                            >
                                Start Payment
                            </button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                            <h4 style={{ marginBottom: '20px' }}>Enter Phone Number</h4>
                            <input
                                type="text"
                                placeholder="98765 43210"
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                style={{
                                    width: '100%',
                                    padding: '15px',
                                    borderRadius: '8px',
                                    border: '1px solid #ccc',
                                    fontSize: '18px',
                                    marginBottom: '20px'
                                }}
                            />
                            <button
                                disabled={phone.length < 10}
                                onClick={nextStep}
                                style={{
                                    width: '100%',
                                    backgroundColor: phone.length >= 10 ? '#1A73E8' : '#ccc',
                                    color: '#fff',
                                    padding: '15px',
                                    borderRadius: '25px',
                                    fontSize: '16px'
                                }}
                            >
                                Continue
                            </button>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div initial={{ x: 50, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '30px' }}>
                                <div style={{ width: '40px', height: '40px', borderRadius: '50%', backgroundColor: '#A7C7E7', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', fontWeight: 'bold' }}>
                                    {phone.slice(0, 1)}
                                </div>
                                <div>
                                    <div style={{ fontWeight: 'bold' }}>Receiver</div>
                                    <div style={{ fontSize: '12px', color: '#777' }}>{phone}</div>
                                </div>
                            </div>

                            <div style={{ textAlign: 'center', marginBottom: '40px' }}>
                                <span style={{ fontSize: '30px', verticalAlign: 'top' }}>₹</span>
                                <input
                                    type="number"
                                    placeholder="0"
                                    value={amount}
                                    onChange={(e) => setAmount(e.target.value)}
                                    style={{
                                        border: 'none',
                                        fontSize: '50px',
                                        width: '150px',
                                        textAlign: 'center',
                                        outline: 'none'
                                    }}
                                />
                            </div>

                            <button
                                disabled={!amount}
                                onClick={nextStep}
                                style={{
                                    width: '100%',
                                    backgroundColor: amount ? '#1A73E8' : '#ccc',
                                    color: '#fff',
                                    padding: '15px',
                                    borderRadius: '25px',
                                    fontSize: '16px',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    gap: '10px'
                                }}
                            >
                                Pay ₹{amount} <ArrowRight size={18} />
                            </button>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div initial={{ y: 50, opacity: 0 }} animate={{ y: 0, opacity: 1 }} style={{ textAlign: 'center' }}>
                            <h3 style={{ marginBottom: '30px' }}>Enter UPI PIN</h3>
                            <div style={{ display: 'flex', justifyContent: 'center', gap: '15px', marginBottom: '40px' }}>
                                {[...Array(4)].map((_, i) => (
                                    <div
                                        key={i}
                                        style={{
                                            width: '15px',
                                            height: '15px',
                                            borderRadius: '50%',
                                            backgroundColor: i < pin.length ? '#333' : '#ddd',
                                            border: '1px solid #ccc'
                                        }}
                                    />
                                ))}
                            </div>

                            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', maxWidth: '250px', margin: '0 auto' }}>
                                {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => (
                                    <button
                                        key={num}
                                        onClick={() => setPin(prev => prev.length < 4 ? prev + num : prev)}
                                        style={{
                                            padding: '15px',
                                            fontSize: '20px',
                                            borderRadius: '50%',
                                            border: 'none',
                                            backgroundColor: '#f5f5f5',
                                            cursor: 'pointer'
                                        }}
                                    >
                                        {num}
                                    </button>
                                ))}
                                <div />
                                <button
                                    onClick={() => setPin(prev => prev.length < 4 ? prev + 0 : prev)}
                                    style={{
                                        padding: '15px',
                                        fontSize: '20px',
                                        borderRadius: '50%',
                                        border: 'none',
                                        backgroundColor: '#f5f5f5',
                                        cursor: 'pointer'
                                    }}
                                >
                                    0
                                </button>
                                <button
                                    onClick={() => setPin(prev => prev.slice(0, -1))}
                                    style={{
                                        padding: '15px',
                                        fontSize: '16px',
                                        borderRadius: '50%',
                                        border: 'none',
                                        backgroundColor: '#ffebee',
                                        color: '#d32f2f',
                                        cursor: 'pointer'
                                    }}
                                >
                                    ⌫
                                </button>
                            </div>

                            <button
                                disabled={pin.length !== 4}
                                onClick={nextStep}
                                style={{
                                    marginTop: '30px',
                                    width: '60px',
                                    height: '60px',
                                    borderRadius: '50%',
                                    backgroundColor: pin.length === 4 ? '#1A73E8' : '#ccc',
                                    color: '#fff',
                                    display: 'flex',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    margin: '30px auto 0'
                                }}
                            >
                                <ArrowRight />
                            </button>
                        </motion.div>
                    )}

                    {step === 5 && (
                        <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            style={{ textAlign: 'center', marginTop: '60px' }}
                        >
                            <motion.div
                                animate={{ scale: [1, 1.2, 1] }}
                                transition={{ duration: 0.5 }}
                                style={{ color: '#34A853', marginBottom: '20px' }}
                            >
                                <CheckCircle size={80} fill="#E6F4EA" />
                            </motion.div>
                            <h2 style={{ color: '#333' }}>Payment Successful!</h2>
                            <p style={{ color: '#777', marginBottom: '40px' }}>₹{amount} sent to {phone}</p>

                            <button
                                onClick={reset}
                                style={{
                                    backgroundColor: '#fff',
                                    color: '#1A73E8',
                                    border: '1px solid #1A73E8',
                                    padding: '10px 30px',
                                    borderRadius: '25px',
                                    fontSize: '16px'
                                }}
                            >
                                Done
                            </button>
                        </motion.div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default GPay;
