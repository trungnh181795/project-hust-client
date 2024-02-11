import type { RootState } from '@/redux/store'
import { PatientState } from '@/redux'
// Other code such as selectors can use the imported `RootState` type
export const selectPatient = (state: RootState) => state.patientState as PatientState
