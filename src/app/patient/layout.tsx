'use client'

import { Message, PrivatePageWrapper } from '@/components/common'
import Content from '@/layout/patient/Content'
import Header from '@/layout/patient/Header'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function PatientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <PrivatePageWrapper>
      {/* {!isAuthenticated && <Navigate to="/login" replace={true} />} */}
      <Header />
      <Content>
        {/* {uploading && <LinearLoading />} */}
        {children}
        <Message />
        <ToastContainer />
      </Content>
    </PrivatePageWrapper>
  )
}
