import { forwardRef } from 'react'
import {
  Select as MuiSelect,
  Box,
  SelectProps as MuiSelectProps,
  Typography,
} from '@mui/material'
import Input from '@/components/base/Input'
import Icon from '@/components/base/Icon'
// import ArrowDownIcon from '@/../public/icons/nav-down.svg'
import { colorPalette, typography } from '@/config'
import SelectOption from './SelectOption'
import Image from 'next/image'

interface SelectProps extends MuiSelectProps {
  label?: string
  component?: React.ReactNode
  helperText?: string
}

const MenuProps = {
  PaperProps: {
    style: {
      width: 250,
      borderRadius: '12px',
      top: 0,
    },
  },
}

const styledSelect = (Component: typeof MuiSelect) => {
  return forwardRef((props: SelectProps, ref: any) => {
    const { helperText, label, children, placeholder, sx, ...restProps } = props

    return (
      <Box sx={{ ...sx }}>
        <Box sx={{ position: 'relative' }}>
          {/* <Icon
            type="fill"
            src={ArrowDownIcon}
            color={colorPalette.dark}
            sx={{
              position: 'absolute',
              top: '50%',
              transform: 'translate(0, -50%)',
              right: '16px',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          /> */}
          {/* <Image
            alt="test"
            src={ArrowDownIcon}
            style={{
              position: 'absolute',
              top: '50%',
              transform: 'translate(0, -50%)',
              right: '16px',
              zIndex: 3,
              pointerEvents: 'none',
            }}
          /> */}
          <Component
            className={typography.mb.b2}
            ref={ref}
            label={label}
            input={<Input label={label} />}
            displayEmpty
            component="select"
            MenuProps={MenuProps}
            {...restProps}
            sx={{
              '& .MuiSelect-icon': {
                display: 'none',
              },
              '& .MuiMenu-paper': {
                bottom: 0,
              },
            }}
          >
            <SelectOption disabled value="">
              <Typography color={colorPalette.lightGrey}>
                {placeholder}
              </Typography>
            </SelectOption>
            {children}
          </Component>
        </Box>
        {helperText ? (
          <Typography
            className={typography.mb.descSemi}
            color={colorPalette.red.shade_500}
            sx={{ padding: '0 4px' }}
          >
            {helperText}
          </Typography>
        ) : null}
      </Box>
    )
  })
}

const Select = styledSelect(MuiSelect)

export default Select
