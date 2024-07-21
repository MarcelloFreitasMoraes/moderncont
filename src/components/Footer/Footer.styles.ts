'use client'

import { Grid } from '@mui/material'
import styled from 'styled-components'

export const Footer = styled(Grid)`
    width: auto;
    background-color: #000;
    height: 90px;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        padding: 8px 0;
    }
`
export const BoxIcons = styled.span`
    position: relative;
    top: 5px;
`
