import { BaseData, PatientStats } from '@/types'

export type DeviceRecordData = BaseData &
  PatientStats & {
    patient: number
  }
