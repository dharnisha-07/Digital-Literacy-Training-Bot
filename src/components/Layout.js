import React from 'react';
import Navbar from './Navbar';
import Head from 'next/head';

const Layout = ({ children, title = "Digi Dhost", backgroundColor = "var(--neutral)", backgroundImage = null, backgroundSize = "cover" }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Your Friendly Guide to the Digital World" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <div style={{
                minHeight: '100vh',
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: backgroundColor,
                backgroundImage: backgroundImage,
                backgroundSize: backgroundImage ? backgroundSize : undefined,
                backgroundPosition: backgroundImage ? 'center' : undefined,
                backgroundRepeat: backgroundImage ? 'no-repeat' : undefined,
                backgroundAttachment: backgroundImage ? 'fixed' : undefined,
                transition: 'background-color 0.5s ease'
            }}>
                <Navbar />
                <main style={{ flex: 1 }}>
                    {children}
                </main>
                <footer style={{
                    textAlign: 'center',
                    padding: '2rem',
                    backgroundColor: 'var(--neutral)',
                    color: '#666',
                    fontSize: '0.9rem'
                }}>
                    © {new Date().getFullYear()} Digi Dhost. Built for Digital Literacy.
                </footer>
            </div>
        </>
    );
};

export default Layout;
