'use client'

import {
  DeviceRecordData,
  MaybeNull,
  NotificationType,
  PaginatedData,
  PatientData,
  PatientStatEnum,
  PatientStats,
  Role,
  UseSWRReturn,
  UserData,
} from '@/types'
import { useQuery } from '@/hooks/use-query'
import {
  setPatientDetail,
  setPatientStats,
  setPatientStatsRecord,
  setPatients,
  useAppDispatch,
} from '@/redux'
import { useUsers } from '@/hooks/redux'
import { useEffect, useState } from 'react'
import { getNotifications } from '@/utils/analyze-stat'

type UsePatients = (initialData?: UserData[]) => UseSWRReturn<UserData[]> & {
  patients: MaybeNull<UserData[]>
}

type UsePatientDetail = (
  patientId: string,
  initialData?: PatientData
) => UseSWRReturn<PatientData> & {
  patientDetail: MaybeNull<PatientData>
}

type UsePatientStats = (
  patientId: MaybeNull<string>,
  initialData?: PaginatedData<DeviceRecordData[]>
) => UseSWRReturn<PaginatedData<DeviceRecordData[]>> & {
  stats: MaybeNull<PaginatedData<DeviceRecordData[]>>
}

type UsePatientLatestStat = (
  patientId: MaybeNull<string>,
  initialData?: DeviceRecordData
) => UseSWRReturn<MaybeNull<DeviceRecordData>> & {
  stat: MaybeNull<DeviceRecordData>
  notifications?: NotificationType[]
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
        onSuccess: (data: any) => {
          dispatch(setPatientDetail(data?.data))
        },
      },
      undefined,
      { secured: true }
    )

  return {
    patientDetail: data,
    isLoading,
    error,
    isValidating,
    mutate,
  }
}

export const usePatientStats: UsePatientStats = (patientId, initialData) => {
  const dispatch = useAppDispatch()
  const { data, error, isLoading, isValidating, mutate } = useQuery<
    PaginatedData<DeviceRecordData[]>
  >(
    patientId ? `patient/device_records/${patientId}` : null,
    {
      revalidateIfStale: true,
      revalidateOnMount: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshInterval: 5000,
      fallbackData: initialData,
      onSuccess: (data: any) => {
        dispatch(setPatientStatsRecord(data?.data?.data))
      },
    },
    undefined,
    { secured: true }
  )

  return {
    stats: data,
    isLoading,
    isValidating,
    error,
    mutate,
  }
}

export const usePatientLatestStat: UsePatientLatestStat = (
  patientId,
  initialData
) => {
  const [notifications, setNotifications] = useState<NotificationType[]>()
  const { data, error, isLoading, isValidating, mutate } = useQuery<
    MaybeNull<DeviceRecordData>
  >(
    patientId ? `patient/device_records_latest/${patientId}` : null,
    {
      revalidateIfStale: true,
      revalidateOnMount: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshInterval: 3000,
      fallbackData: initialData,
      onSuccess: (data: any) => {
        const patientStats = {
          [PatientStatEnum.HEART_BPM]: data?.data[PatientStatEnum.HEART_BPM],
          [PatientStatEnum.OXYGEN_PERCENT]:
            data?.data[PatientStatEnum.OXYGEN_PERCENT],
          [PatientStatEnum.TEMPERATURE]:
            data?.data[PatientStatEnum.TEMPERATURE],
        }
        const notis = getNotifications(patientStats)
        setNotifications(notis)
      },
    },
    undefined,
    { secured: true }
  )

  return {
    notifications,
    stat: data,
    isLoading,
    isValidating,
    error,
    mutate,
  }
}
