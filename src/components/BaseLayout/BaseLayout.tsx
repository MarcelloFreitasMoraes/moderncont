'use client'

import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import IconButton from '@mui/material/IconButton';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { Box } from '@mui/material';

const BaseLayout: React.FC<{ children?: React.ReactNode }> = ({ children }) => {

    const handleWhatsAppClick = () => {
        if (typeof window !== 'undefined') {
            window.open('https://api.whatsapp.com/send/?phone=5511943020607&text&type=phone_number&app_absent=0', '_blank');
        }
    }

    return (
        <>
            <Header />
            {children}
            <Footer />
            <Box 
                sx={{
                    position: 'fixed',
                    right: 20,
                    bottom: '20%',
                    transform: 'translateY(50%)',
                    zIndex: 1000,
                    backgroundColor: '#25d366',
                    borderRadius: '50%',
                    animation: 'moveUpDown 6s infinite'
                }}
            >
                <IconButton 
                    color="primary" 
                    aria-label="whatsapp"
                    sx={{ color: '#fff',
                       '&::before': {
                            top: 0,
                            left: 0,
                            width: '100%',
                            height: '100%',
                            content: '""',
                            opacity: 0,
                            overflow: 'hidden',
                            position: 'absolute',
                            transition: 'all 250ms ease-in-out 0s',
                            visibility: 'hidden',
                            borderRadius: '50%',
                            backgroundSize: 'cover',
                            backgroundRepeat: 'no-repeat',
                            backgroundPosition: 'center center',
                        },
                        '&:hover::before': {
                            opacity: 1,
                            visibility: 'visible',
                        }
                     }}
                    onClick={handleWhatsAppClick}
                >
                    <WhatsAppIcon fontSize="large" />
                </IconButton>
            </Box>
            <style jsx global>{`
                @keyframes moveUpDown {
                    0%, 100% {
                        transform: translateY(0);
                    }
                    50% {
                        transform: translateY(-10px);
                    }
                }
            `}</style>
        </>
    );
}

export default BaseLayout;
