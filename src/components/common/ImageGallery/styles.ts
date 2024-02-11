'use client'

import {
   styled,
   Box,
   IconButton,
   Avatar,
   ImageList as MuiImageList,
   ImageListItem as MuiImageListItem,
} from '@mui/material'
import React from 'react'
import { colorPalette } from '@/config'

interface ImageItemProps {
   imgid?: string
   selected?: boolean
   selector?: boolean
}

export const ImageList = styled(MuiImageList)(() => ({
   width: '100%',
   padding: '16px',
}))

export const ImageListItem = styled(MuiImageList)<ImageItemProps>(
   ({ imgid, selected, selector = false }) => `
   width: 100%;
   display: flex;
   justify-content: center;
   align-items: center;
   aspect-ratio: 1 / 1;
   position: relative;
   cursor: ${selector && 'pointer'};
   transition: ease-in-out 0.2s;
   border: ${
      imgid
         ? selected && selector
            ? '4px solid' + colorPalette.primary
            : 'none'
         : selector
         ? 'none'
         : '1px dashed' + colorPalette.lightGrey
   };
   &:hover {
      transform: scale(1.05);
      & .gallery-img-${imgid}-action-icon {
         display: block;
      }
   }
`
)

export const PlusIconBtn = styled(IconButton)<{ component: React.ReactNode }>(
   () => ({
      width: '100%',
      height: '100%',
      borderRadius: 0,
   })
)

export const Image = styled(Avatar)(() => ({
   width: '100%',
   height: '100%',
   borderRadius: 0,
}))

export const ActionIcon = styled(IconButton)(() => ({
   position: 'absolute',
   display: 'none',
   top: '8px',
   right: '8px',
   zIndex: 2,
   // display: selected ? 'block' : 'none',
   backgroundColor: colorPalette.red.shade_500,
   '&:hover': {
      backgroundColor: colorPalette.red.shade_800,
   },
}))
