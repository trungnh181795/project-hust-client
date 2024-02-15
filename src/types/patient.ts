import {
  BaseData,
  DeviceRecordData,
  DoctorData,
  MaybeNull,
  UserAddress,
  UserData,
} from '@/types'

export type PatientData = BaseData & {
  code: string
  account: UserData
  doctor: DoctorData
  device: null
  medicalThreshold: number
  deviceRecords: DeviceRecordData[]
}

export type PatientStats = {
  [PatientStatEnum.HEART_BPM]: number
  [PatientStatEnum.OXYGEN_PERCENT]: number
  [PatientStatEnum.TEMPERATURE]: number
}

export enum PatientStatEnum {
  HEART_BPM = 'heart_beat_bpm',
  OXYGEN_PERCENT = 'oxygen_percent',
  TEMPERATURE = 'temperature',
}

export type CreatePatientPayload = {
  code: MaybeNull<string>
  account: {
    fullName: MaybeNull<string>
    email: MaybeNull<string>
    password: MaybeNull<string>
    role: MaybeNull<string>
    phone: MaybeNull<string>
    gender: MaybeNull<string>
    avatar: MaybeNull<string>
    dob: MaybeNull<string>
    job: MaybeNull<string>
    ethnic: MaybeNull<string>
    address: MaybeNull<UserAddress>
    nationality: MaybeNull<string>
    identity: MaybeNull<string>
    notifications: []
    schedules: []
  }
  doctor: {
    account: {
      fullName: MaybeNull<string>
      email: MaybeNull<string>
      password: MaybeNull<string>
      role: MaybeNull<string>
      phone: MaybeNull<string>
      gender: MaybeNull<string>
      avatar: MaybeNull<string>
      dob: string
      job: MaybeNull<string>
      ethnic: MaybeNull<string>
      address: {
        user: MaybeNull<string>
        location: MaybeNull<string>
        ward: MaybeNull<string>
        wardCode: MaybeNull<number>
        district: MaybeNull<string>
        districtCode: MaybeNull<number>
        province: MaybeNull<string>
        provinceCode: MaybeNull<number>
      }
      nationality: MaybeNull<string>
      identity: MaybeNull<string>
      notifications: []
      schedules: []
    }
    patients: []
    department: MaybeNull<string>
    degree: MaybeNull<string>
    appointments: []
  }
  device: {
    name: MaybeNull<string>
    type: MaybeNull<string>
    code: MaybeNull<string>
    patient: MaybeNull<string>
    isConnect: true
  }
  medicalThreshold: {
    patient: MaybeNull<string>
    spO2Threshold: MaybeNull<number>
    heartRateThreshold: MaybeNull<number>
    bodyTempThreshold: MaybeNull<number>
    diasHighThreshold: MaybeNull<number>
    diasLowThreshold: MaybeNull<number>
    sysHighThreshold: MaybeNull<number>
    sysLowThreshold: MaybeNull<number>
  }
  prescriptions: []
  medicalRecords: []
  medicalStats: []
  appointments: []
}
