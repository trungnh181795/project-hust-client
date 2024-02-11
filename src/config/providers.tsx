'use client'

import { FC, ReactNode, useRef } from 'react'
import { colorPalette } from '@/config'
import { CssBaseline, Theme, ThemeProvider, createTheme } from '@mui/material'

const ConfigProvider: FC<{ children: ReactNode }> = ({ children }) => {
  const themeRef = useRef<Theme>()
  if (!themeRef.current) {
    // Create the store instance the first time this renders
    themeRef.current = createTheme({
      palette: {
        primary: {
          main: colorPalette.primary,
        },
        secondary: {
          main: colorPalette.grey,
        },
        info: {
          main: colorPalette.blue.shade_500,
        },
        error: {
          main: colorPalette.red.shade_500,
        },
        warning: {
          main: colorPalette.yellow.shade_500,
        },
        background: {
          default: '#ffffff',
          paper: '#ffffff',
        },
        text: {
          primary: '#081735',
          secondary: '#8F95B2',
        },
      },
      zIndex: {
        modal: 2000,
      },
      typography: {
        h1: {
          fontSize: '1.875rem', //30px
          fontWeight: '700',
          lineHeight: '1.375rem',
        },
        h2: {
          fontSize: '1.5rem', //24px
          fontWeight: '700',
          lineHeight: '2rem',
        },
        h3: {
          fontSize: '1rem', //16px
          fontWeight: '700',
          lineHeight: '1.5rem',
        },
        h4: {
          fontSize: '0.75rem', //12px
          fontWeight: '700',
          lineHeight: '1.25rem',
        },
        h5: {
          fontWeight: '700',
          fontSize: '1.125rem', //18px
          lineHeight: '1.125rem',
        },
        h6: {
          fontWeight: '700',
          fontSize: '0.875rem', //14px
          lineHeight: '1.375rem',
        },
        subtitle1: {
          fontWeight: '300',
          fontSize: '0.75rem',
          lineHeight: '1.25rem',
          color: '#8F95B2',
        },
        subtitle2: {
          fontWeight: '300',
          fontSize: '0.875rem',
          lineHeight: '1.375rem',
          color: '#8F95B2',
        },
        body2: {
          fontWeight: '500',
          fontSize: '0.875rem',
          lineHeight: '1.175rem',
        },
        button: {
          fontSize: '0.875rem',
          lineHeight: '1.375rem',
          fontWeight: '600',
          textTransform: 'none',
        },
      },
      components: {
        MuiInputBase: {
          styleOverrides: {
            root: {
              color: '#8F95B2',
              '&::placeholder': {
                color: '#8F95B2',
              },
            },
          },
        },
        MuiFormLabel: {
          styleOverrides: {
            root: {
              color: colorPalette.dark,
              fontWeight: 500,
            },
            asterisk: {
              color: colorPalette.red.shade_400,
            },
          },
        },
      },
    })
  }

  return (
    <CssBaseline>
      <ThemeProvider theme={themeRef.current}>{children}</ThemeProvider>
    </CssBaseline>
  )
}

export default ConfigProvider