import { colorPalette, typography } from '@/config'
import {
  FormControlLabel,
  FormControlLabelProps as MuiFormControlLabelProps,
  Checkbox as MuiCheckbox,
  Typography,
} from '@mui/material'
import { forwardRef } from 'react'

type FormControlLabelProps = MuiFormControlLabelProps & {
  control?: any
}

const Checkbox = forwardRef(
  ({ label, control, ...props }: FormControlLabelProps, ref: any) => {
    return (
      <FormControlLabel
        label={
          <Typography
            className={typography.pc.descReg}
            color={colorPalette.dark}
            component="div"
            sx={{ overflow: 'hidden' }}
            textAlign="right"
          >
            {label}
          </Typography>
        }
        ref={ref}
        control={<MuiCheckbox />}
        {...props}
      />
    )
  }
)

export default Checkbox
