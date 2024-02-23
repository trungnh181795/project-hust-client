'use client'

/* Libs */
import React, { memo, useState } from 'react'
import {
  Toolbar,
  Container,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Button,
  Typography,
} from '@mui/material'
import { AkaNavbar, NavItem, HeaderIconButton } from './styles'
import { useViewport } from '@/hooks/use-viewport'
import Link from 'next/link'
import { Logo, NotificationBlock } from '@/components/common'
import { colorPalette, doctorRoutes, patientRoutes, typography } from '@/config'
import { PageTitle, StyledBadge } from '@/components/elastic'
import { BellIcon, NavArrowLeftIcon, SearchIcon } from '@/components/icons'
import { Icon } from '@/components/base'
import { selectUser, useAppSelector } from '@/redux'
import { useNotifications } from '@/hooks/redux'

const Header: React.FC = () => {
  const {
    viewport: { width },
  } = useViewport()

  const { user } = useAppSelector(selectUser)
  const { notifications } = useNotifications(user?.id || '')
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)
  const [notiEl, setNotiEl] = useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const openNotifications = Boolean(notiEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleNotiClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (notifications && notifications.length > 0) {
      setNotiEl(event.currentTarget)
    }
  }

  const handleClose = () => {
    setAnchorEl(null)
    setNotiEl(null)
  }

  return (
    <AkaNavbar
      position="static"
      elevation={0}
      sx={{ display: { xs: 'none', md: 'block' } }}
    >
      <Container maxWidth={width >= 1400 ? 'lg' : 'md'}>
        <Toolbar style={{ padding: 0 }}>
          <Box
            component={Link}
            href="dashboard"
            sx={{ flexGrow: 1, display: 'flex' }}
          >
            <Logo variant="primary" size={1} />
          </Box>
          <Box component="ul" sx={{ display: 'flex' }}>
            {patientRoutes.map((route, index) => {
              const isActive = location.pathname.includes(route.path)
                ? true
                : false

              return route.hideInMenu ? null : (
                <NavItem key={route.title} active={isActive}>
                  <Typography
                    color="inherit"
                    className={typography.pc.descSemi}
                    textAlign="center"
                    component={Link}
                    href={route.path}
                  >
                    {route.title}
                  </Typography>
                </NavItem>
              )
            })}
          </Box>
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}
          >
            <HeaderIconButton>
              <Icon src={SearchIcon} type="fill" color={colorPalette.primary} />
            </HeaderIconButton>
            <StyledBadge
              hidden={!notifications || notifications.length === 0}
              bgColor={colorPalette.red.shade_500}
              badgeContent={(notifications && notifications.length) || 0}
            >
              <HeaderIconButton
                onClick={handleNotiClick}
                id="notification-button"
                aria-controls={openNotifications ? 'notification-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={openNotifications ? 'true' : undefined}
              >
                <Icon src={BellIcon} type="fill" color={colorPalette.primary} />
                <Menu
                  id="notification-menu"
                  anchorEl={notiEl}
                  open={openNotifications}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'notification-button',
                  }}
                  sx={{
                    padding: 0,
                    borderRadius: '24px',
                  }}
                >
                  <Box sx={{ padding: '16px', minWidth: '200px' }}>
                    <PageTitle type="content" title="Notifications" />
                    {notifications &&
                      notifications.map((noti) => (
                        <NotificationBlock key={noti.id} notification={noti} />
                      ))}
                  </Box>
                </Menu>
              </HeaderIconButton>
            </StyledBadge>
            <Button
              variant="text"
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: '24px',
              }}
            >
              {/* <Avatar
                src={doctorIcon}
                alt="Avatar"
                sx={{ width: '32px', height: '32px', marginRight: '12px' }}
              /> */}
              <div
                className="size-14px weight-600"
                style={{ marginRight: '12px', color: colorPalette.dark }}
              >
                Hi Hoang
              </div>
              <Box
                sx={{
                  transform: `rotate(${open ? 90 : -90}deg)`,
                  transition: 'ease-in-out 0.2s',
                }}
              >
                <Icon
                  src={NavArrowLeftIcon}
                  type="fill"
                  color={colorPalette.grey}
                />
              </Box>
            </Button>
            <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
                'aria-labelledby': 'basic-button',
              }}
            >
              <MenuItem onClick={handleClose}>Profile</MenuItem>
              <MenuItem onClick={handleClose}>My account</MenuItem>
              <MenuItem onClick={handleClose}>Logout</MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AkaNavbar>
  )
}

export default memo(Header)
