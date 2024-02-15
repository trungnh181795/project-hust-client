import { MaybeNull, MuiColor } from "@/types"
export type Order = 'asc' | 'desc'

export enum FilterType {
   TEXT = 'text',
   RANGE = 'range',
   OPTION = 'option',
   DATE = 'date',
   NONE = 'none'
}

export enum TableCellDataType {
   ID = 'id',
   DATE = 'date',
   TEXT = 'text',
   ACTION = 'action',
   TAG = 'tag',
   UNIT = 'unit',
   IMAGE = 'image'
}
export interface HeadCell {
   isId?: boolean
   disablePadding: boolean
   id: string
   label: string
   numeric: boolean
   filterType: FilterType
}

export type ActionData = {
   icon: {
      src: React.FunctionComponent<any>
      color: string,
      tooltip?: string
   }
   link?: string
   disabled?: boolean
   handleOnClick?: <T>(params?: T) => void
}

export type TagColorMap = {
   value: string
   color: MuiColor
}
export interface TableCellType {
   identifier: string
   type: TableCellDataType
   data: MaybeNull<string | number | Date | ActionData[]>
   tagColorMap?: TagColorMap[]
   unit?: string
}

export interface TableRowType {
   key: string
   cells: TableCellType[]
}
