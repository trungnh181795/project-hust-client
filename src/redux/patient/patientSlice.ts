import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MaybeNull } from '@/types/common'
import { PatientData, PatientStats, UserData } from '@/types'

export type PatientState = {
  patients: MaybeNull<UserData[]>
  patientDetail: MaybeNull<PatientData>
  patientStats: MaybeNull<PatientStats>
  patientStatsRecords: MaybeNull<PatientStats[]>
}

const initialState: PatientState = {
  patientDetail: null,
  patients: null,
  patientStats: null,
  patientStatsRecords: null,
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
    setPatientStats: (state, action: PayloadAction<PatientStats>) => {
      state.patientStats = action.payload
    },
    setPatientStatsRecord: (state, action: PayloadAction<PatientStats[]>) => {
      state.patientStatsRecords = action.payload
    },
  },
})

export const {
  setPatientDetail,
  setPatientStats,
  setPatients,
  setPatientStatsRecord,
} = patientSlice.actions

export default patientSlice.reducer
