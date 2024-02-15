'use client'

import { FC, ReactNode, useRef } from 'react'
import { Provider } from 'react-redux'
import { AppStore, getInitialUserId, makeStore } from '@/redux'

type ReduxProviderProps = {
  children: ReactNode
}

const ReduxProvider: FC<ReduxProviderProps> = ({ children }) => {
  const storeRef = useRef<AppStore>()
  if (!storeRef.current) {
    // Create the store instance the first time this renders
    storeRef.current = makeStore()
    storeRef.current.dispatch(getInitialUserId())
  }

  return <Provider store={storeRef.current}>{children}</Provider>
}

export default ReduxProvider
