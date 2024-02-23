'use client'

import { AppointmentData, MaybeNull, UseSWRReturn } from '@/types'
import { useQuery } from '@/hooks/use-query'
import { setPatients,  useAppDispatch } from '@/redux'

type UseAppointments = (initialData?: AppointmentData[]) => UseSWRReturn<AppointmentData[]> & {
  patients: MaybeNull<AppointmentData[]>
}

export const usePatients: UseAppointments = (initialData) => {
  const dispatch = useAppDispatch()
  const { data, isLoading, isValidating, error, mutate } = useQuery<AppointmentData[]>(
    'appointments',
    {
      revalidateIfStale: true,
      revalidateOnMount: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshInterval: 10000,
      fallbackData: initialData,
      onSuccess: (data: any) => {
        dispatch(setPatients(data?.data))
      },
    },
    undefined,
    { secured: true }
  )

  return {
    patients: data,
    isLoading,
    isValidating,
    error,
    mutate,
  }
}
