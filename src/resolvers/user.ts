import { requiredMsg } from '@/config/constants'
import * as yup from 'yup'

export const createUserResolver = yup
  .object({
    fullName: yup.string().required(requiredMsg),
    email: yup.string().required(requiredMsg),
    password: yup.string().required(requiredMsg),
    confirmPassword: yup.string().required(requiredMsg),
    isDoctor: yup.boolean().required(requiredMsg),
  })
  .required()
