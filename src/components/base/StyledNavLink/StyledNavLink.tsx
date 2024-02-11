'use client'

import styled from 'styled-components'
import { colorPalette } from '@/config'
import Link, { LinkProps } from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, forwardRef } from 'react'

const MyNavLink = forwardRef(
  (props: LinkProps & { children: ReactNode }, ref: any) => {
    const { href, children, ...restProps } = props
    const pathname = usePathname()
    const isActive = pathname.includes(href.toString())

    return (
      <Link
        ref={ref}
        {...restProps}
        href={href}
        style={{ color: colorPalette[isActive ? 'primary' : 'lightGrey'] }}
      >
        {children}
      </Link>
    )
  }
)

const StyledNavLink = styled(MyNavLink)`
  text-decoration: none;
  color: #000000;
`
export default StyledNavLink
