'use client'

import { styled, MenuItem } from '@mui/material'
import { colorPalette } from '@/config'

export const SelectOption = styled(MenuItem)(
  () => `
  padding: 11px 16px;
  background-color: ${colorPalette.white};
  color: ${colorPalette.dark};

  &:hover {
    background-color: ${colorPalette.primary} !important;
    color: ${colorPalette.white} !important;
  }
`
)
