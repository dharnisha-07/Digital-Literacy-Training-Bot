import React, { useState } from 'react';
import Layout from '@/components/Layout';
import VideoCard from '@/components/VideoCard';
import VideoModal from '@/components/VideoModal';
import { motion, AnimatePresence } from 'framer-motion';

export default function Tutorials() {
    const [activeTab, setActiveTab] = useState('basic');
    const [selectedVideo, setSelectedVideo] = useState(null);

    const basicVideos = [
        { title: "How to use WhatsApp", duration: "10:30", topic: "Messaging", color: "#C7070F", url: "https://www.youtube.com/watch?v=sghayXZ_RK0" },
        { title: "Ordering on Amazon", duration: "3:00", topic: "Shopping", color: "#C7070F", url: "https://www.youtube.com/watch?v=iSvRIeYYNl4" },
        { title: "Google Pay Basics", duration: "8:30", topic: "Payments", color: "#C7070F", url: "https://www.youtube.com/watch?v=NoYzau-zfJg" },
        { title: "Google Settings Guide", duration: "16:30", topic: "Settings", color: "#C7070F", url: "https://www.youtube.com/watch?v=oQn7CIOgW0g" },
        { title: "YouTube for Beginners", duration: "19:00", topic: "Entertainment", color: "#C7070F", url: "https://www.youtube.com/watch?v=kJlE1IT8QR0" },
    ];

    const proVideos = [
        { title: "PowerBI Dashboarding", duration: "23:05", topic: "Data", color: "#910508", url: "https://www.youtube.com/watch?v=c7LrqSxjJQQ" },
        { title: "Excel Advanced Formulas", duration: "12:00", topic: "Productivity", color: "#910508", url: "https://www.youtube.com/watch?v=zOG-Dl9W83U" },
        { title: "Firebase Integration", duration: "21:45", topic: "Development", color: "#910508", url: "https://www.youtube.com/watch?v=9kRgVxULbag" },
        { title: "n8n Automation Workflows", duration: "19:20", topic: "Automation", color: "#910508", url: "https://www.youtube.com/watch?v=Fy1UCBcgF2o" },
        { title: "Cloud Tools Overview", duration: "11:05", topic: "Cloud", color: "#910508", url: "https://www.youtube.com/watch?v=kriafQfqGZE" },
    ];

    return (
        <Layout
            title="Tutorials - Digi Dhost"
            backgroundColor="#FFFFFF"
            backgroundImage="linear-gradient(rgba(255, 255, 255, 0.35), rgba(255, 255, 255, 0.35)), url('/images/tutotialpage img.jpg')" // Make sure 'tutotialpage img.jpg' is in the 'public' folder
        >
            <div className="container" style={{ padding: '2rem 20px' }}>
                <h1 style={{ textAlign: 'center', marginBottom: '2rem', color: 'var(--primary)' }}>Learning Hub</h1>

                {/* Tabs */}
                <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '3rem' }}>
                    <div style={{ backgroundColor: '#fff', padding: '5px', borderRadius: '30px', boxShadow: '0 4px 10px rgba(0,0,0,0.05)' }}>
                        <button
                            onClick={() => setActiveTab('basic')}
                            style={{
                                padding: '10px 30px',
                                borderRadius: '25px',
                                backgroundColor: activeTab === 'basic' ? 'var(--highlight)' : 'transparent',
                                fontWeight: '600',
                                color: activeTab === 'basic' ? '#333' : '#666',
                                transition: 'all 0.3s'
                            }}
                        >
                            Basic Skills
                        </button>
                        <button
                            onClick={() => setActiveTab('pro')}
                            style={{
                                padding: '10px 30px',
                                borderRadius: '25px',
                                backgroundColor: activeTab === 'pro' ? 'var(--support)' : 'transparent',
                                fontWeight: '600',
                                color: activeTab === 'pro' ? '#333' : '#666',
                                transition: 'all 0.3s'
                            }}
                        >
                            Pro Tools
                        </button>
                    </div>
                </div>

                {/* Content */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={activeTab}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.3 }}
                        style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))', gap: '2rem' }}
                    >
                        {(activeTab === 'basic' ? basicVideos : proVideos).map((video, index) => (
                            <VideoCard key={index} {...video} onClick={(url) => setSelectedVideo(url)} />
                        ))}
                    </motion.div>
                </AnimatePresence>

                <AnimatePresence>
                    {selectedVideo && (
                        <VideoModal url={selectedVideo} onClose={() => setSelectedVideo(null)} />
                    )}
                </AnimatePresence>
            </div>
        </Layout>
    );
}
