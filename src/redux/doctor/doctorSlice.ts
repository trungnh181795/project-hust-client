import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MaybeNull } from '@/types/common'
import { DoctorData } from '@/types'

export type DoctorState = {
  doctors: MaybeNull<DoctorData[]>
  doctorDetail: MaybeNull<DoctorData>
}

const initialState: DoctorState = {
  doctorDetail: null,
  doctors: null,
}

export const doctorSlice = createSlice({
  name: 'doctorState',
  initialState,
  reducers: {
    setDoctors: (state, action: PayloadAction<DoctorData[]>) => {
      state.doctors = action.payload
    },
    setDoctorDetail: (state, action: PayloadAction<DoctorData>) => {
      state.doctorDetail = action.payload
    },
  },
})

export const { setDoctorDetail, setDoctors } = doctorSlice.actions

export default doctorSlice.reducer
