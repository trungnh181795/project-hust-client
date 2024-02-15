import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { MaybeNull } from '@/types/common'
import { UserData } from '@/types'

export type UserState = {
  user: MaybeNull<UserData>
  users: MaybeNull<UserData[]>
}

const initialState: UserState = {
  user: null,
  users: null,
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
    },
    setUsers: (state, action: PayloadAction<UserData[]>) => {
      state.users = action.payload
    },
    resetUsers: (state) => {
      state.users = null
    },
  },
  extraReducers: (builder) => {},
})

export const { setUser, resetUser, setUsers, resetUsers } = userState.actions

export default userState.reducer
