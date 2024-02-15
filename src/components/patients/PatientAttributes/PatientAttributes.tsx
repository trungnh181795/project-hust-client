import { Box, Grid, Stack } from '@mui/material'
import BodyImage from '@/../public/images/body.png'
import { FC } from 'react'
import { WrapImage } from '@/components/base'
import { PatientAttributeBlock } from '@/components/patients'

type PatientAttributesProps = {
  height: number
  weight: number
  bmi: number
}

const cmToInch = (heightInCm: number): string => {
  const inches = heightInCm / 2.54
  const feet = Math.floor(inches / 12)
  const remainingInches = Math.round(inches % 12)
  return `${feet}'${remainingInches}"`
}

const PatientAttributes: FC<PatientAttributesProps> = ({
  height,
  weight,
  bmi,
}) => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <WrapImage
            src={BodyImage}
            alt="body"
            sx={{ width: '100%', minHeight: '230px' }}
          />
        </Grid>
        <Grid item xs={6}>
          <Stack direction="column" justifyContent="center" sx={{ height: '100%' }}>
            <PatientAttributeBlock unit="in" value={height} label="Height" />
            <PatientAttributeBlock unit="lbs" value={weight} label="Weight" />
            <PatientAttributeBlock unit="BMI" value={bmi} label="Average" />
          </Stack>
        </Grid>
      </Grid>
    </Box>
  )
}

export default PatientAttributes
