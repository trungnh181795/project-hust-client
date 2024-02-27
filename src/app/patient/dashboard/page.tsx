'use client'

import { Button } from '@/components/base'
import { PageTitle } from '@/components/elastic'
import {
  PatientConnectDeviceForm,
  PatientStatsChart,
} from '@/components/patients'
import { colorPalette, typography } from '@/config'
import { usePatientDetail, usePatientStats } from '@/hooks/redux'
import { selectUser, useAppSelector } from '@/redux'
import { Role } from '@/types'
import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

export default function PatientDashboardPage() {
  const { user } = useAppSelector(selectUser)
  const { patientDetail } = usePatientDetail(user?.patientId || '')
  const { stats } = usePatientStats(user?.patientId || '')
  const [openDeviceForm, setOpenDeviceForm] = useState<boolean>(false)

  // const { stat, isLoading, notifications } = usePatientLatestStat(user?.patientId || '');

  if (!user) {
    return <CircularProgress />
  }

  return (
    <Stack sx={{ width: '100%' }} direction="column">
      <PatientConnectDeviceForm
        open={openDeviceForm}
        setOpen={setOpenDeviceForm}
      />
      <Box sx={{ width: '100%' }}>
        <PageTitle
          role={Role.PATIENT}
          title="Your stats"
          type="content"
          otherContent={
            <Button
              variant="contained"
              customsize="sm"
              component={Link as any}
              href="/patient/stats"
            >
              Check your status
            </Button>
          }
        />
        {stats && stats.data.length > 0 ? (
          <PatientStatsChart records={stats.data} />
        ) : patientDetail?.device ? (
          <Box>
            <Typography
              className={typography.pc.descReg}
              color={colorPalette.dark}
              component="div"
              textAlign="center"
            >
              No records found. Please wear your device on!
            </Typography>
          </Box>
        ) : (
          <Stack
            sx={{ width: '100%' }}
            direction="column"
            justifyContent="center"
            alignItems="center"
          >
            <Button
              variant="outlined"
              customsize="sm"
              onClick={() => setOpenDeviceForm(true)}
            >
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
          </Stack>
        )}
      </Box>
    </Stack>
  )
}
