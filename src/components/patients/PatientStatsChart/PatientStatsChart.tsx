import { FC } from 'react'
import { BarChart } from '@mui/x-charts/BarChart'
import { DeviceRecordData, PatientStatEnum } from '@/types'

type PatientStatsChartProps = {
  records: DeviceRecordData[]
}

const valueFormatter = (value: number, unit: string) => `${value}${unit}`

const PatientStatsChart: FC<PatientStatsChartProps> = ({ records }) => {
  return (
    <BarChart
      sx={{ width: '100%', height: '230px' }}
      dataset={records}
      xAxis={[{ scaleType: 'band', dataKey: 'updatedAt' }]}
      series={[
        {
          dataKey: PatientStatEnum.HEART_BPM,
          label: 'Heart beat',
          valueFormatter: (value) => valueFormatter(value, 'bpm'),
        },
        {
          dataKey: PatientStatEnum.OXYGEN_PERCENT,
          label: 'Oxygen saturation',
          valueFormatter: (value) => valueFormatter(value, '%'),
        },
        {
          dataKey: PatientStatEnum.TEMPERATURE,
          label: 'Temperature',
          valueFormatter: (value) => valueFormatter(value, 'C'),
        },
      ]}
    />
  )
}

export default PatientStatsChart
