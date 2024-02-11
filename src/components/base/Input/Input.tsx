'use client'

import React, { useState, forwardRef } from 'react'
import {
  InputBase,
  InputBaseProps,
  TextFieldProps,
  InputAdornment,
  IconButton,
} from '@mui/material'
import Visibility from '@mui/icons-material/Visibility'
import VisibilityOff from '@mui/icons-material/VisibilityOff'
import { colorPalette, typography } from '@/config'
import { InputBackground, InputLabel, HelperText } from './styles'

type InputProps = TextFieldProps &
  InputBaseProps & {
    label?: string
    helperText?: string
  }

const styledInput = (Component: typeof InputBase) => {
  return forwardRef((props: InputProps, ref: any) => {
    const {
      helperText,
      label,
      sx,
      type,
      required,
      endAdornment,
      ...inputProps
    } = props

    const [isFocus, setIsFocus] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
      setShowPassword((prev) => !prev)
    }

    const handleMouseDownPassword = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault()
    }

    const styles = {
      color: colorPalette.dark,
      width: '100%',
      border: `1px solid ${
        props.error
          ? colorPalette.red.shade_500
          : isFocus
            ? colorPalette.primary
            : colorPalette.stroke
      }`,
      '&:hover': {
        borderColor: !isFocus && colorPalette.dark,
      },
      borderRadius: '12px',
      padding: '8px 16px',
      '& .MuiInputBase-input': {
        width: '100%',
        '&::placeholder': {
          color: colorPalette.lightGrey,
        },
      },
    }

    return (
      <InputBackground
        elevation={0}
        sx={{ bgcolor: colorPalette.white, ...sx }}
      >
        {label && (
          <InputLabel
            className={typography.mb.descSemi}
            color={
              props.error
                ? colorPalette.red.shade_500
                : isFocus
                  ? colorPalette.primary
                  : colorPalette.dark
            }
            sx={{ bgcolor: colorPalette.white }}
          >
            {label}
            {required && '*'}
          </InputLabel>
        )}
        <Component
          className={typography.mb.b2}
          ref={ref}
          sx={styles}
          required={required}
          {...inputProps}
          type={
            type === 'password' ? (showPassword ? 'text' : 'password') : type
          }
          onFocus={() => setIsFocus(true)}
          onBlur={() => setIsFocus(false)}
          endAdornment={
            type === 'password' ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            ) : (
              endAdornment
            )
          }
        />
        {helperText ? (
          <HelperText
            className={typography.mb.descSemi}
            color={colorPalette.red.shade_500}
          >
            {helperText}
          </HelperText>
        ) : null}
      </InputBackground>
    )
  })
}

const Input = styledInput(InputBase)

export default Input
