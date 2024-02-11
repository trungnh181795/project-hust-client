import { FC } from 'react'
import {
  TableRow,
  Checkbox,
  TableSortLabel,
  Typography,
  Box,
} from '@mui/material'
import { visuallyHidden } from '@mui/utils'
import { TableHead } from './common'
import TableCell from './TableCell'
import { Order, HeadCell, FilterType } from './types'
import { colorPalette, typography } from '@/config'

interface EnhancedTableHeadProps {
  numSelected: number
  onRequestSort: (event: React.MouseEvent<unknown>, property: string) => void
  onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void
  order: Order
  orderBy: string
  rowCount: number
  headCells: HeadCell[]
  withAction?: boolean
  disableMultiSelected: boolean
}

const EnhancedTableHead: FC<EnhancedTableHeadProps> = ({
  order,
  orderBy,
  numSelected,
  rowCount,
  headCells,
  disableMultiSelected,
  withAction = false,
  onSelectAllClick,
  onRequestSort,
}) => {
  const createSortHandler =
    (property: string) => (event: React.MouseEvent<unknown>) => {
      onRequestSort(event, property)
    }

  return (
    <TableHead>
      <TableRow>
        {headCells.map((headCell, idx) =>
          headCell.isId && !disableMultiSelected ? (
            <TableCell padding="checkbox" key={idx}>
              <Checkbox
                sx={{ padding: 0 }}
                color="primary"
                indeterminate={numSelected > 0 && numSelected < rowCount}
                checked={rowCount > 0 && numSelected === rowCount}
                onChange={onSelectAllClick}
                inputProps={{
                  'aria-label': 'Select all',
                }}
              />
            </TableCell>
          ) : (
            <TableCell
              key={headCell.id as string}
              padding={headCell.disablePadding ? 'none' : 'normal'}
              sortDirection={orderBy === headCell.id ? order : false}
              align={
                headCell.filterType === FilterType.RANGE ? 'right' : 'left'
              }
            >
              <TableSortLabel
                active={orderBy === headCell.id}
                direction={orderBy === headCell.id ? order : 'asc'}
                onClick={createSortHandler(headCell.id)}
              >
                <Typography
                  className={typography.pc.s4}
                  component="div"
                  color={colorPalette.dark}
                >
                  {headCell.label}
                </Typography>
                {orderBy === headCell.id ? (
                  <Box component="span" sx={visuallyHidden}>
                    {order === 'desc'
                      ? 'sorted descending'
                      : 'sorted ascending'}
                  </Box>
                ) : null}
              </TableSortLabel>
            </TableCell>
          )
        )}
        {withAction && <TableCell align="left">{'Actions'}</TableCell>}
      </TableRow>
    </TableHead>
  )
}

export default EnhancedTableHead
