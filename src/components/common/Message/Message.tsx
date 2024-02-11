'use client'

import { FC, useEffect, useState } from 'react'
import { Status } from '@/types'
import { Box, Snackbar, Typography } from '@mui/material'
import { colorPalette, typography } from '@/config'
// import { ReactComponent as CloseIcon } from '@/../public/icons/close.svg'
import { MessageBackground } from './styles'
import { resetResponse, selectFetch, useAppDispatch, useAppSelector } from '@/redux'

type MessageConfig = {
   title: string
   color: string
   shouldOpen: boolean
}

const getMessageConfig = (status: Status): MessageConfig => {
   switch (status) {
      case Status.IDDLE:
         return {
            title: 'IDDLE',
            color: colorPalette.blue.shade_600,
            shouldOpen: false,
         }
      case Status.PENDING:
         return {
            title: 'PENDING',
            color: colorPalette.yellow.shade_600,
            shouldOpen: true,
         }
      case Status.SUCCESS:
         return {
            title: 'SUCCESS',
            color: colorPalette.green.shade_600,
            shouldOpen: true,
         }
      case Status.ERROR:
         return {
            title: 'ERROR',
            color: colorPalette.red.shade_600,
            shouldOpen: true,
         }
   }
}

const Message: FC = () => {
   const { response } = useAppSelector(selectFetch)
   const dispatch = useAppDispatch()

   const [openMessage, setOpenMessage] = useState<boolean>(false)
   const { shouldOpen, title, color } = getMessageConfig(
      response?.status || Status.IDDLE
   )

   const handleOnClose = () => {
      setOpenMessage(false)
      dispatch(resetResponse())
   }

   useEffect(() => {
      setOpenMessage(shouldOpen)

      return () => {
         setOpenMessage(false)
      }
   }, [shouldOpen])

   return (
      <Snackbar
         open={openMessage}
         autoHideDuration={6000}
         onClose={() => handleOnClose()}
         sx={{ zIndex: 9000 }}
      >
         <MessageBackground elevation={2} color={color}>
            <Box sx={{ flexGrow: 1 }}>
               <Typography
                  className={typography.pc.b2}
                  color={color}
                  textTransform='uppercase'
               >
                  {title}
               </Typography>
               <Typography
                  className={typography.pc.helpReg}
                  color={colorPalette.dark}
               >
                  {response?.message}
               </Typography>
            </Box>
            {/* <Icon
               onClick={handleOnClose}
               src={CloseIcon}
               type='fill'
               color={colorPalette.dark}
               sx={{ cursor: 'pointer' }}
            /> */}
         </MessageBackground>
      </Snackbar>
   )
}

export default Message
