import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { AuthFormType } from '@/types/form'
import { MaybeNull } from '@/types'

export type AuthState = {
  authForm: AuthFormType
  curUserId: MaybeNull<number>
}

const initialState: AuthState = {
  authForm: AuthFormType.SIGN_IN,
  curUserId: null,
}

export const authSlice = createSlice({
  name: 'authState',
  initialState,
  reducers: {
    setAuthForm: (state, action: PayloadAction<AuthFormType>) => {
      state.authForm = action.payload
    },
    setCurUserId: (state, action: PayloadAction<number>) => {
      state.curUserId = action.payload
    },
  },
})

export const { setAuthForm, setCurUserId } = authSlice.actions

export default authSlice.reducer
