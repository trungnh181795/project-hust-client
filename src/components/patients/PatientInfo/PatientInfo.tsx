import { CommonInfo } from '@/components/common'
import {
  AllergyIcon,
  BloodIcon,
  BusinessIcon,
  CalendarIcon,
  CardIcon,
  EmailIcon,
  FileIcon,
  FingerPrintIcon,
  GenderIcon,
  LocationIcon,
  PhoneIcon,
  UserIcon,
} from '@/components/icons'
import { colorPalette, typography } from '@/config'
import { PatientData } from '@/types'
import { getAddress } from '@/utils/get-address'
import { Box, Stack, Typography } from '@mui/material'
import { FC } from 'react'

type PatientInfoProps = {
  patient: PatientData
}

const PatientInfo: FC<PatientInfoProps> = ({
  patient: {
    account: {
      fullName,
      address,
      email,
      ethnic,
      identity,
      dob,
      phone,
      gender,
      job,
    },
  },
}) => {
  return (
    <Box sx={{ width: '100%' }}>
      <Stack direction="column">
        <Typography
          sx={{ marginBottom: '16px' }}
          className={typography.pc.s4}
          color={colorPalette.grey}
          fontWeight={600}
          component="div"
          textAlign="left"
          textTransform="uppercase"
        >
          About
        </Typography>
        <Stack direction="column">
          <CommonInfo icon={UserIcon} label="Patient Name" value={fullName} />
          {gender && (
            <CommonInfo icon={GenderIcon} label="Gender" value={gender} />
          )}
          {dob && (
            <CommonInfo icon={CalendarIcon} label="Date of Birth" value={dob} />
          )}
          {ethnic && (
            <CommonInfo icon={FingerPrintIcon} label="Ethenic" value={ethnic} />
          )}
          {identity && (
            <CommonInfo icon={CardIcon} label="Identity" value={identity} />
          )}
          {job && <CommonInfo icon={BusinessIcon} label="Job" value={job} />}
          {address && (
            <CommonInfo
              icon={LocationIcon}
              label="Address"
              value={getAddress(address)}
            />
          )}
          {phone && (
            <CommonInfo icon={PhoneIcon} label="Phone Number" value={phone} />
          )}
          {email && <CommonInfo icon={EmailIcon} label="Email" value={email} />}
        </Stack>
      </Stack>
      <Stack direction="column" sx={{ marginTop: '16px' }}>
        <Typography
          sx={{ marginBottom: '16px' }}
          className={typography.pc.s4}
          color={colorPalette.grey}
          fontWeight={600}
          component="div"
          textAlign="left"
          textTransform="uppercase"
        >
          Health information
        </Typography>
        <Stack direction="column">
          <CommonInfo icon={BloodIcon} label="Blood Type" value={'A'} />
          <CommonInfo
            icon={AllergyIcon}
            label="Allergies"
            multiValues={['Fish', 'Egg', 'Beef']}
          />
          <CommonInfo
            icon={FileIcon}
            label="Anamnesis"
            multiValues={['Fish', 'Egg', 'Beef']}
          />
        </Stack>
      </Stack>
    </Box>
  )
}

export default PatientInfo
