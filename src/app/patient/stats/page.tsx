'use client'

import { Button } from '@/components/base'
import { PageTitle } from '@/components/elastic'
import {
  PatientAttributes,
  PatientStats,
  PatientStatsChart,
} from '@/components/patients'
import { colorPalette, typography } from '@/config'
import { usePatientLatestStat, usePatientStats } from '@/hooks/redux'
import { selectUser, useAppSelector } from '@/redux'
import { DeviceRecordData, Role } from '@/types'
import { Box, CircularProgress, Grid, Stack, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { toast } from 'react-toastify'

export default function PatientStatsPage() {
  const curStat = useRef<DeviceRecordData>()
  const { user } = useAppSelector(selectUser)
  const { stats } = usePatientStats(user?.patientId || '')
  const { stat, isLoading, notifications } = usePatientLatestStat(
    user?.patientId || ''
  )
  console.log('stasts', stats)

  const [openDeviceForm, setOpenDeviceForm] = useState<boolean>(false)

  useEffect(() => {
    if (stat && notifications) {
      if (stat.id !== curStat?.current?.id) {
        notifications.forEach((noti) => {
          if (noti.type === 'warning') {
            toast(`Cảnh báo: ${noti.message}`, { type: 'warning' })
          }
        })
        curStat.current = stat
      }
    }
  }, [stat, notifications])

  if (!user || isLoading) {
    return <CircularProgress />
  }

  return (
    <Stack sx={{ width: '100%' }} direction="column">
      <Box sx={{ width: '100%' }}>
        <PageTitle role={Role.PATIENT} title="Your stats" type="content" />
        {stat && stats ? (
          <Grid container spacing={2}>
            <Grid item xs={12} md={2}>
              <PatientAttributes bmi={20.4} height={167} weight={110} />
            </Grid>
            <Grid item xs={12} md={2}>
              {stat && <PatientStats stats={stat} />}
            </Grid>
            <Grid item xs={12} md={8}>
              {stats && <PatientStatsChart records={stats.data} />}
            </Grid>
          </Grid>
        ) : (
          <Box>
            <Button variant="outlined" customsize="sm">
              Connect to device
            </Button>
            <Typography
              className={typography.pc.descReg}
              color={colorPalette.dark}
              component="div"
              textAlign="center"
            >
              No records found. Please connect your device!
            </Typography>
          </Box>
        )}
      </Box>
    </Stack>
  )
}
