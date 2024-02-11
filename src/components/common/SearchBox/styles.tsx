'use client'

import { styled, InputBase } from '@mui/material'
import { colorPalette } from '@/config'

export const Search = styled('div')<{ width: number }>(({ theme, width }) => ({
   border: `1px solid ${colorPalette.stroke}`,
   display: 'flex',
   borderRadius: '12px',
   backgroundColor: colorPalette.white,
   width: `${width}px`,
   padding: '0 14px',
   minHeight: 0
}))

export const SearchIconWrapper = styled('div')(({ theme }) => ({
   padding: '14px 0',
   pointerEvents: 'none',
   display: 'flex',
   alignItems: 'center',
   justifyContent: 'center',
}))

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
   color: colorPalette.lightGrey,
   width: '100%',
   minHeight: 0,
   '& .MuiInputBase-input': {
      padding: '14px 0',
      marginLeft: '10px',
      color: colorPalette.dark,
      width: '100%',
   },
}))
