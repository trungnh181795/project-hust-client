import React, { FC } from 'react'
import { Box, Typography, Stack, Grid } from '@mui/material'
import Icon from '@/components/base/Icon'
import { colorPalette, typography } from '@/config'
import Tag from '@/components/base/Tag'
import type { MuiColor } from '@/types'

type ValueWithTag = {
  color: MuiColor
  value: string
}

interface CommonInfoProps {
  icon?: React.FunctionComponent<any>
  label: string
  value: string | number
  hiddenValue?: boolean
  muiIcon?: React.ReactNode
  tagFilled?: boolean
  valuesWithTag?: ValueWithTag[]
}

const CommonInfo: FC<CommonInfoProps> = ({
  icon,
  label,
  value,
  hiddenValue,
  muiIcon,
  valuesWithTag,
  tagFilled = false,
}) => {
  const getValue = (value: string | number) => {
    if (hiddenValue && typeof value === 'string') {
      let newValue = ''
      for (let i = 0; i < value.length; i++) {
        newValue += '*'
      }
      return newValue
    }
    return value
  }

  const getColor = (value: string | number, valuesWithTag: ValueWithTag[]) => {
    const result = valuesWithTag.find((item) => item.value === value)
    if (result) {
      return result.color
    }

    return 'Invalid color'
  }

  return (
    <Stack
      sx={{ width: '100%', overflow: 'hidden' }}
      direction="row"
      alignItems="flex-start"
    >
      {muiIcon
        ? muiIcon
        : icon && (
            <Icon
              type="fill"
              color={colorPalette.primary}
              src={icon}
              width={20}
              height={20}
              sx={{
                height: '100%',
                alignItems: 'flex-start',
                width: '24px',
              }}
            />
          )}
      <Box
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'flex-start',
          borderBottom: `1px solid ${colorPalette.line}`,
          marginLeft: '16px',
          paddingBottom: '12px',
          overflow: 'hidden',
        }}
      >
        <Grid container spacing={2}>
          <Grid item xs={12} md={4}>
            <Typography
              className={typography.mb.b2}
              color={colorPalette.dark}
              component="div"
            >
              {label}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            md={8}
            display="flex"
            justifyContent="flex-end"
            sx={{ overflow: 'hidden' }}
          >
            {!!valuesWithTag ? (
              <Tag
                variant={tagFilled ? 'filled' : 'outlined'}
                label={value}
                color={
                  getColor(
                    value,
                    valuesWithTag as unknown as ValueWithTag[]
                  ) as MuiColor
                }
              />
            ) : (
              <Typography
                className={typography.mb.b2}
                color={colorPalette.dark}
                component="div"
                sx={{ overflow: 'hidden' }}
                textAlign="right"
              >
                {getValue(value)}
              </Typography>
            )}
          </Grid>
        </Grid>
      </Box>
    </Stack>
  )
}

export default CommonInfo
