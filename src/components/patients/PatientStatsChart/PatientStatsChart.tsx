import { FC } from 'react'
import { LineChart } from '@mui/x-charts/LineChart'
import { DeviceRecordData, PatientStatEnum } from '@/types'

type PatientStatsChartProps = {
  records: DeviceRecordData[]
}

const valueFormatter = (value: number, unit: string) => `${value}${unit}`

const PatientStatsChart: FC<PatientStatsChartProps> = ({ records }) => {
  const data = records.map((record) => ({
    ...record,
    updatedAt: new Date(record.updatedAt).toLocaleString('vn'),
  }))

  return (
    <LineChart
      height={250}
      sx={{ width: '100%', height: '250px' }}
      dataset={data}
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
