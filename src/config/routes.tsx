'use client'

/* Libs */
import React from 'react'
/* Components */
import {
  CalendarIcon,
  DashboardIcon,
  PillIcon,
  UserGroupIcon,
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
    path: '/doctor/dashboard',
    icon: DashboardIcon,
    hideInMenu: false,
  },
  {
    name: 'Patients',
    title: 'Patients',
    path: '/doctor/patients',
    icon: UserIcon,
    hideInMenu: false,
  },
  {
    name: 'Human Resources',
    title: 'Human Resources',
    path: '/doctor/human-resources',
    icon: UserGroupIcon,
    hideInMenu: false,
  },
  {
    name: 'Calendar',
    title: 'Calendar',
    path: '/doctor/calendar',
    icon: CalendarIcon,
    hideInMenu: false,
  },
  {
    name: 'Pharmacy',
    title: 'Pharmacy',
    path: '/doctor/pharmacy',
    icon: PillIcon,
    hideInMenu: false,
  },
]

export const patientRoutes: RouteType[] = [
  {
    name: 'Home',
    title: 'Home',
    path: '/patient/dashboard',
    icon: DashboardIcon,
    hideInMenu: false,
  },
  {
    name: '',
    title: 'Stats',
    path: '/patient/stats',
    icon: UserIcon,
    hideInMenu: false,
  },
  {
    name: 'Calendar',
    title: 'Calendar',
    path: '/patient/calendar',
    icon: CalendarIcon,
    hideInMenu: false,
  },
  {
    name: 'Appointment',
    title: 'Appointment',
    path: '/patient/appointment',
    icon: PillIcon,
    hideInMenu: false,
  },
]
