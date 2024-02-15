'use client'

import { Message, PrivatePageWrapper } from '@/components/common'
import Content from '@/layout/doctor/Content'
import Header from '@/layout/doctor/Header'
import Sidebar from '@/layout/doctor/Sidebar'
import { Box } from '@mui/material'
import { useState } from 'react'

export default function DoctorLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isOpen, setIsOpen] = useState(true)

  const handleDrawerOpen = () => {
    setIsOpen(true)
  }
  const handleDrawerClose = () => {
    setIsOpen(false)
  }

  return (
    // <PrivatePageWrapper>
      <Box sx={{ display: 'flex' }}>
        {/* {!isAuthenticated && <Navigate to="/login" replace={true} />} */}
        <Header open={isOpen} />
        <Sidebar open={isOpen} />
        <Content
          open={isOpen}
          onOpen={handleDrawerOpen}
          onClose={handleDrawerClose}
        >
          {/* {uploading && <LinearLoading />} */}
          {children}
          <Message />
        </Content>
      </Box>
    // </PrivatePageWrapper>
  )
}
