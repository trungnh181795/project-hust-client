// import { FC, useState, useEffect, useMemo, memo, useCallback } from 'react'
// import { Typography } from '@mui/material'
// import { useParams } from 'react-router-dom'
// import Icon from '../../base/Icon'
// import { Image, ActionIcon, ImageList, ImageListItem } from './styles'
// import { ReactComponent as DeleteIcon } from '@/../public/icons/bin.svg'
// import { colorPalette, typography } from '@/config'
// import PopupNoti from '../PopupNoti'
// import {
//    updateProductImages,
//    selectMedia,
//    getAllImages,
//    useAppDispatch,
//    useAppSelector,
//    addImgToPending,
//    deleteImage,
//    resetPendingImgs,
//    selectFetch,
// } from '../../redux'
// import { CircleLoading } from '../Loading'
// import { baseURL } from '../../hooks/use-fetch-handlers'
// import { warningMsg } from '../../schemas'
// import { useTranslation } from 'react-i18next'
// import _ from 'lodash'

// interface ImageToShow {
//    id: string
//    selected: boolean
// }

// interface ImageGalleryProps {
//    variant_idx: number
//    selector?: boolean
//    cols?: number
//    gap?: number
//    rowHeight?: number
//    initialImages?: string[]
//    multipleSelect?: boolean
// }

// const ImageGallery: FC<ImageGalleryProps> = memo(
//    ({
//       selector = false,
//       variant_idx,
//       cols,
//       gap,
//       rowHeight,
//       initialImages,
//       multipleSelect = false,
//    }) => {
//       const dispatch = useAppDispatch()
//       const { productId } = useParams()
//       const { images, mediaLoading } = useAppSelector(selectMedia)
//       const { uploading } = useAppSelector(selectFetch)
//       const { t } = useTranslation('components')
//       console.log(`initta ${variant_idx}`, initialImages)

//       const [selectedImg, setSelectedImg] = useState<string | null>(null)
//       const [imagesToShow, setImagesToShow] = useState<ImageToShow[]>([])
//       const [openAlert, setOpenAlert] = useState<boolean>(false)

//       const handleOnSelected = (imgId: string) => {
//          setImagesToShow((prevImgs) =>
//             prevImgs.map((img) =>
//                img.id === imgId
//                   ? { ...img, selected: !img.selected }
//                   : {
//                        ...img,
//                        selected: multipleSelect
//                           ? img.selected
//                           : img.selected
//                           ? !img.selected
//                           : img.selected,
//                     }
//             )
//          )
//       }

//       const handleOnAction = (image: string | null) => {
//          setSelectedImg(image)
//          setOpenAlert(true)
//       }

//       const handleDeleteImage = useCallback(() => {
//          if (!!initialImages && !!productId) {
//             const newImages = initialImages.filter((img) => img !== selectedImg)
//             dispatch(
//                updateProductImages({
//                   productId,
//                   payload: {
//                      images: newImages,
//                   },
//                })
//             )
//          } else {
//             dispatch(deleteImage(selectedImg as string))
//          }
//       }, [initialImages, productId, selectedImg])

//       useEffect(() => {
//          if (!uploading) {
//             dispatch(getAllImages())
//          }
//       }, [uploading])

//       useEffect(() => {
//          setImagesToShow((prevImages) => {
//             const mappedInitialImages = initialImages
//                ? initialImages.map((img) => ({
//                     id: img,
//                     selected: false,
//                  }))
//                : []
//             const imagesMap = _.groupBy(mappedInitialImages, 'id')

//             return images.map((img) => ({
//                id: img._id,
//                selected: !!imagesMap[img._id],
//             }))
//          })
//       }, [images, initialImages])

//       useEffect(() => {
//          console.log('hiiiiii')
//          dispatch(
//             addImgToPending({
//                variant_idx,
//                image_ids: imagesToShow
//                   .filter((img) => !!img.selected)
//                   .map((img) => img.id),
//             })
//          )
//       }, [imagesToShow, variant_idx])

//       useEffect(() => {
//          return () => {
//             dispatch(resetPendingImgs())
//             setImagesToShow([])
//          }
//       }, [])

//       const renderItem = useMemo(
//          () =>
//             imagesToShow && imagesToShow.length > 0 ? (
//                <ImageList
//                   cols={cols || 2}
//                   rowHeight={rowHeight || 164}
//                   gap={gap || 8}
//                >
//                   {imagesToShow.map((image, idx) => (
//                      <ImageListItem
//                         key={image.id}
//                         className={`gallery-img-${image.id}-img-item`}
//                         imgid={image.id}
//                         selector={selector}
//                         selected={image.selected}
//                         onClick={() => handleOnSelected(image.id)}
//                      >
//                         {!selector && (
//                            <ActionIcon
//                               onClick={() => handleOnAction(image.id)}
//                               className={`gallery-img-${image.id}-action-icon`}
//                            >
//                               <Icon
//                                  type='fill'
//                                  src={DeleteIcon}
//                                  color={colorPalette.white}
//                                  width={14}
//                                  height={14}
//                               />
//                            </ActionIcon>
//                         )}
//                         <Image
//                            alt={idx.toString()}
//                            src={`${baseURL}/images/${image.id}`}
//                         />
//                      </ImageListItem>
//                   ))}
//                </ImageList>
//             ) : (
//                <Typography
//                   className={typography.mb.b2}
//                   color={colorPalette.lightGrey}
//                   component='p'
//                   textAlign='center'
//                   sx={{ maxWidth: '80%' }}
//                >
//                   {t('imageGallery.noImage')}
//                </Typography>
//             ),
//          [imagesToShow, selector]
//       )

//       return (
//          <>
//             <PopupNoti
//                open={openAlert}
//                setOpen={setOpenAlert}
//                message={warningMsg}
//                action={handleDeleteImage}
//             />
//             {mediaLoading ? <CircleLoading /> : renderItem}
//          </>
//       )
//    }
// )

// export default ImageGallery
