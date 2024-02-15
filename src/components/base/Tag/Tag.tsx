import { Chip, ChipProps, Typography } from '@mui/material'
import { colorPalette, typography } from '@/config'

type TagProps = ChipProps & {
  customSize?: 'xs' | 'sm' | 'lg'
}

const styledTag = (Component: typeof Chip) => {
  return ({
    color,
    label,
    customSize = 'sm',
    sx,
    variant,
    ...resetProps
  }: TagProps) => {
    const sizeStyle = {
      xs: {
        padding: '2px 4px',
        typography: typography.pc.helpReg,
      },
      sm: {
        padding: '2px 4px',
        typography: typography.pc.helpReg,
      },
      lg: {
        padding: '2px 4px',
        typography: typography.mb.b3,
      },
    }

    return (
      <Component
        label={
          <Typography
            className={sizeStyle[customSize].typography}
            color={variant === 'filled' ? colorPalette.white : color}
          >
            {label}
          </Typography>
        }
        variant={variant}
        color={color}
        sx={{
          ...sx,
          ...sizeStyle[customSize],
        }}
        {...resetProps}
      />
    )
  }
}

const Tag = styledTag(Chip)

export default Tag
