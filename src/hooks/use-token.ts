import { tokenStorage, userStorage } from '@/config/storage'
import { MaybeNull } from '@/types/common'
import { UserToken } from '@/types/user'
import { useEffect, useState } from 'react'
import { maskString } from '@/utils/mask-string'

const defaultToken = 'null'

type UseToken = () => {
  userToken: MaybeNull<UserToken>
  loading: boolean
}

export const useToken: UseToken = () => {
  const [userToken, setUserToken] = useState<MaybeNull<UserToken>>(null)
  const [loading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userTokenFromStorage = JSON.parse(
        localStorage.getItem(tokenStorage) || defaultToken
      )

      setUserToken(userTokenFromStorage)
      setLoading(false)
    }
  }, [])

  return { userToken, loading }
}

export const saveAccessTokenToStorage = (token: string) => {
  if (typeof window !== 'undefined') {
    const userTokenFromStorage = JSON.parse(
      localStorage.getItem(tokenStorage) || defaultToken
    )

    const newToken = {
      ...userTokenFromStorage,
      accessToken: token,
    }

    localStorage.setItem(tokenStorage, JSON.stringify(newToken))
  }
}

export const handleTokenExpired = (token: string) => {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(userStorage)
    localStorage.removeItem(tokenStorage)

    window.location.reload()

    console.error(`${maskString(token, 0, 8)} expired!`)
  }
}
