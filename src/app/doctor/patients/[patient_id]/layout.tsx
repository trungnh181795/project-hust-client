'use client'
/* Libs */
import { ReactNode, useState } from 'react'
import Room from '@/components/common/Room'
import { PageHeader, PageTitle, PageWrapper } from '@/components/elastic'
import { HeaderTab, NavIconButton, PrivatePageWrapper } from '@/components/common'
import { CircularProgress, Stack, Box } from '@mui/material'
import { useRouter } from 'next/navigation'
import { usePatientDetail } from '@/hooks/redux'

type LinkType = {
  label: string
  href: string
}

type PatientLayoutProps = {
  children: ReactNode
  params: { patient_id: string }
}

const links: LinkType[] = [
  {
    label: 'Information',
    href: 'information',
  },
  {
    label: 'Stats',
    href: 'stats',
  },
  {
    label: 'Records',
    href: 'record',
  },
  {
    label: 'Presciption',
    href: 'presciption',
  },
]

export default function PatientLayout({
  children,
  params,
}: PatientLayoutProps) {
  const router = useRouter()
  const { isLoading } = usePatientDetail(params?.patient_id)

  const [visisbleCallVideo, setVisisbleCallVideo] = useState<boolean>(false)

  const handleOpenCallVideo = () => {
    setVisisbleCallVideo(true)
  }

  const handleCloseCallVideo = () => {
    setVisisbleCallVideo(false)
  }

  const handleOnBack = () => {
    router.push('/doctor/patients')
  }

  if (isLoading) {
    return <CircularProgress />
  }

  return (
    <PrivatePageWrapper>
      <Room open={visisbleCallVideo} handleClose={handleCloseCallVideo} />
      <PageWrapper>
        <PageHeader>
          <Stack direction="row" alignItems="center">
            <NavIconButton
              dir="left"
              variant="text"
              size="sm"
              onClick={handleOnBack}
              style={{ marginRight: '16px' }}
            />
            <PageTitle type="header" title="Patient Detail" />
          </Stack>
        </PageHeader>
        <HeaderTab linkPrefix="patients" links={links} />
        <Box sx={{ marginTop: '16px' }}>
          {children}
        </Box>
      </PageWrapper>
    </PrivatePageWrapper>
  )
}
