/* Libs */
'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'
import {
  selectFetch,
  setAuthForm,
  useAppDispatch,
  createUser,
  useAppSelector,
} from '@/redux'
import { AuthFormType, Role } from '@/types'
import { yupResolver } from '@hookform/resolvers/yup'
import { createUserResolver, signInResolver } from '@/resolvers'
import { Button, Checkbox, Input } from '@/components/base'
import { colorPalette, typography } from '@/config'
import { CircularProgress, Typography } from '@mui/material'
import Link from 'next/link'

type SingUpFormValues = {
  fullName: string
  email: string
  password: string
  confirmPassword: string
  isDoctor: boolean
}

export default function Login() {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const { uploading } = useAppSelector(selectFetch)
  const {
    formState: { isDirty, errors },
    handleSubmit,
    control,
  } = useForm<SingUpFormValues>({
    defaultValues: {
      fullName: '',
      email: '',
      password: '',
      confirmPassword: '',
      isDoctor: false,
    },
    resolver: yupResolver(createUserResolver),
  })

  const handleOnSignUpSuccess = (email: string) => {
    router.push(`/auth/login?registeredEmail=${email}`)
  }

  const onSubmit = (values: SingUpFormValues) => {
    const { isDoctor, ...val } = values

    dispatch(
      createUser({
        values: { ...val, role: Role[isDoctor ? 'DOCTOR' : 'PATIENT'] },
        onSignUpSuccess: handleOnSignUpSuccess,
      })
    )
  }

  const handleOnLogin = () => {
    dispatch(setAuthForm(AuthFormType.SIGN_IN))
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="fullName"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <Input
            label="Full name"
            fullWidth
            placeholder="Your full name"
            type="text"
            {...field}
            error={!!errors?.fullName}
            helperText={errors?.fullName?.message}
            sx={{ marginBottom: '16px' }}
          />
        )}
      />
      <Controller
        name="email"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <Input
            label="Email"
            fullWidth
            placeholder="Email"
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
            sx={{ marginBottom: '16px' }}
          />
        )}
      />
      <Controller
        name="confirmPassword"
        rules={{ required: true }}
        control={control}
        render={({ field }) => (
          <Input
            label="Password confirm"
            fullWidth
            placeholder="Password confirmation"
            type="password"
            {...field}
            error={!!errors?.confirmPassword}
            helperText={errors?.confirmPassword?.message}
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
          marginBottom: '16px',
        }}
      >
        {uploading ? <CircularProgress /> : 'Sign up'}
      </Button>
      <Typography
        className={typography.pc.descReg}
        color={colorPalette.dark}
        component="span"
        textAlign="center"
        sx={{ display: 'inline-block', width: '100%' }}
      >
        Already have an account?{' '}
        <Typography
          className={typography.pc.descReg}
          color={colorPalette.primary}
          textAlign="center"
          component={Link}
          href="/auth/register"
          onClick={handleOnLogin}
        >
          Login now!
        </Typography>
      </Typography>
    </form>
  )
}
