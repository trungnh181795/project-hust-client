import { FC } from 'react'

const CheckFilledIcon: FC = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="12" cy="12" r="10" fill="white" />
      <path
        d="M11.707 15.707C11.512 15.902 11.256 16 11 16C10.744 16 10.488 15.902 10.293 15.707L6.293 11.707C5.902 11.316 5.902 10.684 6.293 10.293C6.684 9.902 7.316 9.902 7.707 10.293L11 13.586L19.35 5.236C17.523 3.251 14.911 2 12 2C6.477 2 2 6.477 2 12C2 17.523 6.477 22 12 22C17.523 22 22 17.523 22 12C22 10.115 21.469 8.358 20.562 6.852L11.707 15.707Z"
        fill="black"
      />
    </svg>
  )
}

export default CheckFilledIcon
