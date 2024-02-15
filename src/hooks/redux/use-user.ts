'use client'

import { MaybeNull, UseSWRReturn, UserData } from '@/types'
import { useQuery } from '@/hooks/use-query'
import {
  selectAuth,
  setUser,
  setUsers,
  useAppDispatch,
  useAppSelector,
} from '@/redux'

type UseUserDetail = (
  userId: MaybeNull<number>,
  initialData?: UserData
) => UseSWRReturn<UserData> & {
  userDetail: MaybeNull<UserData>
}

type UseUsers = (initialData?: UserData[]) => UseSWRReturn<UserData[]> & {
  users: MaybeNull<UserData[]>
}

export const useUserDetail: UseUserDetail = (userId, initialData) => {
  const dispatch = useAppDispatch()
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
    userDetail: data,
    isLoading,
    isValidating,
    error,
    mutate,
  }
}

export const useUsers: UseUsers = (initialData) => {
  const dispatch = useAppDispatch()
  const { data, isLoading, isValidating, error, mutate } = useQuery<UserData[]>(
    'user',
    {
      revalidateIfStale: true,
      revalidateOnMount: true,
      revalidateOnFocus: true,
      revalidateOnReconnect: true,
      refreshInterval: 10000,
      fallbackData: initialData,
      onSuccess: (data) => {
        dispatch(setUsers(data))
      },
    },
    undefined,
    { secured: true }
  )
  console.log('data', { data, isLoading, error })

  return {
    users: data,
    isLoading,
    isValidating,
    error,
    mutate,
  }
}
