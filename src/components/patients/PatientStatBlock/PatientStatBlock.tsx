import { Icon } from '@/components/base'
import { HeartBPMIcon, OxygenIcon, TemperatureIcon } from '@/components/icons'
import { colorPalette, typography } from '@/config'
import { PatientStatEnum } from '@/types'
import { Stack, Typography } from '@mui/material'
import { FC } from 'react'

type PatientStatBlockProps = {
  statType: PatientStatEnum
  statValue: number
}

const stats = {
  [PatientStatEnum.HEART_BPM]: {
    icon: HeartBPMIcon,
    unit: 'bpm',
    label: 'Heart beat',
  },
  [PatientStatEnum.OXYGEN_PERCENT]: {
    icon: OxygenIcon,
    unit: '%',
    label: 'Oxygen saturation',
  },
  [PatientStatEnum.TEMPERATURE]: {
    icon: TemperatureIcon,
    unit: 'C',
    label: 'Temperature',
  },
}

const PatientStatBlock: FC<PatientStatBlockProps> = ({
  statType,
  statValue,
}) => {
  return (
    <Stack direction="row" sx={{ width: '100%' }}>
      <Icon
        src={stats[statType].icon}
        type="fill"
        colorDisabled
        color={colorPalette.primary}
      />
      <Stack direction="column" sx={{ marginLeft: '8px' }}>
        <Typography
          className={typography.mb.h5}
          color={colorPalette.primary}
          fontWeight={600}
          component="div"
          textAlign="left"
        >
          {statValue} {stats[statType].unit}
        </Typography>
        <Typography
          className={typography.mb.helpSemi}
          color={colorPalette.primary}
          fontWeight={600}
          component="div"
          textAlign="left"
        >
          {stats[statType].label}
        </Typography>
      </Stack>
    </Stack>
  )
}

export default PatientStatBlock
