import { BaseData, MaybeNull, UserAddress } from "@/types"

export type PatientData = BaseData & {
  code: string
  account: number
  doctor: null
  device: null
  medicalThreshold: number
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
