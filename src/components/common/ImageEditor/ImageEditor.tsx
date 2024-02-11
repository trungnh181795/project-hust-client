// import { FC, useState } from 'react'
// import { Typography, Tooltip, Stack } from '@mui/material'
// import { colorPalette, typography } from '@/config'
// import { ReactComponent as UploadIcon } from '@/../public/icons/upload.svg'
// import { ReactComponent as TickIcon } from '@/../public/icons/tick.svg'
// import ImageUploader from '../ImageUploader'

// interface ImageEditorProps {
//    variant_idx: number
//    productId?: string
//    productImgs?: string[]
//    multipleSelect?: boolean
// }

// const ImageEditor: FC<ImageEditorProps> = ({
//    productId,
//    variant_idx,
//    productImgs,
//    multipleSelect = false,
// }) => {
//    const [openUploader, setOpenUploader] = useState<boolean>(false)
//    const { toUploadImages, mediaLoading } = useAppSelector(selectMedia)

//    const curImageStorage = toUploadImages.find(
//       (image) => image.variant_idx === variant_idx
//    )

//    return (
//       <>
//          <ImageUploader open={openUploader} setOpen={setOpenUploader} />
//          <PageContent>
//             <PageTitle
//                type='content'
//                title={t('blockTitle.mediaGallery', { ns: 'common' })}
//                otherContent={
//                   <Stack direction='row' alignItems='center'>
//                      {!mediaLoading &&
//                         !!toUploadImages &&
//                         variant_idx > -1 &&
//                         curImageStorage && (
//                            <Typography
//                               className={typography.pc.helpSemi}
//                               color={colorPalette.lightGrey}
//                               textTransform='none'
//                               sx={{ marginRight: '8px' }}
//                            >
//                               {curImageStorage.image_ids.length}{' '}
//                               {t('imageGallery.itemSelected')}
//                            </Typography>
//                         )}
//                      {!mediaLoading &&
//                         !!productId &&
//                         variant_idx > -1 &&
//                         !!toUploadImages &&
//                         curImageStorage &&
//                         curImageStorage.image_ids.length > 0 && (
//                            <Tooltip
//                               title={t('tooltip.media.save')}
//                               placement='bottom'
//                            >
//                               <IconButton
//                                  src={TickIcon}
//                                  variant='contained'
//                                  customSize='md'
//                                  iconColor={colorPalette.white}
//                                  // onClick={() => handleSaved()}
//                                  sx={{ marginRight: '8px' }}
//                               />
//                            </Tooltip>
//                         )}
//                      <Tooltip
//                         title={t('tooltip.media.upload')}
//                         placement='bottom'
//                      >
//                         <IconButton
//                            src={UploadIcon}
//                            variant='outlined'
//                            customSize='md'
//                            iconColor={colorPalette.primary}
//                            onClick={() => setOpenUploader(true)}
//                         />
//                      </Tooltip>
//                   </Stack>
//                }
//             />
//             <ImageGallery
//                initialImages={productImgs}
//                variant_idx={variant_idx}
//                multipleSelect={multipleSelect}
//                selector
//                cols={4}
//             />
//          </PageContent>
//       </>
//    )
// }

// export default ImageEditor
