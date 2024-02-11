import {
  Typography,
  TypographyProps as MuiTypographyProps,
} from '@mui/material'
import React, { forwardRef } from 'react'
import { colorPalette, typography } from '@/config'

type TypographyProps = MuiTypographyProps & {
  component?: React.ReactNode
}

const TableCellText = forwardRef((props: TypographyProps, ref: any) => {
  const { children, sx, ...restProps } = props

  return (
    <Typography
      ref={ref}
      className={typography.pc.descReg}
      color={colorPalette.dark}
      sx={{ display: 'flex', ...sx }}
      {...restProps}
    >
      {children}
    </Typography>
  )
})

export default TableCellText
