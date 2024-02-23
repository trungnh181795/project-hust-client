/* Libs */
import { FC, ReactNode } from 'react'
import Icon from '@/components/base/Icon'
import { DrawerHeader } from '@/components/elastic'
import { colorPalette } from '@/config'
import { MainBox, ContentContainer, ToggleMenuButton } from './styles'
import { NavArrowLeftIcon, NavArrowRightIcon } from '@/components/icons'

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
          <Icon
            type="fill"
            src={open ? NavArrowLeftIcon : NavArrowRightIcon}
            color={colorPalette.white}
          />
        </ToggleMenuButton>
      </ContentContainer>
    </MainBox>
  )
}

export default Content
