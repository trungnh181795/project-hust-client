'use client'

import { colorPalette } from "@/config";
import {
  styled as muiStyled,
  Box,
} from "@mui/material";

export const AkaNavbar = muiStyled(Box)(({ theme }) => ({
  width: '100%',
  height: '70px',
  borderTopLeftRadius: '24px',
  borderTopRightRadius: '24px',
  boxShadow: '0px -8px 30px rgba(0, 0, 0, 0.07)',
  position: 'fixed',
  bottom: 0,
  backgroundColor: colorPalette.white
}))
