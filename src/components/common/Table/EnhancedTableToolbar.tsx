'use client'

import React, { FC, useMemo, memo, useState, useEffect } from 'react'
import { Typography, Tooltip, IconButton, Stack } from '@mui/material'
import DeleteIcon from '@mui/icons-material/Delete'
import { TableToolbar } from '.'
import { colorPalette, typography } from '@/config'
import { MultipleSelectedIcon, SearchTermType } from './Table'
import { useDebounce } from '@/hooks/use-debounce'
import { SearchBox } from '@/components/common'
import { Select, SelectOption } from '@/components/base'
// import { ReactComponent as BinIcon } from '@/../public/icons/bin.svg'

interface EnhancedTableToolbarProps {
   numSelected: number
   title: string
   initialSearchTermType: string
   searchTermType: string
   searchTermTypes: SearchTermType[]
   setSearchTermType: (type: string) => void
   onSearch: (searchTerm: string) => void
   onMultipleDelete?: () => void
   multipleSelectedIcons?: MultipleSelectedIcon[]
}

const EnhancedTableToolbar: FC<EnhancedTableToolbarProps> = ({
   numSelected,
   title,
   searchTermTypes,
   searchTermType,
   initialSearchTermType,
   setSearchTermType,
   onSearch,
   onMultipleDelete,
   multipleSelectedIcons,
}) => {
   const [searchTerm, setSearchTerm] = useState<string>('')

   const debouncedSearchTerm = useDebounce(searchTerm, 500)
   const isSelected = useMemo(() => numSelected > 0, [numSelected])

   const handleChange = (
      event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
   ) => {
      setSearchTerm(event.target.value)
   }

   useEffect(() => {
      onSearch(debouncedSearchTerm)
   }, [debouncedSearchTerm, searchTermType])

   return (
      <TableToolbar selected={isSelected}>
         {isSelected ? (
            <Typography
               sx={{ flex: '1 1 100%', ml: 2 }}
               color={colorPalette.dark}
               component='div'
               className={typography.mb.descSemi}
            >
               {numSelected} selected
            </Typography>
         ) : (
            <Typography
               sx={{ flex: '1 1 50%' }}
               color={colorPalette.dark}
               id='table'
               component='div'
               className={typography.mb.h5}
               textTransform='uppercase'
            >
               {title}
            </Typography>
         )}
         {isSelected ? (
            <Stack direction='row' alignItems='center'>
               {onMultipleDelete && (
                  <Tooltip title="Delete">
                     <IconButton
                        sx={{ mr: 2 }}
                        onClick={() => onMultipleDelete()}
                     >
                        {/* <Icon
                           type='fill'
                           color={colorPalette.red.shade_500}
                           src={BinIcon}
                        /> */}
                     </IconButton>
                  </Tooltip>
               )}
               {multipleSelectedIcons &&
                  multipleSelectedIcons.map(
                     ({ src, tooltip, handleOnClick }, idx) => (
                        <Tooltip title={tooltip} key={idx}>
                           <IconButton
                              sx={{ mr: 2 }}
                              onClick={() => handleOnClick()}
                           >
                              {/* <Icon
                                 type='fill'
                                 color={colorPalette.dark}
                                 src={src}
                              /> */}
                           </IconButton>
                        </Tooltip>
                     )
                  )}
            </Stack>
         ) : (
            <Stack direction='row' alignItems='center'>
               <SearchBox
                  width={331}
                  placeholder={'Search'}
                  onChange={(e) => handleChange(e)}
               />
               <Select
                  label={'Search by'}
                  fullWidth
                  placeholder={'Search by'}
                  type='text'
                  defaultValue={initialSearchTermType}
                  onChange={(e) => setSearchTermType(e.target.value as string)}
                  sx={{ minWidth: '240px', marginLeft: '4px' }}
               >
                  {searchTermTypes.map(({ value, label }) => (
                     <SelectOption key={value} value={value}>
                        {label}
                     </SelectOption>
                  ))}
               </Select>
            </Stack>
         )}
      </TableToolbar>
   )
}

export default memo(EnhancedTableToolbar)
