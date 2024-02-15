'use client'

import { PageContent, PageTitle } from '@/components/elastic'
import {
  PatientAttributes,
  PatientStats,
  PatientStatsChart,
} from '@/components/patients'
import { selectPatient, useAppSelector } from '@/redux'
import { PatientStatEnum } from '@/types'
import { Box, CircularProgress, Grid } from '@mui/material'
import { useMemo } from 'react'

export default function PatientStatsPage() {
  const { patientDetail } = useAppSelector(selectPatient)
  console.log('paitent', patientDetail)

  if (!patientDetail) {
    return <CircularProgress />
  }

  const stats = useMemo(
    () =>
      patientDetail.deviceRecords && patientDetail.deviceRecords.length > 0
        ? [...patientDetail.deviceRecords].sort((a, b) => {
            if (b.updatedAt < a.updatedAt) {
              return -1
            }
            if (b.updatedAt > a.updatedAt) {
              return 1
            }
            return 0
          })[0]
        : null,
    [patientDetail]
  )
  console.log('stats', stats)

  return (
    <Box sx={{ width: '100%' }}>
      <PageContent>
        <PageTitle type="content" title="Medical Card" />
        <Grid container spacing={2}>
          <Grid item xs={12} md={2}>
            <PatientAttributes bmi={20.4} height={167} weight={110} />
          </Grid>
          <Grid item xs={12} md={2}>
            {stats && <PatientStats stats={stats} />}
          </Grid>
          <Grid item xs={12} md={8}>
              {stats && (
                <PatientStatsChart records={patientDetail.deviceRecords} />
              )}
          </Grid>
        </Grid>
      </PageContent>
    </Box>
  )
}
