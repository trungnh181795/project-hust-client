import { setDoctors, useAppDispatch } from '@/redux'
import { DoctorData, MaybeNull, UseSWRReturn } from '@/types'
import { useQuery } from '../use-query'

type UseDoctors = (initialData?: DoctorData[]) => UseSWRReturn<DoctorData[]> & {
    doctors: MaybeNull<DoctorData[]>
}

export const useDoctors: UseDoctors = (initialData?: DoctorData[]) => {
  const dispatch = useAppDispatch()
  const { data, error, isLoading, isValidating, mutate } = useQuery<DoctorData[]>(
    'doctor',
    {
      revalidateIfStale: true,
      revalidateOnMount: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshInterval: 120000,
      fallbackData: initialData,
      onSuccess: (data) => {
        dispatch(setDoctors(data?.data))
      },
    },
    undefined,
    { secured: true }
  )

  return {
    doctors: data,
    isLoading,
    isValidating,
    error,
    mutate,
  }
}
