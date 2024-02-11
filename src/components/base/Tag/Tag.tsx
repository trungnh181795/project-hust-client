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
      },
      sm: {
        padding: '2px 4px',
      },
      lg: {
        padding: '2px 4px',
      },
    }

    return (
      <Component
        label={
          <Typography
            className={typography.mb.b3}
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
