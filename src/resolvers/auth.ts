import { requiredMsg } from '@/config/constants'
import * as yup from 'yup'

export const signInResolver = yup
  .object({
    email: yup.string().required(requiredMsg),
    password: yup.string().required(requiredMsg),
    isDoctor: yup.boolean().required(requiredMsg),
  })
  .required()
