import { ReactNode } from 'react'
import {
   Button as MuiButton,
   ButtonProps as MuiButtonProps,
} from '@mui/material'
import { typography } from '@/config'

export type ButtonProps = MuiButtonProps & {
   customsize: 'lg' | 'sm'
   component?: ReactNode
   to?: string
}

const styledButton = (Component: typeof MuiButton) => {
   return (props: ButtonProps) => {
      const { customsize, sx, children } = props

      const sizeStyles = {
         lg: {
            fontSize: '1rem',
            padding: '18px 24px',
         },
         sm: {
            padding: '10px 24px',
         },
      }

      const btnProps = {
         ...(customsize === 'sm' && { className: 'typography-mb-s3' }),
         ...props,
      }

      return (
         <Component
            className={typography.mb.s3}
            {...btnProps}
            sx={{
               ...sizeStyles[customsize],
               borderRadius: '99px',
               textTransform: 'none',
               ...sx,
            }}
         >
            {children}
         </Component>
      )
   }
}

const Button = styledButton(MuiButton)

export default Button
