'use client'
import { Typography } from '@mui/material'
import React from 'react'
import { BoxIcons, Footer as StyledFooter } from './Footer.styles'
import { Facebook, Instagram } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

const Footer: React.FC = () => {
    const { push } = useRouter()
    return (
        <StyledFooter>
            <Typography color="#FFF" fontWeight={400}>
                <BoxIcons>
                    <Facebook
                        sx={{ mr: 1 }}
                        onClick={() =>
                            push('https://www.facebook.com/MODERNCONT')
                        }
                    />
                    <Instagram
                        sx={{ mr: 1 }}
                        onClick={() =>
                            push(
                                'https://www.instagram.com/moderncontcontabil/'
                            )
                        }
                    />
                </BoxIcons>
                Copyright All Rights Reserved © 2024 | Desenvolvido por Marcello
                Moraes
            </Typography>
        </StyledFooter>
    )
}

export default Footer
