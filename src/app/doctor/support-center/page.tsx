'use client'

import { Avatar, Button, Icon } from '@/components/base'
import { StyledTextField } from '@/components/base/DateTimePicker/styles'
import {
  MessageLeft,
  MessageRight,
} from '@/components/common/Message/MessageBox'
import {
  Item,
  PageContent,
  PageHeader,
  PageTitle,
  PageWrapper,
} from '@/components/elastic'
import { EmailIcon, MessengerIcon, SearchIcon } from '@/components/icons'
import SendIcon from '@/components/icons/Send'
import { colorPalette, typography } from '@/config'
import { Box, Grid, InputAdornment, Stack, Typography } from '@mui/material'

export default function SupportCenterPage() {
  return (
    <PageWrapper>
      <PageHeader sx={{ flexDirection: 'column' }}>
        <Grid
          container
          sx={{
            backgroundColor: 'transparent',
          }}
        >
          <Grid xs={4} sx={{ backgroundColor: 'transparent' }}>
            <Item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                boxShadow: '0',
                backgroundColor: 'transparent',
              }}
            >
              <PageTitle type="header" title={'Support Center'} />
            </Item>
          </Grid>
          <Grid xs={8} sx={{ backgroundColor: 'transparent' }}>
            <Item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                boxShadow: '0',
                justifyContent: 'flex-end',
                backgroundColor: 'transparent',
              }}
            >
              <Button
                sx={{
                  marginRight: '8px',
                  borderRadius: '99px',
                  paddingX: '30px',
                  backgroundColor: `${colorPalette.white}`,
                  color: `${colorPalette.primary}`,
                  '&:hover': {
                    backgroundColor: `${colorPalette.white}`,
                  },
                }}
                customsize="sm"
              >
                New Annoucement
              </Button>
              <Button
                sx={{
                  borderRadius: '99px',
                  paddingX: '30px',
                  backgroundColor: `${colorPalette.primary}`,
                  color: `${colorPalette.white}`,
                  '&:hover': {
                    backgroundColor: `${colorPalette.primary}`,
                  },
                }}
                customsize="sm"
              >
                New Chat
              </Button>
            </Item>
          </Grid>
        </Grid>
        <Stack
          sx={{
            marginBottom: '16px',
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            padding: '16px',
            backgroundColor: `${colorPalette.white}`,
            borderRadius: '10px',
          }}
        >
          <Button
            sx={{
              marginRight: '8px',
              borderRadius: '10px',
              paddingX: '30px',
              backgroundColor: `${colorPalette.primary}`,
              color: `${colorPalette.white}`,
              '&:hover': {
                backgroundColor: `${colorPalette.primary}`,
              },
            }}
            customsize="sm"
          >
            Support Center
          </Button>
          <Button
            sx={{
              borderRadius: '10px',
              paddingX: '30px',
              backgroundColor: `${colorPalette.white}`,
              color: `${colorPalette.primary}`,
              '&:hover': {
                backgroundColor: `${colorPalette.white}`,
              },
            }}
            customsize="sm"
          >
            Annoucement
          </Button>
        </Stack>
      </PageHeader>
      <PageContent
        sx={{
          backgroundColor: 'transparent',
        }}
      >
        {/*Ticket Box */}
        <Grid
          container
          sx={{
            backgroundColor: 'transparent',
            columnGap: '16px',
          }}
        >
          <Grid
            xs={4}
            sx={{
              backgroundColor: `${colorPalette.white}`,
              borderRadius: '16px',

              overflow: 'scroll',
            }}
          >
            <Item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                boxShadow: '0',
                backgroundColor: 'transparent',
                padding: '16px',
              }}
            >
              <StyledTextField
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                }}
                sx={{ width: '100%' }}
              />
              <Grid
                container
                sx={{
                  alignItems: 'center',
                  borderRadius: '8px',
                  boxShadow: '0',
                  border: '1px solid #F4F4F4',
                  padding: '8px',
                  marginTop: '16px',
                }}
              >
                <Grid xs="auto">
                  <Box
                    sx={{
                      backgroundColor: `${colorPalette.primary}`,
                      padding: '8px',
                      height: '40px',
                      borderRadius: '8px',
                      marginRight: '8px',
                    }}
                  >
                    <EmailIcon />
                  </Box>
                </Grid>
                <Grid xs={true}>
                  <Item sx={{ boxShadow: '0' }}>
                    <Typography
                      className={typography.pc.s4}
                      color={colorPalette.dark}
                      component="div"
                      textAlign="left"
                    >
                      Ticket ID
                    </Typography>
                    <Stack
                      sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        alignItems: 'center',
                      }}
                    >
                      <Typography
                        className={typography.pc.s3}
                        color={colorPalette.dark}
                        component="div"
                        textAlign="left"
                      >
                        Savannah Nguyen
                      </Typography>
                      <Typography
                        className={typography.pc.helpSemi}
                        color={colorPalette.dark}
                        component="div"
                        textAlign="left"
                        sx={{
                          marginLeft: '8px',
                          border: '1px solid #B7D9F4',
                          padding: '3px 12px',
                          borderRadius: '21px',
                        }}
                      >
                        Doctor
                      </Typography>
                    </Stack>
                  </Item>
                </Grid>
                <Grid xs={2}>
                  <Item
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      alignItems: 'flex-end',
                      boxShadow: '0',
                    }}
                  >
                    <Typography
                      className={typography.pc.helpSemi}
                      color={colorPalette.dark}
                      component="div"
                      textAlign="right"
                    >
                      Time
                    </Typography>
                    <Typography
                      className={typography.pc.helpSemi}
                      color={colorPalette.dark}
                      component="div"
                      textAlign="right"
                      sx={{
                        backgroundColor: `${colorPalette.primary}`,
                        color: `${colorPalette.white}`,
                        padding: '1px 12px',
                        borderRadius: '21px',
                        width: 'fit-content',
                      }}
                    >
                      1
                    </Typography>
                  </Item>
                </Grid>
              </Grid>
            </Item>
          </Grid>
          {/*Ticket Box */}
          <Grid
            xs={true}
            sx={{
              backgroundColor: `${colorPalette.white}`,
              borderRadius: '16px',
            }}
          >
            <Item
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'flex-start',
                boxShadow: '0',
                backgroundColor: 'transparent',
                padding: '16px',
              }}
            >
              <Stack sx={{ display: 'flex', flexDirection: 'row' }}>
                {/*User avatar chat need database */}
                <Avatar
                  alt="avatar"
                  src="/images/doctor-ava.png"
                  width="40px"
                  height="40px"
                />
                <Typography
                  className={typography.pc.h6}
                  color={colorPalette.dark}
                  component="div"
                  textAlign="left"
                  marginLeft="16px"
                >
                  Steven Nguyen
                </Typography>
              </Stack>
              {/*Chat Box */}
              <Stack
                sx={{
                  height: '600px',
                  overflow: 'scroll',
                  marginTop: '16px',
                  display: 'flex',
                  width: '100%',
                }}
              >
                <MessageLeft />
                <MessageLeft />
                <MessageLeft />
                <MessageRight />
                <MessageRight />
              </Stack>
              {/*Chat Input Field*/}
              <Stack
                sx={{ display: 'flex', flexDirection: 'row', width: '100%' }}
              >
                <Button customsize="sm" sx={{ padding: '8px 16px' }}>
                  <Icon
                    type="fill"
                    src={MessengerIcon}
                    color={colorPalette.lightGrey}
                  />
                </Button>
                <StyledTextField
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <SendIcon />
                      </InputAdornment>
                    ),
                  }}
                  sx={{ width: '100%' }}
                />
              </Stack>
            </Item>
          </Grid>
        </Grid>
      </PageContent>
    </PageWrapper>
  )
}
