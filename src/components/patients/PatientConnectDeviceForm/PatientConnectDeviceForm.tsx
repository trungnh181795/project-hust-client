'use client'

import { Button, Input } from '@/components/base'
import { PopupModal } from '@/components/common'
import {
  createDevice,
  selectFetch,
  selectUser,
  useAppDispatch,
  useAppSelector,
} from '@/redux'
import { deviceCreateResolver } from '@/resolvers'
import { CreateDeviceData, Status } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { Box, Grid } from '@mui/material'
import { Dispatch, FC, SetStateAction, useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import { toast } from 'react-toastify'

type PatientConnectDeviceFormProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const PatientConnectDeviceForm: FC<PatientConnectDeviceFormProps> = ({
  open,
  setOpen,
}) => {
  const { user } = useAppSelector(selectUser)
  const { response } = useAppSelector(selectFetch)
  const dispatch = useAppDispatch()
  const {
    formState: { isDirty, errors },
    control,
    handleSubmit,
  } = useForm<CreateDeviceData>({
    values: {
      type: 'medical',
      code: '',
      isConnect: true,
      name: '',
      patientId: user?.patientId?.toString() || '',
    },
    resolver: yupResolver(deviceCreateResolver),
  })

  const onSubmit = (data: CreateDeviceData) => {
    if (user?.patientId) {
      dispatch(
        createDevice({
          ...data,
          patientId: user?.patientId?.toString() || '',
        })
      )
    }
  }

  useEffect(() => {
    if (response && response.status === Status.SUCCESS) {
      setOpen(false)
      toast('Connected to device', { type: 'success' })
    }
  }, [response])

  if (!user) {
    return null
  }

  return (
    <PopupModal
      open={open}
      component="form"
      onSubmit={handleSubmit(onSubmit)}
      title="Connect to device"
      footer={
        <Button
          disabled={!isDirty}
          variant="contained"
          customsize="sm"
          type="submit"
        >
          Connect
        </Button>
      }
      maxWidth="500px"
      minWidth="300px"
      onClose={() => setOpen(false)}
    >
      <Box sx={{ padding: '16px' }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Controller
                name="name"
                rules={{ required: true }}
                control={control}
                render={({ field }) => (
                  <Input
                    label="Device name"
                    fullWidth
                    placeholder="Device name"
                    type="text"
                    {...field}
                    error={!!errors?.name}
                    helperText={errors?.name?.message}
                  />
                )}
              />
            </Grid>
            <Grid item xs={12}>
              <Controller
                name="code"
                rules={{ required: true }}
                control={control}
                render={({ field }) => (
                  <Input
                    label="Device code"
                    fullWidth
                    placeholder="Device code"
                    type="text"
                    {...field}
                    error={!!errors?.code}
                    helperText={errors?.code?.message}
                  />
                )}
              />
            </Grid>
          </Grid>
      </Box>
    </PopupModal>
  )
}

export default PatientConnectDeviceForm
