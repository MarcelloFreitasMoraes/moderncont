'use client'
import * as React from 'react'
import Box from '@mui/material/Box'
import { BoxImage } from '@/styles/styles'
import TypographyComponent from '../Typography/Typography'

type BannerProps = {
  titleOne?: string
  titleTwo?: string
  titleThree?: string
  textOne?: string
  textTwo?: string
  image?: string
}

const BannerText = ({ text, gutterBottom }: { text: string, gutterBottom?: boolean }) => (
  <TypographyComponent
    variant="h2"
    component="h2"
    color="#FFF"
    fontWeight={900}
    sx={{ textShadow: '0.1em 0.1em 0.2em #000' }}
    gutterBottom={gutterBottom}
  >
    {text}
  </TypographyComponent>
)

const Banner = ({ titleOne, titleTwo, titleThree, textOne, textTwo, image }: BannerProps) => (
  <BoxImage image={image}>
    <Box sx={{ width: '100%', padding: '60px' }}>
      {titleOne && <BannerText text={titleOne} />}
      {titleTwo && <BannerText text={titleTwo} />}
      {titleThree && <BannerText text={titleThree} gutterBottom />}
      {textOne && (
        <TypographyComponent
          variant="inherit"
          color="#FFF"
          fontWeight={700}
          sx={{ textShadow: '0.1em 0.1em 0.2em #000' }}
        >
          {textOne}
        </TypographyComponent>
      )}
      {textTwo && (
        <TypographyComponent
          variant="inherit"
          gutterBottom
          color="#FFF"
          fontWeight={700}
          sx={{ textShadow: '0.1em 0.1em 0.2em #000' }}
        >
          {textTwo}
        </TypographyComponent>
      )}
    </Box>
  </BoxImage>
)

export default Banner
