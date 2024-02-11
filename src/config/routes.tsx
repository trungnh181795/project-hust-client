'use client'

/* Libs */
import React from 'react'
/* Components */
import {
  CalendarIcon,
  DashboardIcon,
  PillIcon,
  UserIcon,
} from '@/components/icons'

interface BasicRouteType {
  name: string
  title: string
  path: string
  icon?: React.FunctionComponent<any>
  hideInMenu: boolean
}

export interface RouteType extends BasicRouteType {
  subRoutes?: RouteType[]
}

export const doctorRoutes: RouteType[] = [
  {
    name: 'Dashboard',
    title: 'Dashboard',
    path: '/dashboard',
    icon: DashboardIcon,
    hideInMenu: false,
  },
  {
    name: 'Patients',
    title: 'Patients',
    path: '/patients',
    icon: UserIcon,
    hideInMenu: false,
  },
  {
    name: 'Calendar',
    title: 'Calendar',
    path: '/calendar',
    icon: CalendarIcon,
    hideInMenu: false,
  },
  {
    name: 'Pharmacy',
    title: 'Pharmacy',
    path: '/pharmacy',
    icon: PillIcon,
    hideInMenu: false,
  },
]

export const patientRoutes: RouteType[] = [
  {
    name: 'Home',
    title: 'Home',
    path: '/',
    icon: DashboardIcon,
    hideInMenu: false,
  },
  {
    name: '',
    title: 'Patients',
    path: '/patients',
    icon: UserIcon,
    hideInMenu: false,
  },
  {
    name: 'Calendar',
    title: 'Calendar',
    path: '/calendar',
    icon: CalendarIcon,
    hideInMenu: false,
  },
  {
    name: 'Pharmacy',
    title: 'Pharmacy',
    path: '/pharmacy',
    icon: PillIcon,
    hideInMenu: false,
  },
]
