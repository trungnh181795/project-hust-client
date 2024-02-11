'use client'

import { MaybeNull, UserData } from '@/types'
import { useQuery } from '@/hooks/use-query'
import { selectAuth, setUser, useAppDispatch, useAppSelector } from '@/redux'

type UseUser = (initialData?: UserData) => {
  user: MaybeNull<UserData>
  isLoading: boolean
  isValidating: boolean
  error: any
  mutate: (optimisticData?: UserData | undefined) => void
}

export const usePatients: UseUser = (initialData) => {
  const dispatch = useAppDispatch()
  const { curUserId: userId } = useAppSelector(selectPatient)
  const { data, isLoading, isValidating, error, mutate } = useQuery<UserData>(
    userId ? `user/${userId}` : null,
    {
      revalidateIfStale: true,
      revalidateOnMount: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshInterval: 10000,
      fallbackData: initialData,
      onSuccess: (data) => {
        dispatch(setUser(data))
      },
    },
    undefined,
    { secured: true }
  )
  console.log('data', { data, isLoading, error })

  return {
    user: data,
    isLoading,
    isValidating,
    error,
    mutate,
  }
}
