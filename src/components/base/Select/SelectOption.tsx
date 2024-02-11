import { forwardRef } from 'react'
import { MenuItemProps } from '@mui/material'
import { SelectOption as StyledSelectOption } from './styles'
import { typography } from '@/config'

const styledOption = (Component: typeof StyledSelectOption) => {
   return forwardRef((props: MenuItemProps, ref: any) => {
      return (
         <Component className={typography.pc.s4} ref={ref} {...props}>
            {props.children}
         </Component>
      )
   })
}

const SelectOption = styledOption(StyledSelectOption)

export default SelectOption