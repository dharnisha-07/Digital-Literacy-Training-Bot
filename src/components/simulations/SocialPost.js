import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Image as ImageIcon, Send, Heart, MessageCircle } from 'lucide-react';

const SocialPost = () => {
    const [caption, setCaption] = useState('');
    const [posted, setPosted] = useState(false);
    const [imageSelected, setImageSelected] = useState(false);

    const handlePost = () => {
        setPosted(true);
        setTimeout(() => {
            setPosted(false);
            setCaption('');
            setImageSelected(false);
        }, 3000);
    };

    return (
        <div style={{ padding: '20px', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h3 style={{ marginBottom: '20px', color: '#5F6368' }}>Instagram Practice</h3>

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
                <div style={{ padding: '15px', borderBottom: '1px solid #eee', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <span style={{ fontWeight: 'bold', fontSize: '18px' }}>Instagram</span>
                </div>

                {/* Content */}
                <div style={{ padding: '10px', height: 'calc(100% - 60px)', overflowY: 'auto' }}>

                    {!posted ? (
                        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
                            <div
                                onClick={() => setImageSelected(true)}
                                style={{
                                    width: '100%',
                                    height: '250px',
                                    backgroundColor: '#f0f0f0',
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    cursor: 'pointer',
                                    borderRadius: '8px',
                                    border: '2px dashed #ccc',
                                    marginBottom: '20px'
                                }}
                            >
                                {imageSelected ? (
                                    <img src="https://picsum.photos/300/250" alt="Selected" style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '8px' }} />
                                ) : (
                                    <>
                                        <ImageIcon size={40} color="#999" />
                                        <span style={{ color: '#999', marginTop: '10px' }}>Tap to select photo</span>
                                    </>
                                )}
                            </div>

                            <textarea
                                placeholder="Write a caption..."
                                value={caption}
                                onChange={(e) => setCaption(e.target.value)}
                                style={{
                                    width: '100%',
                                    height: '100px',
                                    padding: '10px',
                                    border: 'none',
                                    resize: 'none',
                                    fontSize: '16px',
                                    outline: 'none',
                                    borderBottom: '1px solid #eee'
                                }}
                            />

                            <div style={{ flex: 1 }}></div>

                            <button
                                disabled={!imageSelected}
                                onClick={handlePost}
                                style={{
                                    width: '100%',
                                    backgroundColor: imageSelected ? '#0095F6' : '#B2DFFC',
                                    color: '#fff',
                                    padding: '12px',
                                    borderRadius: '8px',
                                    fontWeight: '600'
                                }}
                            >
                                Share
                            </button>
                        </div>
                    ) : (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            <div style={{ padding: '10px 0', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <div style={{ width: '30px', height: '30px', borderRadius: '50%', backgroundColor: '#ddd' }}></div>
                                <span style={{ fontWeight: 'bold' }}>You</span>
                            </div>
                            <img src="https://picsum.photos/300/250" alt="Post" style={{ width: '100%', borderRadius: '4px' }} />
                            <div style={{ padding: '10px 0', display: 'flex', gap: '15px' }}>
                                <Heart size={24} />
                                <MessageCircle size={24} />
                                <Send size={24} />
                            </div>
                            <div>
                                <span style={{ fontWeight: 'bold' }}>You</span> {caption}
                            </div>
                            <div style={{ marginTop: '20px', textAlign: 'center', color: '#0095F6', fontWeight: 'bold' }}>
                                Posted Successfully!
                            </div>
                        </motion.div>
                    )}

                </div>
            </div>
        </div>
    );
};

export default SocialPost;
