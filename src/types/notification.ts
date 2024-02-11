import { BaseData, MaybeNull, UserAddress } from '@/types'
import { PatientData } from './patient'

export type NotificationData = BaseData & {
  title: string
  content: string
  status: string
  userId: string
  type: string
  appointmentId: string
}

export type CreateNotificationPayload = {
  title: MaybeNull<string>
  type: MaybeNull<string>
  content: MaybeNull<string>
  userId: MaybeNull<number>
  patientId: MaybeNull<number>
  doctorId: MaybeNull<number>
  appoinment: {
    patient: {
      code: MaybeNull<string>
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
        address: MaybeNull<UserAddress>
        nationality: MaybeNull<string>
        identity: MaybeNull<string>
        notifications: NotificationData[]
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
          notifications: NotificationData[]
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
        isConnect: boolean
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
    doctor: {
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
        notifications: NotificationData[]
        schedules: []
      }
      patients: PatientData[]
      department: MaybeNull<string>
      degree: MaybeNull<string>
      appointments: []
    }
    name: MaybeNull<string>
    time: MaybeNull<string>
    link: MaybeNull<string>
    duration: MaybeNull<number>
    schedules: []
  }
}
