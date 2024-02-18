'use client'

import { styled } from '@mui/system'
import { TextField, Typography } from '@mui/material'
import { colorPalette, typography } from '@/config'

export const StyledTextField = styled(TextField)(
   () => `
    color: ${colorPalette.dark};
    .MuiInputBase-input {
        color: ${colorPalette.dark};
        
    }
    .MuiOutlinedInput-notchedOutline {
        border-radius: 12px;
        border-color: ${colorPalette.stroke};
        
    }
`
)

export const InputLabel = styled(Typography)`
   position: absolute;
   top: -9px;
   left: 12px;
   padding: 0 4px;
   z-index: 99;
`
