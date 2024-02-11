'use client'
/* Libs */
import Link from 'next/link'
import { ReactNode, useEffect, useState } from 'react'
import { Grid } from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace'
import Room from '@/components/common/Room'
import { FlexBox, StyledButton } from '@/components/elastic'
import { StyledNavLink } from '@/components/base'

export default function PatientLayout({ children }: { children: ReactNode }) {
  const [visisbleCallVideo, setVisisbleCallVideo] = useState<boolean>(false)

  const handleOpenCallVideo = () => {
    setVisisbleCallVideo(true)
  }

  const handleCloseCallVideo = () => {
    setVisisbleCallVideo(false)
  }

  const userOptions = [
    {
      name: 'Information',
      link: 'information',
      //   icon: (isActive: boolean) => <InformationIcon isActive={isActive} />,
    },
    {
      name: 'Stats',
      link: 'stats',
      //   icon: (isActive: boolean) => <StatsIcon isActive={isActive} />,
    },
    {
      name: 'Appointments',
      link: 'appointments',
      //   icon: (isActive: boolean) => <AppointmentsIcon isActive={isActive} />,
    },
  ]

  // const styledButtonAttrs: ButtonProps & { component: React.ElementType } = {

  // }

  return (
    <>
      <Room open={visisbleCallVideo} handleClose={handleCloseCallVideo} />
      <Grid container spacing={2}>
        <Grid item xs={false} md={12}>
          <StyledButton
            borderRadius="8px"
            width="auto"
            height="30px"
            startIcon={<KeyboardBackspaceIcon />}
            variant="contained"
            component={Link}
            href={'/patients'}
          >
            Back to patients table
          </StyledButton>
        </Grid>
        <Grid item xs={false} md={12}>
          <FlexBox column={false} justify="space-between" align="center">
            <FlexBox column={false} justify="flex-start" align="center">
              {userOptions.map((option) => {
                const isActive = location.pathname.includes(option.link)
                  ? true
                  : false
                return (
                  <StyledButton
                    key={option.name}
                    width="150px"
                    height="46px"
                    borderRadius="8px"
                    component={StyledNavLink}
                    variant="text"
                    // startIcon={option.icon(isActive)}
                    href={option.link}
                    defaultActiveStyle={true}
                  >
                    {option.name}
                  </StyledButton>
                )
              })}
            </FlexBox>
            <StyledButton
              width="100px"
              height="46px"
              borderRadius="8px"
              variant="contained"
              startIcon={<PhoneIcon />}
              onClick={() => handleOpenCallVideo()}
            >
              Call
            </StyledButton>
          </FlexBox>
        </Grid>
        <Grid item xs={false} md={12}>
          <Grid container spacing={2}>
            {children}
          </Grid>
        </Grid>
      </Grid>
    </>
  )
}
