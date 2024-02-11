'use client'

import {
   styled,
   TableHead as MuiTableHead,
   Toolbar,
   Box,
   Paper,
   alpha,
   TablePagination as MuiTablePagination,
   TablePaginationBaseProps as MuiTablePaginationProps,
   Avatar,
} from '@mui/material'
import { colorPalette } from '@/config'

type TablePaginationProps = MuiTablePaginationProps & {
   component?: React.ReactNode
}

interface TableToolbarProps {
   selected: boolean
}

export const TableToolbar = styled(Toolbar)<TableToolbarProps>(
   ({ theme, selected }) => ({
      borderRadius: '16px',
      minHeight: '48px !important',
      padding: '0 !important',
      marginBottom: '16px',
      ...(selected && {
         backgroundColor: alpha(
            colorPalette.primary,
            theme.palette.action.activatedOpacity
         ),
      }),
   })
)

export const TableHead = styled(MuiTableHead)(
   () => ({
      backgroundColor: colorPalette.background,
   })
)

export const TablePagination = styled(MuiTablePagination)<TablePaginationProps>(
   () => ({
      backgroundColor: colorPalette.background,
      borderBottom: `1px solid ${colorPalette.stroke}`,
      '& .MuiTablePagination-spacer': {
         display: 'none',
      },
      '& .MuiTablePagination-selectLabel': {
         fontSize: '0.875rem !important',
         lineHeight: '1.25rem !important',
         fontFamily: '"SF UI Display medium" !important',
         color: colorPalette.grey,
      },
      '& .MuiTablePagination-select': {
         paddingTop: '0 !important',
         paddingBottom: '0 !important',
         paddingLeft: '8px !important',
         textAlignLast: 'left !important',
         width: '20px !important',
      },
      '& .MuiTablePagination-selectIcon': {
         left: '20px',
      },
      '& .MuiInputBase-root': {
         fontSize: '0.875rem !important',
         lineHeight: '1.25rem !important',
         fontFamily: '"SF UI Display medium" !important',
         color: colorPalette.grey,
         flex: 1,
         textAlign: 'left',
      },
      '& .MuiTablePagination-displayedRows': {
         fontSize: '0.875rem !important',
         lineHeight: '1.25rem !important',
         fontFamily: '"SF UI Display medium" !important',
         color: colorPalette.grey,
      },
   })
)

export const TableWrapper = styled(Box)`
   width: 100%;
   margin-top: 8px;
`

export const TableBackground = styled(Paper)`
   width: 100%;
   margin-bottom: 2px;
`

export const TableImage = styled(Avatar)(() => ({
   width: '60px',
   height: '60px',
   borderRadius: 0
}))
