import React, { useState } from 'react';
import Layout from '@/components/Layout';
import GPay from '@/components/simulations/GPay';
import GoogleAccount from '@/components/simulations/GoogleAccount';
import SocialPost from '@/components/simulations/SocialPost';
import { CreditCard, UserPlus, Instagram } from 'lucide-react';

export default function Practice() {
    const [activeSim, setActiveSim] = useState('gpay');

    const sims = [
        { id: 'gpay', name: 'GPay', icon: <CreditCard size={20} />, component: <GPay /> },
        { id: 'google', name: 'Google Account', icon: <UserPlus size={20} />, component: <GoogleAccount /> },
        { id: 'social', name: 'Instagram', icon: <Instagram size={20} />, component: <SocialPost /> },
    ];

    return (
        <Layout
            title="Practice Lab - Digi Dhost"
            backgroundColor="#FFFFFF"
            backgroundImage="linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), url('/images/practicepage bg.jpg')"
        >
            <div className="container" style={{ display: 'flex', minHeight: '80vh', padding: '2rem 0' }}>
                {/* Sidebar */}
                <div style={{ width: '250px', paddingRight: '2rem', borderRight: '1px solid #eee' }}>
                    <h2 style={{ marginBottom: '2rem', color: '#910508' }}>Practice Lab</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        {sims.map((sim) => (
                            <button
                                key={sim.id}
                                onClick={() => setActiveSim(sim.id)}
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    gap: '10px',
                                    padding: '1rem',
                                    borderRadius: '12px',
                                    backgroundColor: activeSim === sim.id ? 'var(--highlight)' : 'transparent',
                                    color: activeSim === sim.id ? '#730101' : '#666',
                                    fontWeight: activeSim === sim.id ? '600' : '400',
                                    transition: 'all 0.2s',
                                    textAlign: 'left'
                                }}
                            >
                                {sim.icon}
                                {sim.name}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Simulation Area */}
                <div style={{ flex: 1, paddingLeft: '2rem' }}>
                    <div style={{
                        backgroundColor: 'rgba(199, 7, 15, 0.1)',
                        border: '1px solid rgba(199, 7, 15, 0.2)',
                        borderRadius: '30px',
                        backdropFilter: 'blur(10px)',
                        padding: '30px',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        minHeight: '600px', // Ensure height for centering
                        boxShadow: '0 10px 30px rgba(115, 1, 1, 0.1)'
                    }}>
                        {sims.find(s => s.id === activeSim)?.component}
                    </div>
                </div>
            </div>
        </Layout>
    );
}
