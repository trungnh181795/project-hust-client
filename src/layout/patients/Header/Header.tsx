/* Libs */
import React, { memo } from 'react'
import {
  Toolbar,
  Container,
  Box,
  Avatar,
  Menu,
  MenuItem,
  Button,
} from '@mui/material'
/* Assets */
import notificationIcon from '@/../public/icons/notification.svg'
import primarySearchIcon from '@/../public/icons/search/primarySearchIcon.svg'
import doctorIcon from '@/../public/images/expert/doctor_1.svg'
import arrowDownIcon from '@/../public/icons/arrowDown.svg'
/* Styles */
import { AkaNavbar, NavItem, HeaderIconButton } from './styles'
import { useViewport } from '@/hooks/use-viewport'
import Link from 'next/link'
import { Logo } from '@/components/common'
import { colorPalette, doctorRoutes } from '@/config'
import { StyledBadge } from '@/components/elastic'

const Header: React.FC = () => {
  const {
    viewport: { width },
  } = useViewport()

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
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
          <Box sx={{ display: 'flex' }}>
            {doctorRoutes.map((route, index) => {
              const isActive = location.pathname.includes(route.path)
                ? true
                : false

              return route.hideInMenu ? null : (
                <NavItem
                  key={route.title}
                  href={route.path}
                  className="size-12px weight-600"
                  active={isActive}
                >
                  {route.title}
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
              <img src={primarySearchIcon} alt="Search" />
            </HeaderIconButton>
            <StyledBadge bgColor={colorPalette.red.shade_500} badgeContent={7}>
              <HeaderIconButton>
                <img src={notificationIcon} alt="Bell" />
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
              <Avatar
                src={doctorIcon}
                alt="Avatar"
                sx={{ width: '32px', height: '32px', marginRight: '12px' }}
              />
              <div
                className="size-14px weight-600"
                style={{ marginRight: '12px', color: colorPalette.dark }}
              >
                Hi Hoang
              </div>
              <img src={arrowDownIcon} alt="Arrow Down" />
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
