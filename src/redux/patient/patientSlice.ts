import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MaybeNull } from '@/types/common'
import { PatientData } from '@/types'

export type PatientState = {
  patients: MaybeNull<PatientData[]>
  patientDetail: MaybeNull<PatientData>
}

const initialState: PatientState = {
  patientDetail: null,
  patients: null,
}

export const patientSlice = createSlice({
  name: 'patientState',
  initialState,
  reducers: {
    setPatients: (state, action: PayloadAction<PatientData[]>) => {
      state.patients = action.payload
    },
    setPatientDetail: (state, action: PayloadAction<PatientData>) => {
      state.patientDetail = action.payload
    },
    // setPatient
  },
  extraReducers: (builder) => {},
})

export const {} = patientSlice.actions

export default patientSlice.reducer
