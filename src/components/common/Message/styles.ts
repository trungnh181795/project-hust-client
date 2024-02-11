'use client'

import { Paper, styled } from '@mui/material'

export const MessageBackground = styled(Paper)(({ color }) => ({
   padding: '16px',
   borderLeft: `2px solid ${color}`,
   borderRadius: '5px',
   minWidth: '300px',
   display: 'flex',
   justifyContent: 'space-between',
   alignItems: 'center',
}))
