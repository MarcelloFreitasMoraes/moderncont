'use client'

import { Grid } from '@mui/material'
import styled from 'styled-components'

export const Footer = styled(Grid)`
    width: auto;
    background-color: #000;
    height: auto;
    display: flex;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 768px) {
        height: 90px;
        padding-top: 8px;
    }
`
export const BoxIcons = styled.span`
    position: relative;
    top: 5px;
`
