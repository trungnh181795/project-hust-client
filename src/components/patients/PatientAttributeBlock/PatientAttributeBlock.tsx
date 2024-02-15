import { colorPalette, typography } from '@/config'
import { Stack, Typography } from '@mui/material'
import { FC } from 'react'

type PatientAttributeBlockProps = {
  unit: string
  value: string | number
  label: string
}

const PatientAttributeBlock: FC<PatientAttributeBlockProps> = ({
  unit,
  value,
  label,
}) => {
  return (
    <Stack direction="column" sx={{ '&:not(:last-child)': {
        marginBottom: '16px'
    }}}>
      <Typography
        sx={{}}
        className={typography.mb.descSemi}
        color={'#999999'}
        fontWeight={500}
        component="div"
        textAlign="left"
      >
        {unit}
      </Typography>
      <Typography
        sx={{}}
        className={typography.mb.h5}
        color={colorPalette.orange.shade_400}
        fontWeight={600}
        component="div"
        textAlign="left"
      >
        {value}
      </Typography>
      <Typography
        sx={{}}
        className={typography.mb.helpSemi}
        color={colorPalette.dark}
        fontWeight={600}
        component="div"
        textAlign="left"
      >
        {label}
      </Typography>
    </Stack>
  )
}

export default PatientAttributeBlock
