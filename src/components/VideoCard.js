import React from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

const VideoCard = ({ title, duration, topic, color, url, onClick }) => {
    return (
        <motion.div
            onClick={() => onClick(url)}
            whileHover={{ y: -5, boxShadow: '0 10px 20px rgba(0,0,0,0.1)' }}
            style={{
                backgroundColor: '#fff',
                borderRadius: '16px',
                overflow: 'hidden',
                border: `1px solid ${color}`,
                cursor: 'pointer',
                display: 'block',
                textDecoration: 'none',
                color: 'inherit'
            }}
        >
            <div style={{
                height: '150px',
                backgroundColor: color,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative'
            }}>
                <div style={{
                    width: '50px',
                    height: '50px',
                    borderRadius: '50%',
                    backgroundColor: 'rgba(255,255,255,0.3)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <Play fill="#fff" color="#fff" />
                </div>
                <span style={{ position: 'absolute', bottom: '10px', right: '10px', backgroundColor: 'rgba(0,0,0,0.5)', color: '#fff', padding: '2px 8px', borderRadius: '4px', fontSize: '12px' }}>
                    {duration}
                </span>
            </div>
            <div style={{ padding: '1rem' }}>
                <span style={{ fontSize: '12px', color: '#888', textTransform: 'uppercase', letterSpacing: '1px' }}>{topic}</span>
                <h4 style={{ margin: '5px 0', fontSize: '1.1rem' }}>{title}</h4>
            </div>
        </motion.div>
    );
};

export default VideoCard;
