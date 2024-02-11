/* Libs */
import React, { memo } from 'react'
import { Toolbar, Tooltip, Typography } from '@mui/material'
import { colorPalette } from '@/config'
// import { ReactComponent as BellIcon } from '@/../public/icons/bell.svg'
// import { ReactComponent as MessengerIcon } from '@/../public/icons/messenger.svg'
import { FlexHeader, AppBar, WelcomeBox, HeaderIconBtn, Badge } from './styles'
import { SearchBox } from '@/components/common'
import { Icon } from '@/components/base'

enum Languages {
  EN = 'en-US',
  VI = 'vi-VN',
}

interface HeaderProps {
  open: boolean
}

const Header: React.FC<HeaderProps> = ({ open }) => {
  const getLanguages = (lang: string) => {
    return lang.split('-')[0].toUpperCase()
  }

  return (
    <AppBar
      position="fixed"
      style={{
        backgroundColor: colorPalette.white,
        borderBottom: `1px solid ${colorPalette.stroke}`,
        width: `calc(100% - ${open ? '257px' : '96px'}`,
      }}
      elevation={0}
    >
      <Toolbar sx={{ minHeight: '111px !important' }}>
        <FlexHeader open={open}>
          <WelcomeBox>
            <Typography className="typography-mb-s2" color={colorPalette.grey}>
              Welcome,
            </Typography>
            <Typography className="typography-pc-h5" color={colorPalette.dark}>
              {`User`}
            </Typography>
          </WelcomeBox>
          <SearchBox placeholder="Tìm kiếm" width={240} />
          <HeaderIconBtn>
            <Badge className="typography-mb-desc-semi">2</Badge>
            {/* <Icon
              type="fill"
              src={MessengerIcon}
              color={colorPalette.primary}
            /> */}
          </HeaderIconBtn>
          <HeaderIconBtn>
            <Badge className="typography-mb-desc-semi">2</Badge>
            {/* <Icon type="fill" src={BellIcon} color={colorPalette.primary} /> */}
          </HeaderIconBtn>
          {/* <Tooltip title={t('header.changeLang')}>
                  <Select
                     value={i18n.language}
                     onChange={(e) =>
                        i18n.changeLanguage(e.target.value as string)
                     }
                     sx={{ marginLeft: '16px' }}
                  >
                     {Object.values(Languages).map((lang) => (
                        <SelectOption key={lang} value={lang}>
                           {getLanguages(lang)}
                        </SelectOption>
                     ))}
                  </Select>
               </Tooltip> */}
        </FlexHeader>
      </Toolbar>
    </AppBar>
  )
}

export default memo(Header)
