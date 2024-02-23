import { BaseData, PatientData, PatientStats } from '@/types'

export type DeviceRecordData = BaseData &
  PatientStats & {
    patient: number
  }

export type DeviceData = BaseData & {
  name: string
  type: string
  code: string
  isConnect: boolean
  patient: PatientData
}

export type CreateDeviceData = {
  name: string
  type: string
  code: string
  isConnect: boolean
  patientId: string
}

export type AssignDeviceToPatientData = {
  patientId: string
  deviceId: string
}