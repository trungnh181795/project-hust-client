import { PatientStats, PatientStatEnum } from '@/types'
import { Box, Paper } from '@mui/material'
import { FC } from 'react'
import { PatientStatBlock } from '@/components/patients'
import { colorPalette } from '@/config'

type PatientStatsProps = {
  stats: PatientStats
}

const PatientStat: FC<PatientStatsProps> = ({ stats }) => {
  return (
    <Paper
      sx={{
        borderRadius: '16px',
        bgcolor: colorPalette.purple.shade_50,
        padding: '16px',
        width: '140px',
      }}
    >
      <Box sx={{ width: '100%', marginBottom: '24px' }}>
        <PatientStatBlock
          statType={PatientStatEnum.HEART_BPM}
          statValue={stats[PatientStatEnum.HEART_BPM]}
        />
      </Box>
      <Box sx={{ width: '100%', marginBottom: '24px' }}>
        <PatientStatBlock
          statType={PatientStatEnum.OXYGEN_PERCENT}
          statValue={stats[PatientStatEnum.OXYGEN_PERCENT]}
        />
      </Box>
      <Box sx={{ width: '100%', marginBottom: '24px' }}>
        <PatientStatBlock
          statType={PatientStatEnum.TEMPERATURE}
          statValue={stats[PatientStatEnum.TEMPERATURE]}
        />
      </Box>
    </Paper>
  )
}

export default PatientStat
