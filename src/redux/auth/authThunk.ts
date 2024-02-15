import { Response, Role, Status } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setCurUserId, setResponse, setUploading } from '@/redux'
import { fetcher } from '@/utils/fetcher'
import { tokenStorage, userStorage } from '@/config/storage'
import { getUserToken } from '@/helpers/token-helper'

export type SignInParams = {
  email: string
  password: string
  role: Role
}

export type SignInResponse = Response & {
  accessToken: string
  email: string
  id: number
  refreshToken: string
  role: Role
  roleId: number
}

export const signIn = createAsyncThunk(
  'authState/signIn',
  async (values: SignInParams, { dispatch }) => {
    try {
      dispatch(setUploading(true))
      dispatch(
        setResponse({ status: Status.PENDING, message: 'Processing...' })
      )

      const { data, statusCode } = await fetcher<SignInResponse, SignInParams>({
        url: 'auth/login',
        method: 'POST',
        body: values,
      })

      if (statusCode === 201 && data) {
        dispatch(setUploading(false))
        dispatch(setResponse({ status: Status.SUCCESS, message: 'Logged in!' }))
        const { accessToken, refreshToken, id } = data

        localStorage.setItem(
          tokenStorage,
          JSON.stringify({ accessToken, refreshToken })
        )
        localStorage.setItem(
          userStorage,
          JSON.stringify({ id})
        )
        dispatch(setCurUserId(id))
        return
      }

      dispatch(setUploading(false))
      dispatch(setResponse({ status: Status.ERROR, message: data?.message }))
    } catch (err: any) {
      dispatch(setUploading(true))
      dispatch(
        setResponse({ status: Status.ERROR, message: err?.response?.message })
      )
    }
  }
)

export const logout = createAsyncThunk(
  'authState/logout',
  async (_, { dispatch }) => {
    try {
      dispatch(setUploading(true))
      dispatch(
        setResponse({ status: Status.PENDING, message: 'Logging out...' })
      )

      const userToken = getUserToken()
      const { data, statusCode } = await fetcher<any>({
        url: 'auth/logout',
        method: 'GET',
        userToken,
      })
      console.log('userToken', userToken)

      if ( statusCode === 200) {
        dispatch(setUploading(false))
        dispatch(setResponse({ status: Status.SUCCESS, message: 'Logged out!' }))

        localStorage.removeItem(
          tokenStorage
        )
        localStorage.removeItem(
          userStorage
        )
        return
      }

      dispatch(setUploading(false))
      dispatch(setResponse({ status: Status.ERROR, message: data?.message }))
    } catch (err: any) {
      dispatch(setUploading(true))
      dispatch(
        setResponse({ status: Status.ERROR, message: err?.response?.message })
      )
    }
  }
)
