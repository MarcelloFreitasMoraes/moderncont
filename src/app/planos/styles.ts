'use client'
import styled from 'styled-components'

export const Container = styled.div`
    > div > div > h2 {
        text-align: center;
        margin-top: 120px;

        @media screen and (max-width: 768px) {
            font-size: 1.25rem;
            margin-top: 0;
        }
    }
`
