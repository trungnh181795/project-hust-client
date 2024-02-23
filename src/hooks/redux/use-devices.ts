import { setDevices, useAppDispatch } from '@/redux'
import { DeviceData, MaybeNull, UseSWRReturn } from '@/types'
import { useQuery } from '../use-query'

type UseDevices = (initialData?: DeviceData[]) => UseSWRReturn<DeviceData[]> & {
  devices: MaybeNull<DeviceData[]>
}

export const useDevices: UseDevices = (initialData?: DeviceData[]) => {
  const dispatch = useAppDispatch()
  const { data, error, isLoading, isValidating, mutate } = useQuery<
    DeviceData[]
  >(
    'device',
    {
      revalidateIfStale: true,
      revalidateOnMount: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshInterval: 120000,
      fallbackData: initialData,
      onSuccess: (data: any) => {
        dispatch(setDevices(data?.data))
      },
    },
    undefined,
    { secured: true }
  )

  return {
    devices: data,
    isLoading,
    isValidating,
    error,
    mutate,
  }
}

