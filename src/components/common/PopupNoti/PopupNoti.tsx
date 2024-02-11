import { FC, memo } from 'react'
import { Typography, Grid } from '@mui/material'
import { colorPalette, typography } from '@/config'
// import { ReactComponent as WarningIcon } from '@/../public/icons/warning.svg'
import PopupModal from '../PopupModal'

interface PopupNotiProps {
   open: boolean
   setOpen: (open: boolean) => void
   message: {
      __html: string
   }
   otherContent?: React.ReactNode
   action: () => void
}

const PopupNoti: FC<PopupNotiProps> = memo(
   ({ open, setOpen, message, action, otherContent }) => {
      const handleOnClick = () => {
         action()
         setOpen(false)
      }

      return (
         <PopupModal
            open={open}
            onClose={() => setOpen(false)}
            // titleIcon={
            //    <Icon
            //       color={colorPalette.red.shade_500}
            //       type='fill'
            //       src={WarningIcon}
            //       sx={{ marginRight: '4px' }}
            //    />
            // }
            title='Warning!'
            // footer={
            //    <Button
            //       customsize='sm'
            //       variant='contained'
            //       color='primary'
            //       type='submit'
            //       onClick={handleOnClick}
            //       sx={{ width: '100px' }}
            //    >
            //       OK
            //    </Button>
            // }
         >
            <Grid container spacing={2} padding={'16px'}>
               {otherContent && (
                  <Grid
                     item
                     xs={3}
                     sx={{ display: 'flex', alignItems: 'center' }}
                  >
                     {otherContent}
                  </Grid>
               )}
               <Grid
                  item
                  xs={otherContent ? 9 : 12}
                  sx={{ display: 'flex', alignItems: 'center' }}
               >
                  <Typography
                     className={typography.pc.s2}
                     color={colorPalette.dark}
                     dangerouslySetInnerHTML={message}
                  />
               </Grid>
            </Grid>
         </PopupModal>
      )
   }
)

export default PopupNoti
