import { BaseData } from '@/types'

export type MedicalRecordData = BaseData & {
  patientId: string
  bloodTestId: string
  superSonicTestId: string
}
