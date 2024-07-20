'use client'

import styled, { keyframes } from 'styled-components';

const decrescendo = keyframes`
  0% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
  }
`;

interface Props {
  image?: string
}

export const Container = styled.div`
    width: 100%;
`

export const Back = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #f4f4f4;
  overflow: hidden;
  z-index: 0;

  &:before {
    content: '';
    display: block;
    width: 1400px;
    height: 1400px;
    position: absolute;
    z-index: 4;
    right: -450px;
    bottom: -700px;
    background-color: transparent;
    border: 30px solid #d19c47;
    border-radius: 50%;
    -webkit-animation: ${decrescendo} 2.5s alternate infinite ease-in;
    -moz-animation: ${decrescendo} 2.5s alternate infinite ease-in;
    animation: ${decrescendo} 2.5s alternate infinite ease-in;
    z-index: 0;
  }

  &:after {
    content: '';
    display: block;
    width: 900px;
    height: 900px;
    position: absolute;
    z-index: 5;
    right: -200px;
    bottom: -450px;
    background-color:  #d19c47;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    -webkit-animation: ${decrescendo} 2.5s alternate infinite ease-in;
    -moz-animation: ${decrescendo} 2.5s alternate infinite ease-in;
    animation: ${decrescendo} 2.5s alternate infinite ease-in;
    z-index: 0;
}
`;

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
