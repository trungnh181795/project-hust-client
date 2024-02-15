'use client'

import { Icon } from '@/components/base'
import { PageContent, PageTitle } from '@/components/elastic'
import { PenIcon } from '@/components/icons'
import { PatientInfo } from '@/components/patients'
import { colorPalette } from '@/config'
import { selectPatient, useAppSelector } from '@/redux'
import { Box, CircularProgress, Grid, IconButton, Tooltip } from '@mui/material'
import Link from 'next/link'

export default function PatientStatsPage() {
  const { patientDetail } = useAppSelector(selectPatient)

  if (!patientDetail) {
    return <CircularProgress />
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <PageContent>
            <PageTitle
              type="content"
              title="Profile"
              otherContent={
                <Tooltip title="Edit">
                  <Link href={`/doctor/patient/${patientDetail.id}/edit`}>
                    <IconButton sx={{ background: 'transparent' }}>
                      <Icon
                        src={PenIcon}
                        type="fill"
                        color={colorPalette.dark}
                      />
                    </IconButton>
                  </Link>
                </Tooltip>
              }
            />
            <PatientInfo patient={patientDetail} />
          </PageContent>
        </Grid>
        <Grid item xs={12} md={6}></Grid>
      </Grid>
    </Box>
  )
}
