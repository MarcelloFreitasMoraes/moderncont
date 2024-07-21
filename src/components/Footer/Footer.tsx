'use client'
import { Grid, Typography } from '@mui/material'
import React from 'react'
import { BoxIcons, Footer as StyledFooter } from './Footer.styles'
import { Facebook, Instagram } from '@mui/icons-material'
import { useRouter } from 'next/navigation'

const Footer: React.FC = () => {
    const { push } = useRouter()
    return (
        <>
            <StyledFooter container spacing={3}>
                <Grid item xs={12} sm={6} md={3} paddingTop={'0 !important'}>
                    <Typography
                        color="#FFF"
                        fontWeight={400}
                        sx={{
                            fontSize: { xs: '0.825rem', sm: '1rem' },
                            textAlign: 'center',
                        }}
                    >
                        <BoxIcons>
                            <Facebook
                                sx={{ mr: 1, cursor: 'pointer' }}
                                onClick={() =>
                                    push('https://www.facebook.com/MODERNCONT')
                                }
                            />
                            <Instagram
                                sx={{ mr: 1, cursor: 'pointer' }}
                                onClick={() =>
                                    push(
                                        'https://www.instagram.com/moderncontcontabil/'
                                    )
                                }
                            />
                        </BoxIcons>
                        Copyright All Rights Reserved © 2024 |
                    </Typography>
                    <Typography
                        color="#FFF"
                        fontWeight={400}
                        sx={{
                            fontSize: { xs: '0.825rem', sm: '1rem' },
                            textAlign: 'center',
                        }}
                    >
                        Desenvolvido por Marcello Moraes
                    </Typography>
                </Grid>
            </StyledFooter>
        </>
    )
}

export default Footer
