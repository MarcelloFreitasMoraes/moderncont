'use client'
import styled from 'styled-components'

export const Container = styled.div`
    > div > div > h2 {
        text-align: start;
        margin-top: 120px;
        color: #000;
        text-shadow: none;

        @media screen and (max-width: 768px) {
            font-size: 1.25rem;
            margin-top: 0;
        }
  
    }
`
