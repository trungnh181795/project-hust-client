import { BaseData } from '@/types'

export type AppointmentData = BaseData & {
  patientId: string
  doctorId: string
  name: string
  time: string
  link: string
  duration: number
}

export type CreateAppointmentData = {
  patientId: string
  doctorId: string
  name: string
  link: string
  time: string
  duration: number
}
