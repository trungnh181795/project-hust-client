'use client'

import {
  PageContent,
  PageHeader,
  PageTitle,
  PageWrapper,
} from '@/components/elastic'
import { PatientsTable } from '@/components/patients'
import { usePatients } from '@/hooks/redux'
import { CircularProgress } from '@mui/material'

export default function PatientsPage() {
  const { patients, isLoading } = usePatients()

  console.log('data', patients)

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <PageWrapper>
      <PageHeader>
        <PageTitle type="header" title={'Patients'} />
      </PageHeader>
      <PageContent>
        {patients ? <PatientsTable patients={patients} /> : null}
      </PageContent>
    </PageWrapper>
  )
}
