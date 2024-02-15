import { IconButton, ButtonBaseProps } from '@mui/material'
import { colorPalette } from '@/config'
import { Icon } from '@/components/base'
import { ArrowLeftIcon, ArrowRightIcon } from '@/components/icons'
import { CSSProperties, ReactNode } from 'react'

type NavIconButtonProps = ButtonBaseProps & {
  dir: 'left' | 'right'
  variant: 'outlined' | 'text' | 'contained'
  size: 'lg' | 'sm'
  style?: CSSProperties
  component?: ReactNode
  to?: string
  children?: ReactNode
}

const styledButton = (Component: any) => {
  return (props: NavIconButtonProps) => {
    const { dir = 'left', variant, size, style } = props
    const sizeStyles = {
      lg: {
        width: '56px',
        height: '56px',
      },
      sm: {
        width: '40px',
        height: '40px',
      },
    }

    const variantStyles = {
      outlined: {
        backgroundColor: colorPalette.white,
        border: `1px solid ${colorPalette.stroke}`,
      },
      text: {
        backgroundColor: colorPalette.white,
        border: 'none',
      },
      contained: {
        backgroundColor: colorPalette.primary,
        border: 'none',
      },
    }

    const btnProps = {
      sx: {
        ...variantStyles[variant],
        ...sizeStyles[size],
        ...style,
      },
      ...props,
    }

    return (
      <Component {...btnProps}>
        <Icon
          type="fill"
          src={dir === 'right' ? ArrowRightIcon : ArrowLeftIcon}
          color={
            variant === 'contained' ? colorPalette.white : colorPalette.primary
          }
        />
      </Component>
    )
  }
}

const NavIconButton = styledButton(IconButton)

export default NavIconButton
