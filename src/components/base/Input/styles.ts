'use client'

import { styled, Paper, Typography } from '@mui/material';

export const InputBackground = styled(Paper)`
    position: relative;
    width: auto;
`

export const InputLabel = styled(Typography)`
    position: absolute;
    top: -9px;
    left: 12px;
    padding: 0 4px;
    z-index: 99;
`

export const HelperText = styled(Typography)`
    padding: 0 4px;
    z-index: 99;
  `