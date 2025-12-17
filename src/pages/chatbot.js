import React, { useState, useRef, useEffect } from 'react';
import Layout from '@/components/Layout';
import { useLanguage } from '@/context/LanguageContext';
import { Send, Mic, Volume2, StopCircle } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { motion } from 'framer-motion';

export default function Chatbot() {
    const { language } = useLanguage();
    const botColors = ['#FFEBEB', '#FFF0F0', '#FFD6C9', '#FFFFFF'];
    const getRandomColor = () => botColors[Math.floor(Math.random() * botColors.length)];

    const [messages, setMessages] = useState([
        {
            role: 'bot',
            content: language === 'en' ? "Hello! I'm Digi Dhost. How can I help you today?" : "வணக்கம்! நான் டிஜி தோஸ்த். இன்று நான் உங்களுக்கு எப்படி உதவ முடியும்?",
            color: '#FFFFFF' // Default white
        }
    ]);
    const [input, setInput] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [isListening, setIsListening] = useState(false);
    const [isSpeaking, setIsSpeaking] = useState(false);

    const messagesEndRef = useRef(null);
    const recognitionRef = useRef(null);

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Initialize Speech Recognition
    useEffect(() => {
        if ('webkitSpeechRecognition' in window || 'SpeechRecognition' in window) {
            const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
            recognitionRef.current = new SpeechRecognition();
            recognitionRef.current.continuous = false;
            recognitionRef.current.interimResults = false;
            recognitionRef.current.lang = language === 'ta' ? 'ta-IN' : 'en-IN';

            recognitionRef.current.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                setInput(transcript);
                setIsListening(false);
            };

            recognitionRef.current.onerror = (event) => {
                console.error("Speech recognition error", event.error);
                setIsListening(false);
            };

            recognitionRef.current.onend = () => {
                setIsListening(false);
            };
        }
    }, [language]);

    const toggleListening = () => {
        if (isListening) {
            recognitionRef.current?.stop();
        } else {
            recognitionRef.current?.start();
            setIsListening(true);
        }
    };

    const cleanMarkdown = (text) => {
        if (!text) return "";
        return text
            .replace(/[#*_`]/g, "") // Remove Markdown chars
            .replace(/\[([^\]]+)\]\([^\)]+\)/g, "$1") // Link text only
            .replace(/https?:\/\/\S+/g, "") // Remove URLs
            .replace(/[\/\\]/g, "") // Remove slashes as requested
            .replace(/\n/g, ". "); // Pause at newlines
    };

    const speak = (text) => {
        if ('speechSynthesis' in window) {
            if (isSpeaking) {
                window.speechSynthesis.cancel();
                setIsSpeaking(false);
                return;
            }

            const cleanText = cleanMarkdown(text);
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.lang = language === 'ta' ? 'ta-IN' : 'en-IN';
            utterance.onend = () => setIsSpeaking(false);

            setIsSpeaking(true);
            window.speechSynthesis.speak(utterance);
        }
    };

    const sendMessage = async () => {
        if (!input.trim()) return;

        const userMsg = { role: 'user', content: input };
        setMessages(prev => [...prev, userMsg]);
        setInput('');
        setIsLoading(true);

        try {
            const history = messages.map(m => ({ role: m.role === 'bot' ? 'model' : 'user', content: m.content }));

            const res = await fetch('/api/chat', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ message: input, history, language })
            });

            const data = await res.json();
            const botMsg = {
                role: 'bot',
                content: data.response,
                color: getRandomColor()
            };

            setMessages(prev => [...prev, botMsg]);
            speak(data.response); // Auto-speak response
        } catch (error) {
            console.error("Chat error:", error);
            setMessages(prev => [...prev, { role: 'bot', content: "Sorry, I encountered an error. Please try again.", color: '#FFFFFF' }]);
        } finally {
            setIsLoading(false);
        }
    };

    const handleKeyPress = (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendMessage();
        }
    };

    return (
        <Layout title="Chat with Digi Dhost" backgroundColor="#FFFFFF">
            <div className="container" style={{ height: 'calc(100vh - 80px)', display: 'flex', flexDirection: 'column', padding: '20px' }}>

                {/* Chat Window */}
                <div style={{
                    flex: 1,
                    backgroundColor: '#fff',
                    borderRadius: '20px',
                    border: '3px solid #730101', // Barn Red Border
                    boxShadow: 'inset 2px 2px 5px rgba(255,255,255,0.7), inset -2px -2px 5px rgba(0,0,0,0.1), 0 10px 30px rgba(0,0,0,0.05)', // Embossed effect
                    padding: '20px',
                    overflowY: 'auto',
                    marginBottom: '20px',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '15px'
                }}>
                    {messages.map((msg, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            style={{
                                alignSelf: msg.role === 'user' ? 'flex-end' : 'flex-start',
                                maxWidth: '80%',
                                backgroundColor: msg.role === 'user' ? 'var(--primary)' : (msg.color || '#FFFFFF'),
                                color: msg.role === 'user' ? '#fff' : 'var(--secondary)',
                                border: msg.role === 'bot' ? '1px solid var(--secondary)' : 'none',
                                padding: '12px 18px',
                                borderRadius: msg.role === 'user' ? '18px 18px 0 18px' : '18px 18px 18px 0',
                                boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                            }}
                        >
                            <ReactMarkdown>{msg.content}</ReactMarkdown>
                        </motion.div>
                    ))}
                    {isLoading && (
                        <div style={{ alignSelf: 'flex-start', padding: '10px', color: '#888' }}>
                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>●</motion.span>
                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.2 }}>●</motion.span>
                            <motion.span animate={{ opacity: [0, 1, 0] }} transition={{ repeat: Infinity, duration: 1.5, delay: 0.4 }}>●</motion.span>
                        </div>
                    )}
                    <div ref={messagesEndRef} />
                </div>

                {/* Input Area */}
                <div style={{
                    backgroundColor: '#910508',
                    padding: '15px',
                    borderRadius: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    boxShadow: '0 5px 20px rgba(0,0,0,0.1)'
                }}>
                    <button
                        onClick={toggleListening}
                        style={{
                            padding: '10px',
                            borderRadius: '50%',
                            backgroundColor: isListening ? '#ff4d4d' : 'var(--support)',
                            color: isListening ? '#fff' : '#333',
                            transition: 'all 0.3s'
                        }}
                    >
                        <Mic size={20} />
                    </button>

                    <input
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        onKeyPress={handleKeyPress}
                        placeholder={language === 'en' ? "Type your message..." : "உங்கள் செய்தியை தட்டச்சு செய்யவும்..."}
                        style={{
                            flex: 1,
                            border: 'none',
                            outline: 'none',
                            fontSize: '16px',
                            backgroundColor: 'transparent',
                            color: '#fff'
                        }}
                    />

                    <button
                        onClick={() => speak(messages[messages.length - 1]?.content)}
                        style={{ padding: '10px', color: isSpeaking ? 'var(--primary)' : '#888' }}
                    >
                        {isSpeaking ? <StopCircle size={20} /> : <Volume2 size={20} />}
                    </button>

                    <button
                        onClick={sendMessage}
                        disabled={!input.trim() || isLoading}
                        style={{
                            padding: '12px',
                            borderRadius: '50%',
                            backgroundColor: input.trim() ? 'var(--secondary)' : '#eee',
                            color: input.trim() ? '#333' : '#aaa',
                            transition: 'all 0.3s'
                        }}
                    >
                        <Send size={20} />
                    </button>
                </div>

            </div>
        </Layout>
    );
}
