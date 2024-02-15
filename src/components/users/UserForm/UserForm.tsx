'use client'

import {
  Button,
  DateTimePicker,
  Input,
  Select,
  SelectOption,
} from '@/components/base'
import {
  selectFetch,
  updateUser,
  useAppDispatch,
  useAppSelector,
} from '@/redux'
import { Gender, UserData } from '@/types'
import { CircularProgress, Grid } from '@mui/material'
import { capitalize } from 'lodash'
import { FC } from 'react'
import { Controller, useForm } from 'react-hook-form'

type UserFormProps = {
  defaultValues: UserData
  actionLabel: string
}

const UserForm: FC<UserFormProps> = ({ defaultValues, actionLabel }) => {
  const {
    formState: { isDirty, errors, isValid },
    control,
    setValue,
    handleSubmit,
  } = useForm<UserData>({
    defaultValues,
  })
  const dispatch = useAppDispatch()
  const { uploading } = useAppSelector(selectFetch)

  const onSubmit = (data: UserData) => {
    if (isValid) {
      dispatch(updateUser({ userId: data?.id || '', payload: data }))
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Grid container spacing={2}>
        <Grid item xs={12} md={8}>
          <Controller
            name="fullName"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label={'Full Name'}
                fullWidth
                placeholder={'Patient name'}
                type="text"
                error={!!errors.fullName}
                helperText={errors.fullName?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Controller
            name="gender"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Select
                label={'Gender'}
                placeholder={'Gender'}
                type="text"
                error={!!errors.gender}
                helperText={errors.gender?.message}
                {...field}
              >
                {Object.values(Gender).map((value) => (
                  <SelectOption key={value} value={value}>
                    {capitalize(value)}
                  </SelectOption>
                ))}
              </Select>
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="dob"
            control={control}
            rules={{ required: true }}
            render={({ field }) => {
              const handleChange = (value: Date) => {
                const date = new Date(value)
                setValue('dob', date.toLocaleString(), {
                  shouldDirty: true,
                })
              }
              return (
                <DateTimePicker
                  {...field}
                  value={field.value}
                  error={!!errors.dob}
                  helperText={errors?.dob?.message as string}
                  label="Ngày sinh"
                  onChange={handleChange}
                />
              )
            }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="job"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label={'Job'}
                fullWidth
                placeholder={'Job'}
                type="text"
                error={!!errors.job}
                helperText={errors.job?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Controller
            name="identity"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label={'Identity'}
                fullWidth
                placeholder={'Identity'}
                type="text"
                error={!!errors.identity}
                helperText={errors.identity?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Controller
            name="ethnic"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label={'Ethenic'}
                fullWidth
                placeholder={'Ethenic'}
                type="text"
                error={!!errors.ethnic}
                helperText={errors.ethnic?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <Controller
            name="nationality"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label={'Nationality'}
                fullWidth
                placeholder={'Nationality'}
                type="text"
                error={!!errors.nationality}
                helperText={errors.nationality?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={8}>
          <Controller
            name="email"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label={'Email'}
                fullWidth
                placeholder={'Email'}
                type="text"
                error={!!errors.email}
                helperText={errors.email?.message}
                {...field}
              />
            )}
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <Controller
            name="phone"
            control={control}
            rules={{ required: true }}
            render={({ field }) => (
              <Input
                label={'Phone Number'}
                fullWidth
                placeholder={'Phone number'}
                type="text"
                error={!!errors.phone}
                helperText={errors.phone?.message}
                {...field}
              />
            )}
          />
        </Grid>
      </Grid>
      <Button
        fullWidth
        disabled={!isDirty}
        variant="contained"
        customsize="sm"
        type="submit"
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          marginBottom: '24px',
        }}
      >
        {uploading ? <CircularProgress /> : actionLabel}
      </Button>
    </form>
  )
}

export default UserForm
