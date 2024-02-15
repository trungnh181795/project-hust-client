'use client'

import { forwardRef, useState } from 'react'
import dayjs, { Dayjs } from 'dayjs'
import Stack from '@mui/material/Stack'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { DateTimePicker as MuiDateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { typography } from '@/config'
import { Input } from '@/components/base'

interface DateTimePickerProps {
  label: string
  error?: boolean
  helperText?: string
  value: any
  onChange: (value: Date) => void
}

const DateTimePicker = forwardRef(
  (
    {
      label,
      error = false,
      helperText = '',
      value: inputValue,
      onChange,
      ...props
    }: DateTimePickerProps,
    ref: any
  ) => {
    const [value, setValue] = useState<Dayjs | null>(inputValue)

    const handleChange = (newValue: Dayjs | null) => {
      setValue(newValue)
      const date = dayjs(newValue).toDate()
      onChange(date)
    }

    return (
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Stack spacing={3}>
          <MuiDateTimePicker
            {...props}
            className={typography.mb.b2}
            label={label}
            value={value}
            onChange={handleChange}
            slots={(param: any) => (
              <Input
                ref={ref}
                {...param}
                error={error}
                helperText={helperText}
              />
            )}
          />
        </Stack>
      </LocalizationProvider>
    )
  }
)

export default DateTimePicker
