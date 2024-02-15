import { BaseData, PatientStats } from '@/types'

export type MedicalRecordData = BaseData & {
  patientId: string
  bloodTestId: string
  superSonicTestId: string
  deviceRecord: PatientStats
}
