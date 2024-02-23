'use client'

import { styled as muiStyled } from '@mui/material';
import { IconButton, Box } from '@mui/material';

export const MainBox = muiStyled(Box)`
  min-height: calc(100vh - 66px);
  padding: 36px 0;
`;

export const ContentContainer = muiStyled('div')`
    width: 100%;
    height: 100%;
    background: #FAFBFF;
    padding: 20px;
    position: relative;
`;

export const ToggleMenuButton = muiStyled(IconButton)<{isOpen: boolean}>(({ theme, isOpen }) => ({
    position: 'fixed',
    width: '36px',
    height: '36px',
    left: isOpen ? '250px' : '110px',
    bottom: '100px',
    zIndex: '1500',
    backgroundColor: theme.palette.primary.main,
    color: '#ffffff',
    '&:hover': {
        backgroundColor: theme.palette.primary.main
    },
    transition: 'all linear 0.2s'
}))
