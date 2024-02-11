// import { FC, useEffect, useState } from 'react'
// import { Modal, Box, IconButton, Typography, Stack } from '@mui/material'
// import {
//    DiscardPreview,
//    ModalContent,
//    PopupContent,
//    PopupFooter,
//    PopupTitle,
//    PreviewImg,
// } from './styles'
// import Button from '../Button'
// import Icon from '../../base/Icon'
// import { ReactComponent as CloseIcon } from '@/../public/icons/close.svg'
// import { ReactComponent as AddPictureIcon } from '@/../public/icons/picture.svg'
// import { colorPalette, typography } from '@/config'
// import {
//    useAppDispatch,
//    useAppSelector,
//    uploadImage,
//    selectFetch,
// } from '../../redux'
// import { Status } from '@/types'
// import { useTranslation } from 'react-i18next'

// const imageFileTypes = ['image/png', 'image/gif', 'image/jpeg', 'image/webp']

// interface ImageUploaderProps {
//    open: boolean
//    setOpen: (open: boolean) => void
// }

// const ImageUploader: FC<ImageUploaderProps> = ({ open, setOpen }) => {
//    const dispatch = useAppDispatch()
//    const { response } = useAppSelector(selectFetch)
//    const { t } = useTranslation(['common', 'components'])

//    const uploadErrMsg = t('error.fileNotSupport')

//    const [uploadError, setUploadError] = useState<string>('')
//    const [pendingFile, setPendingFile] = useState<File | null>(null)

//    const handleUpload = (event: React.ChangeEvent) => {
//       const result = event.target as HTMLInputElement

//       if (result.files) {
//          const file = result.files![0]

//          const isImg = imageFileTypes.some((type) => type === file.type)
//          if (isImg) {
//             setUploadError('')
//             setPendingFile(file)
//          } else {
//             setUploadError(uploadErrMsg)
//          }
//       }
//    }

//    const clearPendingFile = () => {
//       setPendingFile(null)
//    }

//    const handleClose = () => {
//       setPendingFile(null)
//       setOpen(false)
//    }

//    const handleSaved = () => {
//       if (pendingFile) {
//          dispatch(uploadImage(pendingFile))
//       }
//    }

//    useEffect(() => {
//       if (response?.status === Status.SUCCESS) {
//          handleClose()
//       }
//    }, [response?.status])

//    return (
//       <>
//          <Modal
//             open={open}
//             onClose={handleClose}
//             aria-labelledby='modal-modal-title'
//             aria-describedby='modal-modal-description'
//          >
//             <ModalContent autoComplete='off'>
//                <PopupTitle>
//                   <Typography
//                      className={typography.pc.s2}
//                      color={colorPalette.dark}
//                   >
//                      {t('imageGallery.uploadTitle', { ns: 'components' })}
//                   </Typography>
//                   <IconButton onClick={handleClose}>
//                      <Icon
//                         type='fill'
//                         color={colorPalette.dark}
//                         src={CloseIcon}
//                      />
//                   </IconButton>
//                </PopupTitle>
//                <PopupContent>
//                   {pendingFile ? (
//                      <Box sx={{ position: 'relative' }}>
//                         <PreviewImg
//                            alt='New Image'
//                            src={URL.createObjectURL(pendingFile)}
//                         />
//                         <DiscardPreview onClick={clearPendingFile}>
//                            <Icon
//                               type='fill'
//                               src={CloseIcon}
//                               color={colorPalette.white}
//                               width={14}
//                               height={14}
//                            />
//                         </DiscardPreview>
//                      </Box>
//                   ) : (
//                      <Stack
//                         direction='column'
//                         alignItems='center'
//                         sx={{ width: '100%' }}
//                      >
//                         <Button
//                            customsize='lg'
//                            variant='outlined'
//                            fullWidth
//                            component='label'
//                         >
//                            <input
//                               onChange={handleUpload}
//                               type='file'
//                               accept={imageFileTypes.join(', ')}
//                               hidden
//                            />
//                            <Icon
//                               type='fill'
//                               src={AddPictureIcon}
//                               color={colorPalette.primary}
//                               sx={{ marginRight: '16px' }}
//                            />
//                            {t('buttons.media.choose', { ns: 'components' })}
//                         </Button>
//                         {uploadError && (
//                            <Typography
//                               className={typography.mb.b3}
//                               color={colorPalette.red.shade_500}
//                               sx={{ marginTop: '4px' }}
//                            >
//                               {uploadErrMsg}
//                            </Typography>
//                         )}
//                      </Stack>
//                   )}
//                </PopupContent>
//                <PopupFooter>
//                   <Box>
//                      <Button
//                         customsize='sm'
//                         variant='outlined'
//                         color='primary'
//                         sx={{ marginRight: '8px' }}
//                         onClick={handleClose}
//                      >
//                          {t('buttons.common.cancel', { ns: 'components' })}
//                      </Button>
//                      <Button
//                         disabled={!pendingFile}
//                         customsize='sm'
//                         variant='contained'
//                         color='primary'
//                         type='submit'
//                         onClick={handleSaved}
//                      >
//                         {t('buttons.common.save', { ns: 'components' })}
//                      </Button>
//                   </Box>
//                </PopupFooter>
//             </ModalContent>
//          </Modal>
//       </>
//    )
// }

// export default ImageUploader
