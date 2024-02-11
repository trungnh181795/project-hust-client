/* Libs */
import { FC, ReactNode} from 'react'
import Icon from '@/components/base/Icon'
import { DrawerHeader } from '@/components/elastic'
import { colorPalette } from '@/config'
// import { ReactComponent as NavLeftIcon } from '@/../public/icons/nav-left.svg'
// import { ReactComponent as NavRightIcon } from '@/../public/icons/nav-right.svg'
import { MainBox, ContentContainer, ToggleMenuButton } from './styles'

interface ContentProps {
  open: boolean
  onOpen: () => void
  onClose: () => void
  children: ReactNode
}

const Content: FC<ContentProps> = ({ open, onOpen, onClose, children }) => {
  return (
    <MainBox component="main" sx={{ flexGrow: 1, p: 0 }}>
      <DrawerHeader />
      <ContentContainer>
        {children}
        <ToggleMenuButton
          open={open}
          color="inherit"
          aria-label="open drawer"
          onClick={open ? onClose : onOpen}
          edge="start"
        >
          {/* <Icon
            type="fill"
            src={open ? NavLeftIcon : NavRightIcon}
            color={colorPalette.white}
          /> */}
        </ToggleMenuButton>
      </ContentContainer>
    </MainBox>
  )
}

export default Content
