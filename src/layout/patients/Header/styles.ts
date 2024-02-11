'use client'

import {
  styled as muiStyled,
  Typography,
  Box,
  IconButton,
  AppBar,
} from '@mui/material'
import searchIcon from '@/../public/icons/search/primarySearchIcon.svg'
import { colorPalette } from '@/config'
import Link from 'next/link'
interface NavItemProps {
  active: boolean
}

export const AkaNavbar = muiStyled(AppBar)(({ theme }) => ({
  height: '66px',
  backgroundColor: '#FFFFFF',
}))

export const MainLogo = muiStyled('img')`
    width: 34px;
    height: 34px;
    border-radius: 50%;
`

export const LogoText = muiStyled('div')(({ theme }) => ({
  color: colorPalette.primary,
  marginLeft: '8px',
}))

export const LogoTextWhite = muiStyled('div')(({ theme }) => ({
  color: '#FFFFFF',
  marginLeft: '8px',
}))

export const NavItem = muiStyled(Link)<NavItemProps>(({ theme, active }) => ({
  display: 'flex',
  textDecoration: 'none',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '6px 16px',
  height: '30px',
  gap: '6px',
  color: active ? colorPalette.primary : '#000000',
  borderBottom: active ? `1px solid ${colorPalette.primary}` : 'none',
  '&:hover': {
    color: theme.palette.primary.main,
    borderBottom: `1px solid ${colorPalette.primary}`,
  },
}))

export const HeaderIconButton = muiStyled(IconButton)`
  width: 32px;
  height: 32px;
  border: 1px solid ${colorPalette.line};
  background-color: ${colorPalette.white};
  margin-right: 12px;
`
