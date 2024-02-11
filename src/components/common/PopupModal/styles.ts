'use client'

import { styled, Paper, Box } from '@mui/material'
import { colorPalette } from '@/config'

interface ModalContentProps {
   maxwidth?: string
   minwidth?: string
}

export const ModalContent = styled(Paper)<ModalContentProps>(
   ({ maxwidth = '40vw', minwidth = '40vw' }) => ({
      position: 'absolute',
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
      backgroundColor: colorPalette.white,
      borderRadius: '16px',
      minWidth: minwidth,
      maxWidth: maxwidth,
   })
)

export const PopupHeader = styled(Box)(() => ({
   width: '100%',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'space-between',
   borderBottom: `1px solid ${colorPalette.stroke}`,
   padding: '8px 16px',
}))

export const PopupFooter = styled(Box)(() => ({
   width: '100%',
   display: 'flex',
   justifyContent: 'flex-end',
   alignItems: 'center',
   borderTop: `1px solid ${colorPalette.stroke}`,
   padding: '16px 16px',
}))
