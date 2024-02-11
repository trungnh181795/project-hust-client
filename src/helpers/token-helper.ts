import { tokenStorage } from '@/config/storage'
import { MaybeNull } from '@/types/common'
import { UserToken } from '@/types/user'

export const getUserToken = (): MaybeNull<UserToken> => {
  const userToken: UserToken = JSON.parse(
    localStorage.getItem(tokenStorage) || 'null'
  )

  return userToken
}
