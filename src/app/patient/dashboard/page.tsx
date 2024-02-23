'use client'

import { Button } from '@/components/base'
import { PageTitle } from '@/components/elastic'
import { PatientStatsChart } from '@/components/patients'
import { colorPalette, typography } from '@/config'
import { usePatientStats } from '@/hooks/redux'
import { usePatientLatestStat } from '@/hooks/redux/use-patients'
import { selectUser, useAppSelector } from '@/redux'
import { Role } from '@/types'
import { Box, CircularProgress, Stack, Typography } from '@mui/material'
import Link from 'next/link'
import { useState } from 'react'

export default function PatientDashboardPage() {
  const { user } = useAppSelector(selectUser)
  const { stats } = usePatientStats(user?.patientId || '')
  // const { stat, isLoading, notifications } = usePatientLatestStat(user?.patientId || '');

  if (!user) {
    return <CircularProgress />
  }

  return (
    <Stack sx={{ width: '100%' }} direction="column">
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
