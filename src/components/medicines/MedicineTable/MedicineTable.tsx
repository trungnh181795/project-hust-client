import { FC } from 'react'
import Table, {
  FilterType,
  HeadCell,
  TableCellDataType,
  TableRowType,
} from '@/components/common/Table'
import { BinIcon, PenIcon } from '@/components/icons'
import { colorPalette } from '@/config'
import { MedicineData } from '@/types/medicine'

type PatietnsTableProps = {
  medicines: MedicineData[]
}

const headCells: HeadCell[] = [
  {
    isId: true,
    id: 'id',
    numeric: false,
    disablePadding: false,
    filterType: FilterType.TEXT,
    label: 'ID',
  },
  {
    id: 'fullName',
    numeric: false,
    disablePadding: false,
    filterType: FilterType.TEXT,
    label: 'Patient Name',
  },
  {
    id: 'gender',
    numeric: false,
    disablePadding: false,
    filterType: FilterType.OPTION,
    label: 'Gender',
  },
  {
    id: 'phone',
    numeric: false,
    disablePadding: false,
    filterType: FilterType.TEXT,
    label: 'Phone Number',
  },
  {
    id: 'email',
    numeric: false,
    disablePadding: false,
    filterType: FilterType.TEXT,
    label: 'Email',
  },
]

const MedicinesTable: FC<PatietnsTableProps> = ({ medicines }) => {
//   const rows: TableRowType[] = medicines.map((patient) => {
//     return {
//       key: patient.id,
//       cells: [
//         {
//           identifier: 'id',
//           type: TableCellDataType.ID,
//           data: patient.id,
//         },
//         {
//           identifier: 'fullName',
//           type: TableCellDataType.TEXT,
//           data: patient.fullName,
//         },
//         {
//           identifier: 'gender',
//           type: TableCellDataType.TEXT,
//           data: patient.gender || 'Updating',
//         },
//         {
//           identifier: 'phone',
//           type: TableCellDataType.TEXT,
//           data: patient.phone || 'Updating',
//         },
//         {
//           identifier: 'email',
//           type: TableCellDataType.TEXT,
//           data: patient.email,
//         },
//         {
//           identifier: 'action',
//           type: TableCellDataType.ACTION,
//           data: [
//             {
//               icon: {
//                 src: PenIcon,
//                 color: colorPalette.dark,
//                 tooltip: 'Detail',
//               },
//               link: `/doctor/Medicines/${patient.id}`,
//             },
//             {
//               icon: {
//                 src: BinIcon,
//                 color: colorPalette.red.shade_500,
//                 tooltip: 'Delete',
//               },
//               //  handleOnClick: () => handleOnRevoke(patient._id),
//             },
//           ],
//         },
//       ],
//     }
//   })

//   return (
//     <Table
//       initialSort="fullName"
//       initialSearchTermType="id"
//       title={'Medicines List'}
//       headCells={headCells}
//       rows={rows}
//       withAction
//     />
//   )
return <div></div>
}

export default MedicinesTable
