'use client'

import { AuthWrapper, Logo, Wrapper } from '@/components/common'
import { AuthContainer, FormContainer } from '@/components/elastic'
import { selectAuth, useAppSelector } from '@/redux'
import { AuthFormType } from '@/types'
import { Box, Container, Stack, Typography } from '@mui/material'
import DoctorImage from '@/../public/images/doctors.png'
import PaintingImage from '@/../public/images/painting.png'
import { colorPalette, typography } from '@/config'
import Image from 'next/image'

const authFormMap = {
  [AuthFormType.SIGN_IN]: {
    title: 'Welcome back',
    image: DoctorImage,
  },
  [AuthFormType.SIGN_UP]: {
    title: 'Create account',
    image: PaintingImage,
  },
}

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const { authForm } = useAppSelector(selectAuth)
  const { title, image } = authFormMap[authForm]

  return (
    <AuthWrapper>
      <Wrapper>
        <Stack
          sx={{
            height: '250px',
            width: '100%',
            bgcolor: colorPalette.primary,
          }}
        >
          <Container
            maxWidth="md"
            sx={{ position: 'relative', height: '100%' }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: '40px',
              }}
            >
              <Logo variant="secondary" size={1.2}></Logo>
            </Box>
            <Typography
              sx={{ position: 'absolute', bottom: '47px' }}
              className={typography.pc.h5}
              color={colorPalette.white}
              component="div"
              textAlign="right"
            >
              {title}
            </Typography>
            <Box sx={{ position: 'absolute', top: 0, right: 0 }}>
              <Image src={image} alt={title} height={250} quality={100} />
            </Box>
          </Container>
        </Stack>
        <AuthContainer>
          <FormContainer>{children}</FormContainer>
        </AuthContainer>
      </Wrapper>
    </AuthWrapper>
  )
}
