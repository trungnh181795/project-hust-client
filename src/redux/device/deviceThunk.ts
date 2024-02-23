import {
  AssignDeviceToPatientData,
  CreateDeviceData,
  DeviceData,
  Response,
  Status,
} from '@/types'
import { createAsyncThunk } from '@reduxjs/toolkit'
import { setResponse, setUploading } from '@/redux'
import { fetcher } from '@/utils/fetcher'

export const createDevice = createAsyncThunk(
  'deviceState/createDevice',
  async (payload: CreateDeviceData, { dispatch }) => {
    try {
      dispatch(setUploading(true))
      dispatch(
        setResponse({ status: Status.PENDING, message: 'Processing...' })
      )

      const { data, statusCode } = await fetcher<
        Response & DeviceData,
        CreateDeviceData
      >({
        url: 'user',
        method: 'POST',
        body: payload,
      })

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

export const assignDeviceToPatient = createAsyncThunk(
  'deviceState/createDevice',
  async (payload: AssignDeviceToPatientData, { dispatch }) => {
    try {
      dispatch(setUploading(true))
      dispatch(
        setResponse({ status: Status.PENDING, message: 'Processing...' })
      )

      const { data, statusCode } = await fetcher<
        Response,
        {
          id: string
          patientId: string
        }
      >({
        url: 'user',
        method: 'POST',
        body: {
          id: payload.deviceId,
          patientId: payload.patientId,
        },
      })

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
