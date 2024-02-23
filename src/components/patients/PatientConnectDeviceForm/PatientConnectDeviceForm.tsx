'use client'

import { selectUser, useAppSelector } from '@/redux'
import { Dispatch, FC, SetStateAction } from 'react'

type PatientConnectDeviceFormProps = {
  open: boolean
  setOpen: Dispatch<SetStateAction<boolean>>
}

const PatientConnectDeviceForm: FC<PatientConnectDeviceFormProps> = ({
  open,
  setOpen,
}) => {
  const { user } = useAppSelector(selectUser)

  if (!user) {
    return null
  }

  return <div>PatientConnectDeviceForm</div>
}

export default PatientConnectDeviceForm
