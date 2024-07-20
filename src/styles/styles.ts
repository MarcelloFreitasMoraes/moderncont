'use client'

import styled from 'styled-components'

interface Props {
  image?: string
}

export const Container = styled.div`
    width: 100%;
`
export const BoxImage = styled.div<Props>`
    width: 100%;
    height: 500px;
    background-image: url(${(props) => props.image || 'banner.jpg'});
    background-size: 100% 100%;
    background-repeat: no-repeat;

    &::before {
    content: "";
    position: absolute;
    height: 500px;
    top: 77px;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.1);
  }
`
