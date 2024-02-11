'use client'

import { colorPalette } from '@/config'
import { styled as muiStyled } from '@mui/material'
import { StaticImageData } from 'next/image'
import Link from 'next/link'

export const AuthContainer = muiStyled('div')(({ theme }) => ({
  backgroundColor: '#ffffff',
  // border: `5px solid ${theme.palette.primary.main}`,
  [theme.breakpoints.up('xl')]: {
    width: '25vw',
  },
  [theme.breakpoints.down('xl')]: {
    width: '30vw',
  },
  minHeight: '50vh',
  maxHeight: '70vh',
  padding: '40px 24px',
  borderRadius: '16px',
}))

export const FormContainer = muiStyled('div')(({ theme }) => ({
  padding: '0px 24px',
  width: '100%',
}))

export const StyledAuthLink = muiStyled(Link)(({ theme }) => ({
  color: theme.palette.primary.main,
}))

export const BackgroundImage = muiStyled('img')<{
  src: StaticImageData | string
  zIndex: number
  top: string
  right: string
  left: string
  bottom: string
}>(({ theme, zIndex, top, right, left, bottom }) => ({
  borderRadius: '8px',
  position: 'absolute',
  // border: '5px solid red',
  zIndex: zIndex,
  top: top,
  right: right,
  bottom: bottom,
  left: left,
  width: '100%',
  height: '250px',
}))

export const NewImage = muiStyled('img')<{
  src: string
  top: string
  right: string
  left: string
  bottom: string
}>(({ theme, top, right, left, bottom }) => ({
  borderRadius: '8px',
  position: 'absolute',
  // border: '5px solid red',
  top: top,
  right: right,
  bottom: bottom,
  left: left,
  width: '320px',
  height: '283.46px',
}))

export const MainRegisterLogo = muiStyled('img')<{
  src: string
  zIndex: number
  top: string
  right: string
  left: string
  bottom: string
}>(({ theme, zIndex, top, right, left, bottom }) => ({
  borderRadius: '16%',
  position: 'absolute',
  zIndex: zIndex,
  top: top,
  right: right,
  bottom: bottom,
  left: left,
  width: '120px',
  height: '120px',
}))

export const BackgroundColorRegister = muiStyled('div')(({ theme }) => ({
  backgroundColor: colorPalette.purple.shade_50,
  width: '100%',
  height: '250px',
}))
export const BackgroundColorSignin = muiStyled('div')(({ theme }) => ({
  backgroundColor: colorPalette.purple.shade_500,
  width: '100%',
  height: '250px',
}))
