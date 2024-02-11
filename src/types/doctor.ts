import { BaseData, MaybeNull, UserAddress } from '@/types'
import { NotificationData } from './notification'

export type DoctorData = BaseData & {
  account: string
  department: string
  degree: string
}

export type CreateDoctorPayload = {
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
    address: UserAddress
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
