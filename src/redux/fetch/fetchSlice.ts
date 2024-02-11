import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Status } from '@/types'
// Define a type for the slice state

type FetchResponse = {
  status: Status
  message?: string
}

type FetchError = {
  state: string
  log: any
}

export type FetchState = {
  error: FetchError[]
  uploading: boolean
  loading: boolean
  response?: FetchResponse
}

// Define the initial state using that type
const initialState: FetchState = {
  error: [],
  loading: false,
  uploading: false,
  response: {
    status: Status.IDDLE,
  },
}

export const fetchSlice = createSlice({
  name: 'fetchState',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    setUploading: (state, action: PayloadAction<boolean>) => {
      state.uploading = action.payload
    },
    setResponse: (state, action: PayloadAction<FetchResponse>) => {
      state.response = action.payload
    },
    setError: (state, action: PayloadAction<FetchError>) => {
      state.error.push(action.payload)
    },
    resetResponse: (state) => {
      state.response = {
        status: Status.IDDLE,
      }
    },
    resetError: (state) => {
      state.error = []
    },
  },
})

export const {
  setError,
  setUploading,
  setLoading,
  setResponse,
  resetError,
  resetResponse,
} = fetchSlice.actions

export default fetchSlice.reducer
