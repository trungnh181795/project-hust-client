'use client'

import { MaybeNull, NotificationData, UseSWRReturn } from '@/types'
import { useQuery } from '@/hooks/use-query'
import { setPatients, useAppDispatch } from '@/redux'

type UseNotifications = (
  userId: string,
  initialData?: NotificationData[]
) => UseSWRReturn<NotificationData[]> & {
  notifications: MaybeNull<NotificationData[]>
}

export const useNotifications: UseNotifications = (userId, initialData) => {
  const dispatch = useAppDispatch()
  const { data, isLoading, isValidating, error, mutate } = useQuery<
    NotificationData[]
  >(
    userId ? `user/notifications/${userId}` : null,
    {
      revalidateIfStale: true,
      revalidateOnMount: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshInterval: 3000,
      fallbackData: initialData,
    },
    undefined,
    { secured: true }
  )

  console.log('data', data)

  return {
    notifications: data,
    isLoading,
    isValidating,
    error,
    mutate,
  }
}
