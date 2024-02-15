import type { RootState } from '@/redux/store'
import { DoctorState } from '@/redux'
// Other code such as selectors can use the imported `RootState` type
export const selectDoctor = (state: RootState) => state.doctorState as DoctorState
