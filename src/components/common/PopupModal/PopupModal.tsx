import { FC, FormEventHandler, ReactNode } from 'react'
import { Modal, IconButton, Typography } from '@mui/material'
import { ModalContent, PopupFooter, PopupHeader } from './styles'
import { colorPalette, typography } from '@/config'
// import { ReactComponent as CloseIcon } from '@/../public/icons/close.svg'
import { minHeight, minWidth } from '@mui/system'
import { Button } from '@/components/base'

interface PopupNotiProps {
  open: boolean
  titleIcon?: React.ReactNode
  title: string
  footer?: React.ReactNode
  maxWidth?: string
  minWidth?: string
  onClose: () => void
  children?: ReactNode
  component?: ReactNode
  onSubmit?: FormEventHandler<HTMLFormElement>
}

const PopupModal: FC<PopupNotiProps> = ({
  open,
  titleIcon,
  title,
  footer,
  maxWidth,
  minWidth,
  children,
  component,
  onClose,
  onSubmit,
}) => {
  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      {/* @ts-ignore */}
      <ModalContent
        {...(component && {
          component,
          ...(onSubmit && {
            onSubmit,
          }),
        })}
        maxwidth={maxWidth}
        minwidth={minWidth}
      >
        <PopupHeader>
          <Typography
            className={typography.pc.h7}
            color={colorPalette.dark}
            sx={{ display: 'flex' }}
            component="div"
          >
            {titleIcon}
            {title}
          </Typography>
          <IconButton onClick={onClose}>
            {/* <Icon type='fill' color={colorPalette.dark} src={CloseIcon} /> */}
          </IconButton>
        </PopupHeader>
        {children}
        <PopupFooter>
          <Button
            customsize="sm"
            variant="outlined"
            color="primary"
            sx={{ marginRight: '8px' }}
            onClick={onClose}
          >
            Cancel
          </Button>
          {footer}
        </PopupFooter>
      </ModalContent>
    </Modal>
  )
}

export default PopupModal
