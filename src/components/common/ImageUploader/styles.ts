'use client'

import { styled, Paper, Box, Avatar, IconButton } from '@mui/material'
import React from 'react'
import { colorPalette } from '@/config'

interface ModalContentProps {
   component?: React.ReactNode
   noValidate?: boolean
   autoComplete?: 'on' | 'off'
}

export const ModalContent = styled(Paper)<ModalContentProps>(() => ({
   position: 'absolute',
   top: '50%',
   left: '50%',
   transform: 'translate(-50%, -50%)',
   backgroundColor: colorPalette.white,
   borderRadius: '16px',
   minWidth: '35vw',
}))

export const PopupTitle = styled(Box)(() => ({
   width: '100%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   borderBottom: `1px solid ${colorPalette.stroke}`,
   padding: '8px 16px',
}))

export const PopupContent = styled(Box)(() => ({
   padding: '48px 48px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '100%',
   minHeight: '100px',
}))

export const PreviewImg = styled(Avatar)(() => ({
   width: '350px',
   height: '350px',
   borderRadius: 0,
}))

export const DiscardPreview = styled(IconButton)(() => ({
   position: 'absolute',
   top: '16px',
   right: '16px',
   backgroundColor: colorPalette.primary,
   '&:hover': {
      backgroundColor: colorPalette.purple.shade_700,
   },
}))

export const PopupFooter = styled(Box)(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'flex-end',
   alignItems: 'center',
   borderTop: `1px solid ${colorPalette.stroke}`,
   padding: '16px 16px',
}))
