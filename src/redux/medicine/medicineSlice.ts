import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MaybeNull } from '@/types/common'
import { BaseState } from '@/redux/store'

export type MedicineState = {
}

const initialState: MedicineState = {
}

export const medicineSlice = createSlice({
  name: 'medicineState',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {},
})

export const { } =
  medicineSlice.actions

export default medicineSlice.reducer
