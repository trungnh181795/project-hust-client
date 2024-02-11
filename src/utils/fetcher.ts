// import { accountTypeStorage } from '@/config/storage/local'
import { MaybeNull } from '@/types'
import { UserToken } from '@/types/user'

type GetAccessTokenResponse = {
  accessToken: string
}

type FetcherParams<B> = {
  url: string
  body?: B
  method?: 'GET' | 'POST' | 'PUT' | 'DELETE'
  userToken?: MaybeNull<UserToken>
  onNewTokenSuccess?: (token: string) => void
  onNewTokenError?: (token: string) => void
  fetchReqConfig?: RequestInit
}

export type FetcherData<T> = {
  message?: string
  code?: string
  statusCode?: number
  data?: T
}

const baseURL = process.env.NEXT_PUBLIC_SERVER_URL

const processFetchRequest = async <B = any>({
  url,
  method = 'GET',
  body,
  userToken,
  fetchReqConfig,
}: FetcherParams<B>) => {
  const response = await fetch(`${baseURL}/${url}`, {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...(userToken && { Authorization: `Bearer ${userToken.accessToken}` }),
    },
    ...(body && { body: JSON.stringify(body) }),
    ...fetchReqConfig,
  })

  return response
}

export const fetcher = async <T, B = any>({
  url,
  method = 'GET',
  body,
  userToken,
  fetchReqConfig,
  onNewTokenSuccess,
  onNewTokenError,
}: FetcherParams<B>): Promise<FetcherData<T>> => {
  try {
    let shouldRetry = false
    let response: Response
    let data: any

    response = await processFetchRequest<B>({
      url,
      method,
      body,
      userToken,
      fetchReqConfig,
    })

    // console.log('reponse =>>', response.status)
    // console.log('should retry now', response.status === 401 && userToken)

    // if (response.status === 401 && userToken) {
    //   const typeAccount = localStorage.getItem(accountTypeStorage)
    //   shouldRetry = true
    //   response = await fetch(`https://admin.iot95.xyz/api/get-access-token`, {
    //     method: 'POST',
    //     headers: {
    //       'Content-Type': 'application/json',
    //       Authorization: `Bearer ${userToken.accessToken}`,
    //     },
    //     body: JSON.stringify({
    //       refreshToken: userToken.refreshToken,
    //       typeAccount,
    //     }),
    //     ...fetchReqConfig,
    //   })
    // }

    // if (!response?.ok && userToken && shouldRetry) {
    //   onNewTokenError(userToken.accessToken)
    //   throw response
    // }
    // data = await response.json()
    // // console.log('data 1', data)

    // if (shouldRetry) {
    //   // console.log('shouldRetry', shouldRetry)
    //   const { accessToken } = data?.data as GetAccessTokenResponse
    //   onNewTokenSuccess(accessToken)
    //   response = await processFetchRequest({
    //     url,
    //     method,
    //     body,
    //     userToken: { ...userToken, accessToken },
    //     fetchReqConfig,
    //   })

    // }
    // console.log('data 2', data)
    data = await response.json()

    return {
      message: data?.message,
      statusCode: response?.status,
      data,
    }
  } catch (err) {
    throw err
  }
}
