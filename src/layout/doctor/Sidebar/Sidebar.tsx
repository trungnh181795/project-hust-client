/* Libs */
import { useState, useRef, useEffect, memo, FC } from 'react'
import {
  Typography,
  ListItemText,
  IconButton,
  MenuList,
  MenuItem,
  Avatar,
  Box,
  Popper,
  Grow,
  Paper,
  ClickAwayListener,
} from '@mui/material'
import { doctorRoutes, typography, colorPalette } from '@/config'
import { DrawerHeader } from '@/components/elastic'
import Link from 'next/link'
import {
  Drawer,
  LogoTitle,
  MenuListItem,
  MenuListItemIcon,
  SiderMenu,
  SiderMenuList,
  UserInnerBox,
  UserOuterBox,
} from './styles'
import { Icon, StyledNavLink } from '@/components/base'
import logo from '@/../public/next.svg'
import { logout, useAppDispatch } from '@/redux'
import { useRouter } from 'next/navigation'
// import { ReactComponent as NavDownIcon } from '@/../public/icons/nav-down.svg'
interface SidebarProps {
  open: boolean
}

const Sidebar: FC<SidebarProps> = ({ open }) => {
  const dispatch = useAppDispatch()
  const [currHoveredItem, setCurrHoveredItem] = useState('')
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()

  const anchorRef = useRef<HTMLButtonElement>(null)
  const prevOpen = useRef(open)

  const handleLogout = () => {
    dispatch(logout())
  }

  const handleToggle = () => {
    setIsOpen((prevIsOpen) => !prevIsOpen)
  }

  const handleMenuItemHovered = (routePath: string) => {
    setCurrHoveredItem(routePath)
  }

  const handleClose = (event: Event | React.SyntheticEvent) => {
    if (
      anchorRef.current &&
      anchorRef.current.contains(event.target as HTMLElement)
    ) {
      return
    }

    setIsOpen(false)
  }

  const handleListKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'Tab') {
      event.preventDefault()
      setIsOpen(false)
    } else if (event.key === 'Escape') {
      setIsOpen(false)
    }
  }

  const userMenu = (
    //@ts-ignore
    <Popper
      open={isOpen}
      anchorEl={anchorRef.current}
      placement="bottom-start"
      transition
      disablePortal
      sx={{ zIndex: 3 }}
    >
      {({ TransitionProps, placement }) => (
        <Grow
          {...TransitionProps}
          style={{
            transformOrigin:
              placement === 'bottom-start' ? 'left top' : 'left bottom',
          }}
        >
          <Paper>
            <ClickAwayListener onClickAway={handleClose}>
              <MenuList
                autoFocusItem={open}
                id="composition-menu"
                aria-labelledby="composition-button"
                onKeyDown={handleListKeyDown}
              >
                <MenuItem onClick={() => router.push('/doctor/profile')}>Profile</MenuItem>
                {/* <MenuItem onClick={handleClose}>My Account</MenuItem> */}
                <MenuItem onClick={handleLogout}>Logout</MenuItem>
              </MenuList>
            </ClickAwayListener>
          </Paper>
        </Grow>
      )}
    </Popper>
  )

  useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current!.focus()
    }

    prevOpen.current = open
  }, [open])

  return (
    <Drawer variant="permanent" open={open} elevation={0}>
      <DrawerHeader>
        <Link href="/doctor/dashboard">
          {/* <MainLogo className="app-logo" src={logo} /> */}
          <LogoTitle
            open={open}
            variant="h2"
            color={colorPalette.primary}
            component="a"
          >
            Hust Telehealth
          </LogoTitle>
        </Link>
      </DrawerHeader>
      <SiderMenu>
        <SiderMenuList>
          {doctorRoutes.map((route, index) => {
            const isActive = location.pathname.includes(route.path)
            const isHovered = route.path === currHoveredItem ? true : false

            return route.hideInMenu ? null : (
              <Box
                key={index}
                onMouseEnter={() => handleMenuItemHovered(route.path)}
                onMouseLeave={() => handleMenuItemHovered('')}
              >
                {/* <Box onClick={() => saveRouteToSession(route.path)}> */}
                <MenuListItem
                  open={open}
                  className="menu-list"
                  //@ts-ignore
                  component={StyledNavLink}
                  href={route.path}
                  defaultActiveStyle={true}
                  active={isActive}
                  hovered={isHovered}
                >
                  {route.icon && (
                    <MenuListItemIcon>
                      <Icon
                        type="fill"
                        src={route.icon}
                        color={
                          isActive || isHovered
                            ? colorPalette.white
                            : colorPalette.lightGrey
                        }
                      />
                    </MenuListItemIcon>
                  )}
                  {open && (
                    <ListItemText
                      primary={
                        <Typography
                          className={typography.pc.s4}
                          component="span"
                        >
                          {route.name}
                        </Typography>
                      }
                      sx={{
                        color:
                          isActive || isHovered
                            ? colorPalette.white
                            : colorPalette.lightGrey,
                        marginLeft: '14px',
                      }}
                    />
                  )}
                </MenuListItem>
              </Box>
              // </Box>
            )
          })}
        </SiderMenuList>
        <UserOuterBox>
          <Box sx={{ display: 'flex' }}>
            <IconButton
              ref={anchorRef}
              id="composition-button"
              aria-controls={open ? 'composition-menu' : undefined}
              aria-expanded={open ? 'true' : undefined}
              aria-haspopup="true"
              onClick={handleToggle}
              sx={{ width: '42px', height: '42px', padding: 0 }}
            >
              <Avatar
                src={logo}
                alt="ava"
                sx={{ width: '100%', height: '100%' }}
              />
            </IconButton>
            <UserInnerBox open={open}>
              <Typography className={typography.pc.s4} component="div">
                USERNAME
              </Typography>
              <Typography className={typography.pc.descReg} component="div">
                User
              </Typography>
            </UserInnerBox>
          </Box>
          {userMenu}
          {/* <Icon type="fill" src={NavDownIcon} color={colorPalette.grey} /> */}
        </UserOuterBox>
      </SiderMenu>
    </Drawer>
  )
}

export default memo(Sidebar)
