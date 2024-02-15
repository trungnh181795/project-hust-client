import { colorPalette, typography } from '@/config'
import { DoctorData } from '@/types'
import { Paper, Stack, Typography } from '@mui/material'
import { FC } from 'react'
import DoctorAvatar from '@/../public/images/doctor-ava.png'
import { Avatar, Icon, Tag } from '@/components/base'
import { LocationIcon, PhoneIcon } from '@/components/icons'
import { getAddress } from '@/utils/get-address'

type DoctorCardProps = {
  doctor: DoctorData
}

const DoctorCard: FC<DoctorCardProps> = ({
  doctor: {
    account: { fullName, phone, role, address },
    id,
  },
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        borderRadius: '8px',
        border: `1px solid ${colorPalette.line}`,
        padding: '12px',
        width: '100%',
      }}
    >
      <Stack
        direction="row"
        sx={{ width: '100%' }}
        justifyContent="flex-start"
        alignItems="center"
      >
        <Avatar src={DoctorAvatar} alt="ava" width="64px" height="64px" />
        <Stack direction="column" sx={{ marginLeft: '20px' }}>
          <Stack
            direction="row"
            alignItems="center"
            sx={{ marginBottom: '8px', width: '100%' }}
          >
            <Typography
              className={typography.pc.b3}
              color={colorPalette.dark}
              component="span"
              textAlign="left"
            >
              {fullName}
            </Typography>
            <Typography
              className={typography.pc.b3}
              color={colorPalette.lightGrey}
              component="span"
            >
              * ID: {id}
            </Typography>
          </Stack>
          <Stack direction="row" sx={{ width: '100%' }} alignItems="center">
            <Tag label={role} variant={'outlined'} color="info" />
          </Stack>
        </Stack>
      </Stack>
      {phone && <Stack direction="row" sx={{ width: '100%', marginTop: '12px' }} alignItems="center">
        <Icon src={PhoneIcon} type="fill" color={colorPalette.lightGrey} />
        <Typography
          className={typography.pc.descSemi}
          color={colorPalette.dark}
          fontWeight={500}
          component="span"
          textAlign="left"
          sx={{ marginLeft: '12px' }}
        >
          {phone}
        </Typography>
      </Stack>}
      {address && (
        <Stack direction="row" sx={{ width: '100%', marginTop: '12px' }} alignItems="center">
          <Icon src={LocationIcon} type="fill" color={colorPalette.lightGrey} />
          <Typography
            className={typography.pc.descSemi}
            color={colorPalette.dark}
            fontWeight={500}
            component="span"
            textAlign="left"
            sx={{ marginLeft: '12px' }}
          >
            {getAddress(address)}
          </Typography>
        </Stack>
      )}
    </Paper>
  )
}

export default DoctorCard
