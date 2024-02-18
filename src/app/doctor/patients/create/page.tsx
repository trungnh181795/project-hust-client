'use client'

import {
  Item,
  PageContent,
  PageHeader,
  PageTitle,
  PageWrapper,
} from '@/components/elastic'
import { PatientsTable } from '@/components/patients'
import { usePatients } from '@/hooks/redux'
import {
  Box,
  Chip,
  CircularProgress,
  Grid,
  MenuItem,
  SelectChangeEvent,
  Stack,
  Typography,
} from '@mui/material'
import { NavIconButton } from '@/components/common'
import { useRouter } from 'next/navigation'
import { colorPalette, typography } from '@/config'
import { StyledTextField } from '@/components/base/DateTimePicker/styles'
import { DatePicker, LocalizationProvider } from '@mui/x-date-pickers'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { Avatar, Button, Select, WrapImage } from '@/components/base'
import { useState } from 'react'

const gender = [
  {
    value: 'Male',
    label: 'Male',
  },
  {
    value: 'Female',
    label: 'Female',
  },
]

const blood = [
  {
    value: 'A',
    label: 'A',
  },
  {
    value: 'B',
    label: 'B',
  },
]

const allergies = ['Celery', 'Egg', 'Fish', 'Garlic', 'Oats', 'Milk']

const anamnesisDump = ['Celery', 'Egg', 'Fish', 'Garlic', 'Oats', 'Milk']

export default function PatientsPage() {
  const { patients, isLoading } = usePatients()
  const [allergy, setAllergy] = useState<string[]>([])
  const [anamnesis, setAnamnesis] = useState<string[]>([])

  const allergiesHandleChange = (event: SelectChangeEvent<typeof allergy>) => {
    const {
      target: { value },
    } = event
    setAllergy(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }
  const anamnesisHandleChange = (event: SelectChangeEvent<typeof allergy>) => {
    const {
      target: { value },
    } = event
    setAnamnesis(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value
    )
  }
  const router = useRouter()

  console.log('data', patients)

  if (isLoading) {
    return <CircularProgress />
  }

  const handleOnBack = () => {
    router.push('/doctor/patients')
  }

  return (
    <PageWrapper>
      <PageHeader>
        <Grid container sx={{ backgroundColor: 'transparent' }}>
          <Grid xs={8} sx={{ backgroundColor: 'transparent' }}>
            <Item
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                boxShadow: '0',
                backgroundColor: 'transparent',
              }}
            >
              <NavIconButton
                dir="left"
                variant="text"
                size="sm"
                onClick={handleOnBack}
                style={{ marginRight: '16px' }}
              />

              <PageTitle type="header" title={'Add Patient'} />
            </Item>
          </Grid>
          <Grid xs={4} sx={{ backgroundColor: 'transparent' }}>
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
                Save
              </Button>
            </Item>
          </Grid>
        </Grid>
      </PageHeader>
      <PageContent
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, 1fr)',
          columnGap: 2,
        }}
      >
        {patients ? <PatientsTable patients={patients} /> : null}

        <Item
          sx={{
            boxShadow: '0',
          }}
        >
          <Typography
            className={typography.pc.h6}
            color={colorPalette.dark}
            component="div"
            textAlign="left"
            sx={{ marginBottom: '16px' }}
          >
            General Info
          </Typography>
          <Stack
            sx={{
              marginBottom: '16px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <Box
              sx={{
                width: 'fit-content',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
              }}
            >
              <Avatar
                alt="avatar"
                src="/images/doctor-ava.png"
                width="124px"
                height="124px"
              />
              <Button
                sx={{
                  height: '40px',
                  minWidth: '40px',
                  padding: '0px',
                  borderRadius: '50%',
                  backgroundColor: `${colorPalette.white}`,
                  position: 'absolute',
                  bottom: '0px',
                  right: '0px',
                  '&:hover': {
                    backgroundColor: `${colorPalette.white}`,
                  },
                }}
                customsize="sm"
              >
                <WrapImage
                  sx={{
                    height: '20px',
                    width: '20px',
                  }}
                  alt="bin"
                  src="/icons/bin.svg"
                ></WrapImage>
              </Button>
            </Box>
          </Stack>

          {/* Name Field */}
          <Stack
            sx={{ marginBottom: '16px' }}
            direction="column"
            alignItems="right"
          >
            <StyledTextField
              className={typography.pc.helpReg}
              label="Patient name"
              variant="outlined"
              fullWidth
            />
          </Stack>
          <Stack sx={{ marginBottom: '16px' }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                columnGap: '16px',
              }}
            >
              {/* Gender Field */}
              <Item sx={{ boxShadow: '0' }}>
                <StyledTextField
                  id="outlined-basic"
                  select
                  label="Gender"
                  variant="outlined"
                  defaultValue="Male"
                  fullWidth
                >
                  {gender.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                      {option.label}
                    </MenuItem>
                  ))}
                </StyledTextField>
              </Item>
              {/* Phone number Field */}
              <Item sx={{ boxShadow: '0' }}>
                <StyledTextField
                  id="outlined-basic"
                  label="Phone number"
                  variant="outlined"
                  fullWidth
                />
              </Item>
            </Box>
          </Stack>
          {/* Email Field */}
          <Stack
            sx={{ marginBottom: '16px' }}
            direction="column"
            alignItems="right"
          >
            <StyledTextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              fullWidth
            />
          </Stack>
          {/* Address Field */}
          <Stack
            sx={{ marginBottom: '16px' }}
            direction="column"
            alignItems="right"
          >
            <StyledTextField
              id="outlined-basic"
              label="Address"
              variant="outlined"
              fullWidth
            />
          </Stack>
          <Stack sx={{ marginBottom: '16px' }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                columnGap: '16px',
              }}
            >
              {/* Health Insurance Field */}
              <Item sx={{ boxShadow: '0' }}>
                <StyledTextField
                  id="outlined-basic"
                  label="Health Insurance Number"
                  variant="outlined"
                  fullWidth
                />
              </Item>
              {/* Expired Field */}
              <Item sx={{ boxShadow: '0' }}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Expired Date"
                    sx={{
                      color: `${colorPalette.dark}`,
                      '& .MuiInputBase-input': {
                        color: `${colorPalette.dark}`,
                      },
                      '& .MuiOutlinedInput-notchedOutline': {
                        borderRadius: '12px',
                        borderColor: `${colorPalette.stroke}`,
                      },
                    }}
                    slotProps={{
                      textField: {
                        variant: 'outlined',
                      },
                    }}
                  />
                </LocalizationProvider>
              </Item>
            </Box>
          </Stack>
          <Typography
            className={typography.pc.h6}
            color={colorPalette.dark}
            component="div"
            textAlign="left"
            sx={{ marginBottom: '16px' }}
          >
            Protector Info
          </Typography>
          <Stack sx={{ marginBottom: '16px' }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                columnGap: '16px',
              }}
            >
              {/* Protector Field */}
              <Item sx={{ boxShadow: '0' }}>
                <StyledTextField
                  id="outlined-basic"
                  label="Protector"
                  variant="outlined"
                  fullWidth
                />
              </Item>
              {/* Relationship Field */}
              <Item sx={{ boxShadow: '0' }}>
                <StyledTextField
                  id="outlined-basic"
                  label="Relationship"
                  variant="outlined"
                  fullWidth
                />
              </Item>
            </Box>
          </Stack>
          <Stack sx={{ marginBottom: '16px' }}>
            <Box
              sx={{
                display: 'grid',
                gridTemplateColumns: 'repeat(2, 1fr)',
                columnGap: '16px',
              }}
            >
              {/* Phone number Field */}
              <Item sx={{ boxShadow: '0' }}>
                <StyledTextField
                  id="outlined-basic"
                  label="Phone number"
                  variant="outlined"
                  fullWidth
                />
              </Item>
              {/* Email Field */}
              <Item sx={{ boxShadow: '0' }}>
                <StyledTextField
                  id="outlined-basic"
                  label="Email"
                  variant="outlined"
                  fullWidth
                />
              </Item>
            </Box>
          </Stack>
        </Item>
        <Item sx={{ boxShadow: '0' }}>
          <Typography
            className={typography.pc.h6}
            color={colorPalette.dark}
            component="div"
            textAlign="left"
            sx={{ marginBottom: '16px' }}
          >
            Health Information
          </Typography>
          <Stack sx={{ marginBottom: '16px' }}>
            {/* Blood Group Field need API*/}
            <StyledTextField
              id="outlined-basic"
              select
              label="Blood group"
              variant="outlined"
              defaultValue="A"
              fullWidth
            >
              {blood.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </StyledTextField>
          </Stack>
          {/* Allergies Field need API*/}
          <Stack sx={{ marginBottom: '16px' }}>
            <Select
              multiple
              value={allergy}
              onChange={allergiesHandleChange}
              label="Allergies"
              sx={{
                color: `${colorPalette.dark}`,
                '& .MuiInputBase-input': {
                  color: `${colorPalette.dark}`,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderRadius: '12px',
                  borderColor: `${colorPalette.stroke}`,
                },
              }}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {allergies.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </Stack>
          {/* Anamnesis Field need API*/}
          <Stack sx={{ marginBottom: '16px' }}>
            <Select
              multiple
              value={anamnesis}
              onChange={anamnesisHandleChange}
              label="Anamnesis"
              sx={{
                color: `${colorPalette.dark}`,
                '& .MuiInputBase-input': {
                  color: `${colorPalette.dark}`,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderRadius: '12px',
                  borderColor: `${colorPalette.stroke}`,
                },
              }}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
            >
              {anamnesisDump.map((option) => (
                <MenuItem key={option} value={option}>
                  {option}
                </MenuItem>
              ))}
            </Select>
          </Stack>
        </Item>
      </PageContent>
    </PageWrapper>
  )
}
