'use client'

import { memo, useEffect, useState, FC, useMemo } from 'react'
import {
  Checkbox,
  Table as MuiTable,
  TableRow,
  TableBody,
  TableContainer,
  Typography,
} from '@mui/material'
import { Order, HeadCell, TableRowType, FilterType, ActionData } from './types'
import { getComparator } from './utils'
import { colorPalette, typography } from '@/config'
import {
  TableWrapper,
  TableBackground,
  EnhancedTableHead,
  EnhancedTableToolbar,
  TableCell,
  TablePagination,
} from '../Table'
import { getNumberWithComma } from '@/helpers/price-helper'

export interface MultipleSelectedIcon {
  src: React.FunctionComponent<any>
  handleOnClick: () => void
  tooltip: string
}

interface TableProps {
  title: string
  headCells: HeadCell[]
  rows: TableRowType[]
  initialSort: string
  initialSearchTermType: string
  withAction?: boolean
  pageNum?: number
  pageSize?: number
  disableMultiSelected?: boolean
  multipleSelectedIcons?: MultipleSelectedIcon[]
  withToolbar?: boolean
  onPageSizeChange?: (pageSize: number) => void
  onPageNumChange?: (pageNum: number) => void
  onMultipleDelete?: () => void
  onSelected?: (rows: TableRowType[], selectedRows: string[]) => void
}

export interface CustomTableProps {
  showActions?: boolean
  disableMultipleSelect?: boolean
  withToolbar?: boolean
  actions?: (id: string) => ActionData[]
  onSelected?: (rows: TableRowType[], selectedRows: string[]) => void
}

export interface SearchTermType {
  label: string
  value: string
}

const Table: FC<TableProps> = ({
  title,
  rows,
  headCells,
  initialSort,
  withAction = false,
  withToolbar = true,
  initialSearchTermType,
  pageNum,
  pageSize,
  disableMultiSelected = false,
  multipleSelectedIcons,
  onPageNumChange,
  onPageSizeChange,
  onMultipleDelete,
  onSelected,
}) => {
  const [order, setOrder] = useState<Order>('asc')
  const [orderBy, setOrderBy] = useState<string>(initialSort)
  const [selected, setSelected] = useState<readonly string[]>([])
  const [page, setPage] = useState(0)
  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [rowsToShow, setRowsToShow] = useState(rows)
  const [searchTermType, setSearchTermType] = useState<string>('id')

  const searchTermTypes = useMemo(
    () =>
      headCells
        .filter(({ filterType }) => filterType === FilterType.TEXT)
        .map(({ id, label }) => ({
          value: id,
          label,
        })),
    [headCells]
  )

  const handleRequestSort = (
    event: React.MouseEvent<unknown>,
    property: string
  ) => {
    const isAsc = orderBy === property && order === 'asc'
    setOrder(isAsc ? 'desc' : 'asc')
    setOrderBy(property)
  }

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = rows!.map((n) => n.key)
      setSelected(newSelected)

      if (onSelected) {
        onSelected(rows, newSelected)
      }

      return
    }
    setSelected([])
  }

  const handleSearch = (searchTerm: string) => {
    setRowsToShow(
      searchTerm
        ? rows.filter((row) => {
            const targetCell = row.cells.find(
              (cell) => cell.identifier === searchTermType
            )
            return String(targetCell?.data).includes(searchTerm.toLowerCase())
          })
        : rows
    )
  }

  const handleCheckboxChange = (
    event: React.ChangeEvent<unknown>,
    key: string
  ) => {
    const selectedIndex = selected.indexOf(key)
    let newSelected: string[] = []

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, key)
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1))
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1))
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      )
    }

    setSelected(newSelected)
    if (onSelected) {
      onSelected(rows, newSelected)
    }
  }

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newPageSize = parseInt(event.target.value, 10)
    setRowsPerPage(newPageSize)
    setPage(0)
  }

  const isSelected = (key: string) => selected.indexOf(key) !== -1

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const handleOnMultipleDelete = () => {
    if (onMultipleDelete) {
      onMultipleDelete()
    }
  }

  return (
    <TableWrapper>
      <TableBackground elevation={0}>
        {withToolbar && (
          <EnhancedTableToolbar
            title={title}
            searchTermType={searchTermType}
            numSelected={selected.length}
            initialSearchTermType={initialSearchTermType}
            searchTermTypes={searchTermTypes}
            setSearchTermType={setSearchTermType}
            onSearch={handleSearch}
            onMultipleDelete={handleOnMultipleDelete}
            multipleSelectedIcons={multipleSelectedIcons}
          />
        )}
        <TableContainer>
          <MuiTable
            sx={{ minWidth: 750 }}
            aria-labelledby="Table"
            size="medium"
          >
            <EnhancedTableHead
              headCells={headCells}
              disableMultiSelected={disableMultiSelected}
              numSelected={selected.length}
              order={order}
              orderBy={orderBy as string}
              onSelectAllClick={handleSelectAllClick}
              onRequestSort={handleRequestSort}
              rowCount={rows.length}
              withAction={withAction}
            />
            <TableBody>
              {/* if you don't need to support IE11, you can replace the `stableSort` call with:
                rows.sort(getComparator(order, orderBy)).slice() */}
              {rowsToShow.length > 0 ? (
                rowsToShow
                  .sort(getComparator(order, orderBy))
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row, index) => {
                    const isItemSelected = isSelected(row.key as string)
                    const labelId = `enhanced-table-checkbox-${index}`
                    return (
                      <TableRow
                        hover
                        role="checkbox"
                        aria-checked={isItemSelected}
                        tabIndex={-1}
                        key={index}
                        selected={isItemSelected}
                      >
                        {row.cells.map((cell, idx) => {
                          return cell.type === 'id' ? (
                            <TableCell
                              key={idx}
                              type={cell.type}
                              padding="checkbox"
                            >
                              <Checkbox
                                sx={{ padding: 0 }}
                                color="primary"
                                checked={isItemSelected}
                                disabled={
                                  disableMultiSelected &&
                                  selected.length > 0 &&
                                  !isItemSelected
                                }
                                inputProps={{
                                  'aria-labelledby': labelId,
                                }}
                                onChange={(event) =>
                                  handleCheckboxChange(event, row.key as string)
                                }
                              />
                            </TableCell>
                          ) : (
                            <TableCell
                              key={cell.identifier}
                              component="th"
                              id={labelId}
                              scope="row"
                              padding="none"
                              data={
                                cell.unit
                                  ? getNumberWithComma(cell?.data as number)
                                  : (cell?.data as any)
                              }
                              type={cell.type}
                              tagColorMap={cell.tagColorMap}
                              unit={cell.unit}
                              align={cell.unit ? 'right' : 'left'}
                            />
                          )
                        })}
                      </TableRow>
                    )
                  })
              ) : (
                <TableRow>
                  <TableCell colSpan={12}>
                    <Typography
                      className={typography.pc.descReg}
                      color={colorPalette.dark}
                      textAlign="center"
                      sx={{ padding: '16px 0' }}
                    >
                      No result found
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
              {emptyRows > 0 && (
                <TableRow
                  style={{
                    height: 53 * emptyRows,
                  }}
                >
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </MuiTable>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[5, 10, 25]}
          component="div"
          count={rows.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
          showFirstButton
          showLastButton
        />
      </TableBackground>
    </TableWrapper>
  )
}

export default memo(Table)
