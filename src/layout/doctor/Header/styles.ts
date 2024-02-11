'use client'

import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar'
import { styled as muiStyled, Typography, Box, IconButton } from '@mui/material'
import { colorPalette } from '@/config'
import Link from 'next/link'

type AppBarProps = MuiAppBarProps & {
   open?: boolean
}

export const UsernameHeader = muiStyled(Typography)`
    font-weight: bold;
    color: #2c3742;
    font-size: 14px;
  `

export const MenuChild = muiStyled(Typography)`
    display: flex;
    align-items: center;
    line-height: 30px;
  `

export const Linkstyles = muiStyled(Link)`
    text-decoration:none;
    color:black;
  `

export const FlexHeader = muiStyled('div')<{ open: boolean }>`
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: linear 0.2s;
  `

export const AppBar = muiStyled(MuiAppBar, {
   shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
   backgroundColor: theme.palette.background.default + '!important',
   zIndex: theme.zIndex.drawer + 1,
   transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   ...(open && {
      transition: theme.transitions.create(['width', 'margin'], {
         easing: theme.transitions.easing.sharp,
         duration: theme.transitions.duration.enteringScreen,
      }),
   }),
}))

export const WelcomeBox = muiStyled(Box)(({ theme }) => ({
   display: 'flex',
   flexGrow: 1,
   flexDirection: 'column',
   justifyContent: 'center',
   alignItems: 'flex-start',
}))

export const HeaderIconBtn = muiStyled(IconButton)(
   () => ({
      width: '52px',
      height: '52px',
      border: `1px solid ${colorPalette.line}`,
      marginLeft: '16px',
      position: 'relative',
   })
)

export const Badge = muiStyled('div')(
   () => ({
      width: '22px',
      height: '22px',
      textAlign: 'center',
      verticalAlign: 'center',
      color: colorPalette.white,
      backgroundColor: colorPalette.red.shade_500,
      borderRadius: '50%',
      border: `2px solid ${colorPalette.white}`,
      position: 'absolute',
      top: 0,
      right: -10,
   })
)
