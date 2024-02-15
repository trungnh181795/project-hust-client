'use client'

import { FC, ReactNode, useEffect } from 'react'
import styled from 'styled-components'
import { CircleLoading } from '../Loading'
import { useRouter, useSearchParams } from 'next/navigation'
import { useUserDetail } from '@/hooks/redux'
import { selectAuth, useAppSelector } from '@/redux'

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
  const { curUserId: userId } = useAppSelector(selectAuth)
  const { userDetail, isLoading, isValidating } = useUserDetail(userId)

  useEffect(() => {
    if (!(isLoading || isValidating) && !userDetail) {
      router.push('/auth/login')
    }
  }, [isLoading, userDetail])

  return isLoading ? <CircleLoading /> : children
}

export const AuthWrapper: FC<AuthWrapperProps> = ({ children }) => {
  const router = useRouter()
  const query = useSearchParams()
  const { curUserId: userId } = useAppSelector(selectAuth)
  const { userDetail, isLoading } = useUserDetail(userId)
  const nextAction = query.get('nextAction')

  useEffect(() => {
    if (!isLoading && userDetail) {
      router.push(
        nextAction
          ? nextAction
          : userDetail
            ? `/${userDetail.role}/dashboard`
            : '/'
      )
    }
  }, [userDetail, isLoading, nextAction])

  return isLoading ? <CircleLoading /> : children
}
