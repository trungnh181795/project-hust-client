/* Libs */
import { FC, ReactNode } from 'react'
import { Container } from '@mui/material'
/* Styles */
import { MainBox } from './styles'

const Content: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <MainBox component="main" sx={{ flexGrow: 1 }}>
      <Container maxWidth="lg">{children}</Container>
    </MainBox>
  )
}

export default Content
