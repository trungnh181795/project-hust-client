import {
  TableCell as MuiTableCell,
  TableCellProps as MuiTableCellProps,
  IconButton,
  Tooltip,
} from '@mui/material'
import TableCellText from './TableCellText'
import { TableCellDataType, ActionData, TagColorMap } from './types'
import { colorPalette } from '@/config'
import { MuiColor } from '@/types'
import { TableImage } from './common'
import { ReactNode } from 'react'
import { GetDateReturn, getDate } from '@/helpers/date-helper'
import Link from 'next/link'
import { Tag } from '@/components/base'

interface TableCellProps extends MuiTableCellProps {
  type?: TableCellDataType
  tagColorMap?: TagColorMap[]
  data?: string | number | Date | ActionData[]
  unit?: string
}

const styledTableCell = (Component: typeof MuiTableCell) => {
  return (props: TableCellProps) => {
    const { tagColorMap, unit, children, type, data, sx, align, ...restProps } =
      props

    const getTagsColor = (data: string): MuiColor => {
      if (tagColorMap) {
        const result = tagColorMap.find((item) => item.value === data)

        return result?.color || 'primary'
      }

      return 'primary'
    }

    const renderContent = (type: TableCellDataType) => {
      switch (type) {
        case TableCellDataType.TEXT:
          return <TableCellText>{data as ReactNode}</TableCellText>
        case TableCellDataType.DATE:
          const { day, time } = getDate(data as string) as GetDateReturn

          return (
            <TableCellText sx={{ flexDirection: 'column' }}>
              <strong>{day}</strong>
              {time}
            </TableCellText>
          )
        case TableCellDataType.ACTION:
          const actions = data as unknown as ActionData[]
          return actions.map(({ icon, handleOnClick, link, disabled }, idx) => {
            const btnProps = {
              ...(handleOnClick && { onClick: handleOnClick }),
              ...(link && { component: Link, href: link }),
            }

            return (
              <Tooltip title={icon.tooltip} key={idx}>
                <IconButton
                  sx={{
                    border: `1px solid ${icon.color}`,
                    marginRight: '4px',
                    width: '37px',
                    height: '37px',
                  }}
                  {...btnProps}
                  disabled={disabled}
                >
                  {/* <Icon
                                 type='fill'
                                 src={icon.src}
                                 color={icon.color || colorPalette.grey}
                              /> */}
                </IconButton>
              </Tooltip>
            )
          })
        case TableCellDataType.UNIT:
          return (
            <TableCellText
              component="div"
              textAlign="right"
              display="flex"
              justifyContent="flex-end"
            >
              <strong>{data?.toLocaleString()}</strong>
              <u style={{ marginLeft: '4px' }}>{unit}</u>
            </TableCellText>
          )
        case TableCellDataType.TAG:
          return (
            <Tag
              sx={{ minWidth: '115px', width: '100%' }}
              customSize="sm"
              variant="outlined"
              color={getTagsColor(data as string)}
              label={data as ReactNode}
            />
          )
        // case TableCellDataType.IMAGE:
        //    return (
        //       <TableImage
        //          alt='Image coming soon'
        //          src={`${baseURL}/images/${data}`}
        //       />
        //    )
        default:
          return null
      }
    }

    return (
      <Component
        align={align ? align : 'left'}
        sx={{
          padding: '15px',
          borderbottom: `1px solid ${colorPalette.stroke}`,
          minWidth: type === TableCellDataType.ACTION ? '150px' : 0,
          ...sx,
        }}
        {...restProps}
      >
        {children}
        {type && renderContent(type)}
      </Component>
    )
  }
}

const TableCell = styledTableCell(MuiTableCell)

export default TableCell
