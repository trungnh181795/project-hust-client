/* Libs */
'use client'

import React, { useEffect } from 'react'
import { Controller, useForm } from 'react-hook-form'
import {
  selectFetch,
  setAuthForm,
  signIn,
  useAppDispatch,
  useAppSelector,
} from '@/redux'
import { AuthFormType, Role, Status } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { signInResolver } from '@/resolvers'
import { Button, Checkbox, Input } from '@/components/base'
import { colorPalette, typography } from '@/config'
import { CircularProgress, Typography } from '@mui/material'
import Link from 'next/link'
import { useSearchParams } from 'next/navigation'

type LoginFormValues = {
  email: string
  password: string
  isDoctor: boolean
}

export default function Login() {
  const dispatch = useAppDispatch()
  const query = useSearchParams()
  const { uploading } = useAppSelector(selectFetch)
  const {
    formState: { isDirty, errors },
    handleSubmit,
    control,
  } = useForm<LoginFormValues>({
    defaultValues: {
      email: query?.get('registeredEmail') || '',
      password: '',
      isDoctor: false,
    },
    resolver: yupResolver(signInResolver),
  })

  const onSubmit = (values: LoginFormValues) => {
    const { isDoctor, ...val } = values

    dispatch(
      signIn({
        ...val,
        role: Role[isDoctor ? 'DOCTOR' : 'PATIENT'],
      })
    )
  }

  const handleOnRegister = () => {
    dispatch(setAuthForm(AuthFormType.SIGN_UP))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <Input
            label="Email"
            fullWidth
            placeholder="Email của bạn"
            type="text"
            {...field}
            error={!!errors?.email}
            helperText={errors?.email?.message}
            sx={{ marginBottom: '16px' }}
          />
        )}
      />
      <Controller
        name="password"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <Input
            label="Password"
            fullWidth
            placeholder="Password"
            type="password"
            {...field}
            error={!!errors?.password}
            helperText={errors?.password?.message}
          />
        )}
      />
      <Controller
        name="isDoctor"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <Checkbox control={<></>} {...field} label="Tôi là bác sĩ" />
        )}
      />
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
        {uploading ? <CircularProgress /> : 'Sign in'}
      </Button>
      <Typography
        className={typography.pc.descReg}
        color={colorPalette.dark}
        component="span"
        textAlign="center"
        sx={{ display: 'inline-block', width: '100%' }}
      >
        Don't have an account?{' '}
        <Typography
          className={typography.pc.descReg}
          color={colorPalette.primary}
          textAlign="center"
          component={Link}
          href="/auth/register"
          onClick={handleOnRegister}
        >
          Create new account!
        </Typography>
      </Typography>
    </form>
  )
}
