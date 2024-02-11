import { PrivatePageWrapper } from '@/components/common'
import Content from '@/layout/patients/Content'
import Header from '@/layout/patients/Header'
import MobileNavBar from '@/layout/patients/MobileNavBar'
import { Box } from '@mui/material'

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PrivatePageWrapper>
      <Box>
        <Header />
        <Content>{children}</Content>
        <MobileNavBar />
      </Box>
    </PrivatePageWrapper>
  )
}
