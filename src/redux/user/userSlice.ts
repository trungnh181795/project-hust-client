import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MaybeNull } from '@/types/common'
import { UserData } from '@/types'

export type UserState = {
  user: MaybeNull<UserData>
}

const initialState: UserState = {
  user: null,
}

export const userState = createSlice({
  name: 'userState',
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<UserData>) => {
      state.user = action.payload
    },
    resetUser: (state) => {
      state.user = null
    }
  },
  extraReducers: (builder) => {},
})

export const { setUser, resetUser } = userState.actions

export default userState.reducer
