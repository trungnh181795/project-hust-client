import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MaybeNull } from '@/types/common'
import { PatientData, PatientStats, UserData } from '@/types'

export type PatientState = {
  patients: MaybeNull<UserData[]>
  patientDetail: MaybeNull<PatientData>
  patientStats: MaybeNull<PatientStats>
}

const initialState: PatientState = {
  patientDetail: null,
  patients: null,
  patientStats: null,
}

export const patientSlice = createSlice({
  name: 'patientState',
  initialState,
  reducers: {
    setPatients: (state, action: PayloadAction<UserData[]>) => {
      state.patients = action.payload
    },
    setPatientDetail: (state, action: PayloadAction<PatientData>) => {
      state.patientDetail = action.payload
    },
<<<<<<< HEAD
    // setPatient
=======
    setPatientStats: (state, action: PayloadAction<PatientStats>) => {
      state.patientStats = action.payload
    },
>>>>>>> 920148187196ad6a3d72e0ef54c11eff4987f9ff
  },
})

export const { setPatientDetail, setPatientStats, setPatients } =
  patientSlice.actions

export default patientSlice.reducer
