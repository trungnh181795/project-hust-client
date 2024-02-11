import { CreateUserParams, CreateUserResponse, Status } from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setResponse, setUploading } from '@/redux'
import { fetcher } from '@/utils/fetcher'

export const createUser = createAsyncThunk(
  'userState/createUesr',
  async (
    {
      values,
      onSignUpSuccess,
    }: { values: CreateUserParams; onSignUpSuccess: (email: string) => void },
    { dispatch }
  ) => {
    try {
      dispatch(setUploading(true))
      dispatch(
        setResponse({ status: Status.PENDING, message: 'Processing...' })
      )

      const { data, statusCode } = await fetcher<
        CreateUserResponse,
        CreateUserParams
      >({
        url: 'user',
        method: 'POST',
        body: values,
      })

      if (data && statusCode === 201) {
        onSignUpSuccess(data?.email)
      }

      dispatch(setUploading(false))
      dispatch(
        setResponse({
          status: Status[statusCode === 201 ? 'SUCCESS' : 'ERROR'],
          message: data?.message,
        })
      )
    } catch (err: any) {
      dispatch(setUploading(false))
      dispatch(
        setResponse({ status: Status.PENDING, message: err?.response?.message })
      )
    }
  }
)
