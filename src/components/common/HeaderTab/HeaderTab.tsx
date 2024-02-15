import { FC } from 'react'
import { Paper, Button, Typography } from '@mui/material'
import { colorPalette, typography } from '@/config'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

type LinkType = {
  label: string
  href: string
}

interface HeaderTabProps {
  links: LinkType[]
  linkPrefix: string
}

const replaceAll = (
  findAnyWith: string[],
  replaceWith: string,
  value: string
): string => {
  let result: string = value
  findAnyWith.forEach((str, idx) => {
    result = result.replaceAll(str, replaceWith)
  })

  return result
}

const HeaderTab: FC<HeaderTabProps> = ({ links, linkPrefix }) => {
  const pathname = usePathname()

  return (
    <Paper
      elevation={0}
      sx={{
        width: '100%',
        padding: '16px',
        borderRadius: '16px',
        backgroundColor: colorPalette.white,
        display: 'flex',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}
    >
      {links.map(({ href, label }) => {
        const isActive = pathname.includes(href)

        return (
          <Button
            component={Link}
            href={href}
            key={href}
            variant={isActive ? 'contained' : 'text'}
            sx={{
              marginRight: '4px',
              padding: '9px 16px',
              borderRadius: '10px',
            }}
          >
            <Typography
              className={typography.pc.s4}
              color={colorPalette[isActive ? 'white' : 'dark']}
            >
              {label}
            </Typography>
          </Button>
        )
      })}
    </Paper>
  )
}

export default HeaderTab
