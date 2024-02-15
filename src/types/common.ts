export enum Status {
  IDDLE = 'iddle',
  SUCCESS = 'success',
  ERROR = 'error',
  PENDING = 'pending',
}

export enum ActiveStatus {
  ACTIVE = 'Active',
  DEACTIVATED = 'Deactivated',
}

export enum VoucherStatus {
  VALID = 'Valid',
  INVALID = 'Invalid',
}

export type MuiColor =
  | 'default'
  | 'primary'
  | 'secondary'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
  | undefined

export type Maybe<T> = T | null
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K]
}

export enum ContentType {
  JSON = 'application/json',
  FILE = 'multipart/form-data',
}

export type CartItem = {
  finalPrice: number
  originalPrice: number
  quantity: number
}

export type QtyAction = {}

export type PaginationInfo = {
  pageNum: number
  pageSize: number
  totalDocument: number
  pageTotal: number
}

export type FilterChangeParams = {
  typeQuery: string
  prototypeQuery: string
}

export type BreadcrumbLinks = {
  label: string
  href: string
  active?: boolean
}

export type ProductOption = {
  label: string
  value: any
  active?: boolean
}

export type FetchResponse<T = any> = {
  status: Status
  message?: string
  data?: T
}

export interface WithComponentInterface {
  component?: React.ReactNode
}

export type WithComponentType = {
  component?: React.ReactNode
}

export type MaybeNull<T> = T | null
export type MaybeUndef<T> = T | undefined

export enum Stage {
  STAGE_1 = 'Stage 1',
  STAGE_2 = 'Stage 2',
  STAGE_3 = 'Stage 3',
  STAGE_4 = 'Stage 4',
}

export enum AppointmentStatus {
  STATUS_PENDING = 'Pending',
  STATUS_ACTIVE = 'Active',
  STATUS_NEW = 'New',
  STATUS_CLOSED = 'Closed',
}

export type BaseData = {
  id: string
  updatedAt: string
  createdAt: string
}

export enum Role {
  DOCTOR = 'doctor',
  PATIENT = 'patient',
  ADMIN = 'administrator',
  USER = 'user',
}

export enum Gender {
  MALE = 'male',
  FEMALE = 'female',
  PNS = 'prefer not to say'
}

export type Response = {
  message?: string
}

export type UseSWRReturn<T> = {
  isLoading: boolean
  isValidating: boolean
  error: any
  mutate: (optimisticData?: T | undefined) => void
}
