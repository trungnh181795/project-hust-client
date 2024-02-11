'use client'

import MuiDrawer from '@mui/material/Drawer'
import { styled as muiStyled, Theme, CSSObject } from '@mui/material/styles'
import { TypographyProps, ListItemButtonProps } from '@mui/material'
import {
   List,
   Box,
   ListItemButton,
   ListItemIcon,
   Typography,
} from '@mui/material'
import { colorPalette } from '@/config'

type MenuListItemProps = ListItemButtonProps & {
   component?: React.ReactNode
   to?: string
   open?: boolean
   active: boolean
   hovered: boolean
   defaultActiveStyle: boolean
}
type LogoTitleProps = TypographyProps & {
   open: boolean
   component?: React.ReactNode
   colorpalette?: any
}

interface BoxProps {
   open: boolean
}

const openedMixin = (theme: Theme): CSSObject => ({
   width: '257px',
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
   }),
   overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
   transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
   }),
   overflowX: 'hidden',
   width: '96px',
   [theme.breakpoints.up('sm')]: {
      width: `96px`,
   },
})

export const Drawer = muiStyled(MuiDrawer, {
   shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
   background: '0% 0% no-repeat padding-box',
   position: 'relative',
   flexShrink: 0,
   borderRight: 'none',
   whiteSpace: 'nowrap',
   boxSizing: 'border-box',
   ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
   }),
   ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
   }),
}))

export const MainLogo = muiStyled('img')`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 20px;
`

export const LogoTitle = muiStyled(Typography)<LogoTitleProps>(({ open }) => ({
   display: open ? 'block' : 'none',
   marginLeft: '15px',
}))

export const SiderMenuList = muiStyled(List)(() => ({
   padding: '16px',
   position: 'relative',
}))

export const UserOuterBox = muiStyled(Box)(() => {
   return {
      position: 'relative',
      display: 'flex',
      padding: '21px 20px',
      alignItems: 'center',
      borderTop: `1px solid ${colorPalette.stroke}`,
      justifyContent: 'space-between',
   }
})

export const UserInnerBox = muiStyled(Box)<BoxProps>(({ open }) => ({
   display: open ? 'flex' : 'none',
   flexDirection: 'column',
   marginLeft: '12px',
}))

export const MenuListItem = muiStyled(ListItemButton)<MenuListItemProps>(
   ({ hovered, active, open }) => {
      return {
         position: 'relative',
         borderRadius: '12px',
         zIndex: 100000000,
         padding: '8px 18px',
         minWidth: '48px',
         height: '48px',
         marginBottom: '8px',
         transitions: 'linear 1s',
         backgroundColor:
            active || hovered ? colorPalette.primary : colorPalette.background,
         '&:hover': {
            backgroundColor: colorPalette.primary,
            color: colorPalette.white,
         },
         '&:before': active
            ? {
                 display: 'block',
                 content: '" "',
                 position: 'absolute',
                 top: 0,
                 left: '-16px',
                 backgroundColor: colorPalette.primary,
                 width: '6px',
                 height: '48px',
                 borderRadius: '0px 12px 12px 0px',
              }
            : 'undefined',
      }
   }
)

export const MenuListItemIcon = muiStyled(ListItemIcon)(() => ({
   width: '20px',
   height: '20px',
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   minWidth: 0,
}))

export const SiderMenu = muiStyled(Box)(() => {
   return {
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      height: '100%',
      border: `1px solid ${colorPalette.stroke}`,
   }
})
