'use client'

import { DoctorCard } from '@/components/doctor'
import {
  PageContent,
  PageHeader,
  PageTitle,
  PageWrapper,
} from '@/components/elastic'
import { useDoctors } from '@/hooks/redux'
import { CircularProgress, Grid } from '@mui/material'

export default function HRPage() {
  const { doctors, isLoading } = useDoctors()

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle type="header" title={'Human resources'} />
      </PageHeader>
      <PageContent>
        {doctors && (
          <Grid container spacing={2}>
            {doctors.map((doctor) => (
              <Grid item xs={12} md={4}>
                <DoctorCard doctor={doctor} />
              </Grid>
            ))}
          </Grid>
        )}
      </PageContent>
    </PageWrapper>
  )
}
