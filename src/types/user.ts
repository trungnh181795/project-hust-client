import { BaseData, Gender, MaybeNull, Response, Role } from '@/types'
import { NotificationData } from './notification'

export type UserToken = {
  accessToken: string
  refreshToken: string
}

export type UserAddress = {
  location: string
  ward: string
  wardCode: number
  district: string
  districtCode: number
  province: string
  provinceCode: number
}

export type UserData = BaseData & {
  fullName: string
  email: string
  password: string
  role: Role
  phone: MaybeNull<string>
  gender: MaybeNull<Gender>
  avatar: MaybeNull<string>
  dob: MaybeNull<string>
  job: MaybeNull<string>
  ethnic: MaybeNull<string>
  nationality: MaybeNull<string>
  identity: MaybeNull<string>
  address: MaybeNull<UserAddress>
}

export type CreateUserParams = {
  fullName: string
  email: string
  confirmPassword: string
  password: string
  role: Role
}

export type CreateUserResponse = Response & {
  id: number
  createdAt: string
  updatedAt: string
  notifications: MaybeNull<NotificationData>[]
  email: string
  fullName: string
  role: Role
  password: string
}
