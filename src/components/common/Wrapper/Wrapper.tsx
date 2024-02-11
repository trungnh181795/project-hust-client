'use client'

import { FC, ReactNode, useEffect } from 'react'
import styled from 'styled-components'
import { CircleLoading } from '../Loading'
import { useRouter, useSearchParams } from 'next/navigation'
import { useUser } from '@/hooks/redux'

type AuthWrapperProps = {
  children: ReactNode
}

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0px 0px 0px 0px;
`

export const Wrapper: FC<{ children: ReactNode }> = ({ children }) => {
  return <Container>{children}</Container>
}

export const PrivatePageWrapper: FC<{ children: ReactNode }> = ({
  children,
}) => {
  const router = useRouter()
  const { user, isLoading, isValidating } = useUser()

  useEffect(() => {
    if (!(isLoading || isValidating) && !user) {
      router.push('/auth/login')
    }
  }, [isLoading, user])

  return isLoading ? <CircleLoading /> : children
}

export const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {
  const router = useRouter()
  const query = useSearchParams()
  const { user, isLoading } = useUser()
  const nextAction = query.get('nextAction')

  useEffect(() => {
    if (!isLoading && user) {
      router.push(
        nextAction ? nextAction : user ? `/${user.role}/dashboard` : '/'
      )
    }
  }, [user, isLoading, nextAction])

  return isLoading ? <CircleLoading /> : children
}
