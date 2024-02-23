'use-client'

import { getMockData } from '@/mock/api'
import { AppointmentData, MaybeNull } from '@/types'
import { uniqueId } from 'lodash'
import { FC, ReactNode, createContext, useContext, useState } from 'react'

type AppointmentContextValues = {
  appointments: MaybeNull<AppointmentData[]>
  addAppointment: (appointment: AppointmentData) => void
  removeAppointment: (appointmentId: string) => void
}

type AppointmentContextWrapperProps = {
  userId: MaybeNull<string>
  children: ReactNode
}

const AppointmentContext =
  createContext<MaybeNull<AppointmentContextValues>>(null)

const AppointmentContextWrapper: FC<AppointmentContextWrapperProps> = ({
  userId,
  children,
}) => {
  const { appointments: initAppointments } = getMockData('appointments')
  const [appointments, setAppointments] = useState<
    MaybeNull<AppointmentData[]>
  >(initAppointments as AppointmentData[])

  const addAppointment = ({ id, ...appointment }: AppointmentData) => {
    setAppointments((prevAppointment) => {
      const newAppointment = { id: uniqueId('test'), ...appointment }

      return prevAppointment
        ? [...prevAppointment, newAppointment]
        : [newAppointment]
    })
  }

  const removeAppointment = (appointmentId: string) => {
    setAppointments(
      (prevAppointment) =>
        prevAppointment?.filter(
          (appointment) => appointment.id !== appointmentId
        ) || null
    )
  }

  return (
    <AppointmentContext.Provider
      value={{ appointments, addAppointment, removeAppointment }}
    >
      {children}
    </AppointmentContext.Provider>
  )
}

export const useAppointmentContext = useContext(AppointmentContext)

export default AppointmentContextWrapper
