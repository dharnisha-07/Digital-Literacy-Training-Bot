import React, { useState } from 'react';
import { motion } from 'framer-motion';

const GoogleAccount = () => {
    const [step, setStep] = useState(1);
    const [formData, setFormData] = useState({ firstName: '', lastName: '', day: '', month: '', year: '', username: '', password: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const nextStep = () => setStep(step + 1);

    return (
        <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: '20px', color: '#5F6368' }}>Create Google Account</h3>

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
                <div style={{ padding: '20px' }}>
                    <div style={{ textAlign: 'center', marginBottom: '20px' }}>
                        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#4285F4' }}>G</span>
                        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#EA4335' }}>o</span>
                        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#FBBC05' }}>o</span>
                        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#4285F4' }}>g</span>
                        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#34A853' }}>l</span>
                        <span style={{ fontSize: '24px', fontWeight: 'bold', color: '#EA4335' }}>e</span>
                    </div>

                    {step === 1 && (
                        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                            <h3 style={{ marginBottom: '10px' }}>Create your Google Account</h3>
                            <input
                                name="firstName"
                                placeholder="First name"
                                value={formData.firstName}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '10px', marginBottom: '10px', borderRadius: '4px', border: '1px solid #ccc' }}
                            />
                            <input
                                name="lastName"
                                placeholder="Last name (optional)"
                                value={formData.lastName}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '10px', marginBottom: '20px', borderRadius: '4px', border: '1px solid #ccc' }}
                            />
                            <button
                                onClick={nextStep}
                                disabled={!formData.firstName}
                                style={{ backgroundColor: '#1A73E8', color: '#fff', padding: '10px 20px', borderRadius: '4px', float: 'right' }}
                            >
                                Next
                            </button>
                        </motion.div>
                    )}

                    {step === 2 && (
                        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                            <h3 style={{ marginBottom: '10px' }}>Basic information</h3>
                            <p style={{ fontSize: '12px', marginBottom: '20px' }}>Enter your birthday and gender</p>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '20px' }}>
                                <select
                                    name="month"
                                    value={formData.month}
                                    style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                                    onChange={handleChange}
                                >
                                    <option value="">Month</option>
                                    <option value="January">January</option>
                                    <option value="February">February</option>
                                    <option value="March">March</option>
                                    <option value="April">April</option>
                                    <option value="May">May</option>
                                    <option value="June">June</option>
                                    <option value="July">July</option>
                                    <option value="August">August</option>
                                    <option value="September">September</option>
                                    <option value="October">October</option>
                                    <option value="November">November</option>
                                    <option value="December">December</option>
                                </select>
                                <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
                                    <input
                                        name="day"
                                        placeholder="Day"
                                        value={formData.day}
                                        style={{ flex: 1, minWidth: 0, padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                                        onChange={handleChange}
                                    />
                                    <input
                                        name="year"
                                        placeholder="Year"
                                        value={formData.year}
                                        style={{ flex: 1, minWidth: 0, padding: '10px', border: '1px solid #ccc', borderRadius: '4px' }}
                                        onChange={handleChange}
                                    />
                                </div>
                            </div>
                            <button onClick={nextStep} style={{ backgroundColor: '#1A73E8', color: '#fff', padding: '10px 20px', borderRadius: '4px', float: 'right' }}>Next</button>
                        </motion.div>
                    )}

                    {step === 3 && (
                        <motion.div initial={{ x: 20, opacity: 0 }} animate={{ x: 0, opacity: 1 }}>
                            <h3 style={{ marginBottom: '10px' }}>Choose your Gmail address</h3>
                            <input
                                name="username"
                                placeholder="Username"
                                value={formData.username}
                                onChange={handleChange}
                                style={{ width: '100%', padding: '10px', marginBottom: '5px', borderRadius: '4px', border: '1px solid #ccc' }}
                            />
                            <div style={{ textAlign: 'right', color: '#666', fontSize: '14px', marginBottom: '20px' }}>@gmail.com</div>

                            {formData.firstName && (
                                <div style={{ marginBottom: '20px' }}>
                                    <p style={{ fontSize: '12px', color: '#666' }}>Available:</p>
                                    <div
                                        onClick={() => setFormData({ ...formData, username: `${formData.firstName.toLowerCase()}123` })}
                                        style={{ color: '#1A73E8', cursor: 'pointer', fontSize: '14px' }}
                                    >
                                        {formData.firstName.toLowerCase()}123
                                    </div>
                                </div>
                            )}

                            <button onClick={nextStep} disabled={!formData.username} style={{ backgroundColor: '#1A73E8', color: '#fff', padding: '10px 20px', borderRadius: '4px', float: 'right' }}>Next</button>
                        </motion.div>
                    )}

                    {step === 4 && (
                        <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} style={{ textAlign: 'center', marginTop: '50px' }}>
                            <div style={{ fontSize: '50px', marginBottom: '20px' }}>🎉</div>
                            <h3>Welcome, {formData.firstName}!</h3>
                            <p style={{ color: '#666', marginTop: '10px' }}>Your Google Account is ready.</p>
                            <div style={{ marginTop: '20px', padding: '10px', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
                                {formData.username}@gmail.com
                            </div>
                            <button
                                onClick={() => setStep(1)}
                                style={{ marginTop: '40px', backgroundColor: '#1A73E8', color: '#fff', padding: '10px 30px', borderRadius: '25px' }}
                            >
                                Practice Again
                            </button>
                        </motion.div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default GoogleAccount;
