import { requiredMsg } from '@/config/constants'
import * as yup from 'yup'

export const deviceCreateResolver = yup
  .object({
    name: yup.string().required(requiredMsg),
    code: yup.string().required(requiredMsg),
    isConnect: yup.boolean().required(requiredMsg),
    type: yup.string().required(requiredMsg),
    patientId: yup.string().required(requiredMsg),
  })
  .required()
