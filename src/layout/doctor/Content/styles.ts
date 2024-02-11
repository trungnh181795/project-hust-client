'use client'

import { styled as muiStyled } from '@mui/material'
import { IconButton, Box } from '@mui/material'
import { colorPalette } from '@/config'

export const MainBox = muiStyled(Box)(() => {
   return {
      minHeight: 'calc(100vh - 112px)',
   }
})

export const ContentContainer = muiStyled('div')(() => {
   return {
      width: '100%',
      height: '100%',
      background: colorPalette.background,
      position: 'relative',
   }
})

export const ToggleMenuButton = muiStyled(IconButton)<{ open: boolean }>(
   ({ open }) => {
      return {
         position: 'fixed',
         width: '24px',
         height: '24px',
         left: open ? '257px' : '96px',
         top: '44px',
         zIndex: '1500',
         backgroundColor: colorPalette.primary,
         color: colorPalette.primary,
         '&:hover': {
            backgroundColor: colorPalette.primary,
         },
         transition: 'all linear 0.2s',
      }
   }
)
