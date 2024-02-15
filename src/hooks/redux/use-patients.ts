'use client'

import {
  MaybeNull,
  PatientData,
  PatientStats,
  Role,
  UseSWRReturn,
  UserData,
} from '@/types'
import { useQuery } from '@/hooks/use-query'
import { setPatientDetail, setPatients, useAppDispatch } from '@/redux'
import { useUsers } from '@/hooks/redux'
import { useEffect } from 'react'

type UsePatients = (initialData?: UserData[]) => UseSWRReturn<UserData[]> & {
  patients: MaybeNull<UserData[]>
}

type UsePatientDetail = (
  patientId: string,
  initialData?: PatientData
) => UseSWRReturn<PatientData> & {
  patientDetail: MaybeNull<PatientData>
}

export const usePatients: UsePatients = (initialData) => {
  const dispatch = useAppDispatch()
  const { users, isLoading, isValidating, mutate, error } =
    useUsers(initialData)

  const patients = users
    ? users.filter((user) => user.role === Role.PATIENT)
    : null

  useEffect(() => {
    if (patients) {
      dispatch(setPatients(patients))
    }
  }, [patients])

  return {
    patients,
    isLoading,
    isValidating,
    error,
    mutate,
  }
}

export const usePatientDetail: UsePatientDetail = (patientId, initialData) => {
  const dispatch = useAppDispatch()
  const { data, error, isLoading, isValidating, mutate } =
    useQuery<PatientData>(
      patientId ? `patient/${patientId}` : null,
      {
        revalidateIfStale: true,
        revalidateOnMount: true,
        revalidateOnFocus: true,
        revalidateOnReconnect: true,
        refreshInterval: 10000,
        fallbackData: initialData,
        onSuccess: (data) => {
          dispatch(setPatientDetail(data?.data))
        },
      },
      undefined,
      { secured: true }
    )

  console.log('data2', data)
  return {
    patientDetail: data,
    isLoading,
    error,
    isValidating,
    mutate,
  }
}
