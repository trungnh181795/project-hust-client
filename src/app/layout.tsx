import type { Metadata } from 'next'
import './globals.css'
import './app.scss'
import { Box } from '@mui/material'
import { colorPalette } from '@/config'
import dynamic from 'next/dynamic'
import { CircleLoading } from '@/components/common/Loading'
import { Suspense } from 'react'
import localFont from 'next/font/local'

const ReduxProvider = dynamic(() => import('@/redux/provider'), {
  loading: () => <CircleLoading />,
  ssr: false,
})
const ConfigProvider = dynamic(() => import('@/config/providers'), {
  loading: () => <CircleLoading />,
  ssr: true,
})

const Message = dynamic(() => import('@/components/common/Message'), {
  loading: () => <CircleLoading />,
  ssr: false,
})

const myFont = localFont({
  src: [
    {
      path: '../../public/fonts/sf/sf-ui-display-thin.woff',
      weight: '200',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf/sf-ui-display-ultralight.woff',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf/sf-ui-display-light.woff',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf/sf-ui-display-medium.woff',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf/sf-ui-display-semibold.woff',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf/sf-ui-display-bold.woff',
      weight: '700',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf/sf-ui-display-heavy.woff',
      weight: '800',
      style: 'normal',
    },
    {
      path: '../../public/fonts/sf/sf-ui-display-black.woff',
      weight: '900',
      style: 'normal',
    },
  ],
})

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={myFont.className}>
      <body>
        <Suspense fallback={<CircleLoading />}>
          <ConfigProvider>
            <ReduxProvider>
              <Box
                component="div"
                sx={{
                  bgcolor: colorPalette.white,
                  width: '100%',
                  height: '100%',
                  minHeight: '100vh',
                }}
              >
                {children}
              </Box>
              <Message />
            </ReduxProvider>
          </ConfigProvider>
        </Suspense>
      </body>
    </html>
  )
}
