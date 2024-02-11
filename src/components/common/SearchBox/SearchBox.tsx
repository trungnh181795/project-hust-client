import { InputBaseProps } from '@mui/material'
// import { ReactComponent as SearchIcon } from '@/../public/icons/search.svg'
import { Search, SearchIconWrapper, StyledInputBase } from './styles'
import { colorPalette, typography } from '@/config'
import { FC, forwardRef } from 'react'

interface SearchBoxProps extends InputBaseProps {
  width: number
}

const SearchBox: FC<SearchBoxProps> = forwardRef(
  ({ width, ...restProps }, ref: any) => {
    return (
      <Search width={width}>
        <SearchIconWrapper>
          {/* <Icon
               type='fill'
               src={SearchIcon}
               color={colorPalette.lightGrey}
            /> */}
        </SearchIconWrapper>
        <StyledInputBase
          ref={ref}
          className={typography.pc.descReg}
          inputProps={{ 'aria-label': 'search' }}
          {...restProps}
        />
      </Search>
    )
  }
)

export default SearchBox
