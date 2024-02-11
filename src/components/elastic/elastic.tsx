'use client'

import { FC, ReactNode } from 'react'
import Link from 'next/link'
import { styled } from '@mui/system'
import {
  Box,
  Paper,
  Typography,
  Button,
  Grid,
  Badge,
  badgeClasses,
} from '@mui/material'
import { colorPalette, typography } from '@/config'
import { styled as muiStyled } from '@mui/material'
import { InputBase } from '@mui/material'
import { ButtonProps } from '@mui/material'

interface FlexBoxProps {
  column?: boolean
  justify:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit'
  align:
    | 'flex-start'
    | 'flex-end'
    | 'center'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
    | 'initial'
    | 'inherit'
  maxHeight?: boolean
}

interface StyledButtonProps extends ButtonProps {
  width: string
  height: string
  borderRadius: string
  component?: React.ElementType
  defaultActiveStyle?: boolean
  to?: string
}

interface PageContentTitleProps {
  title: string
  type: 'header' | 'content'
  otherContent?: React.ReactNode
  withIcons?: boolean
}

export const DrawerHeader = styled('div')(() => {
  return {
    display: 'flex',
    minHeight: '112px !important',
    cursor: 'pointer',
    alignItems: 'center',
    justifyContent: 'flex-start',
    borderRight: `1px solid ${colorPalette.stroke}`,
    // necessary for content to be below app bar
    // ...theme.mixins.toolbar,
  }
})

export const PageHeader = styled(Box)(() => {
  return {
    width: '100%',
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '16px',
  }
})

export const PageContent = styled(Paper)(() => {
  return {
    widht: '100%',
    height: '100%',
    borderRadius: '16px',
    marginBottom: '16px',
    padding: '16px',
    backgroundColor: colorPalette.white,
    boxShadow: 'none',
  }
})

export const MetaDataBox = styled(Box)(() => ({
  border: `1px solid ${colorPalette.lightGrey}`,
  padding: '24px 16px',
  borderRadius: '16px',
  position: 'relative',
  height: '100%',
}))

export const RemoveMetaDataBtn = styled(Button)(() => ({
  position: 'absolute',
  top: '-12px',
  right: '-12px',
  zIndex: 3,
  padding: '8px',
  borderRadius: '50%',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  minWidth: 0,
}))

export const PageTitle: FC<PageContentTitleProps> = ({
  title,
  type,
  otherContent,
  withIcons = false,
}) => {
  return (
    <Typography
      className={typography.pc[type === 'header' ? 'h6' : 's3']}
      color={colorPalette.dark}
      component="div"
      sx={{
        ...(type === 'content' && {
          paddingBottom: '16px',
          borderBottom: `1px solid ${colorPalette.line}`,
          marginBottom: '16px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }),
        minHeight: withIcons ? '57px' : 0,
      }}
      {...(type === 'content' && { textTransform: 'uppercase' })}
    >
      {title}
      {otherContent}
    </Typography>
  )
}

export const PageWrapper: FC<{ children?: ReactNode }> = ({ children }) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', padding: '20px' }}>
      {children}
    </Box>
  )
}

export const MainGrid = muiStyled(Grid)`
  height: 100vh;
`

export const PaperDiv = muiStyled('div')`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

export const StyledLink = muiStyled(Link)`
  text-decoration: none;
  color: #000000;
`

export const FlexBox = muiStyled('div')<FlexBoxProps>`
  display: flex;
  width: 100%;
  height: ${(props) => (props.maxHeight ? '100%' : 'auto')};
  flex-direction: ${(props) => (props.column ? 'column' : 'row')};
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`

export const MainLogo = muiStyled('img')`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 20px;
`

export const StyledButton = muiStyled(Button)<StyledButtonProps>(
  ({ theme, width, height, borderRadius }) => ({
    width: width,
    height: height,
    borderRadius: borderRadius,
  })
)

export const StyledPaper = muiStyled(Paper)<{ borderRadius: string }>(
  ({ theme, borderRadius }) => ({
    borderRadius: borderRadius,
    backgroundColor: theme.palette.background.default,
    boxShadow: '0px 8px 32px #8F95B226',
    height: '100%',
  })
)

export const StyledInput = muiStyled(InputBase)(({ theme }) => ({
  borderRadius: '8px',
  fontSize: '0.875rem',
  border: '1px solid #E6E8F0',
  width: '260px',
  height: '38px',
  padding: '11px 16px',
  marginLeft: '30px',
  '&:focus-within,:hover': {
    border: `1px solid ${theme.palette.primary.main}`,
  },
  '&::placeholder': {
    color: '#D8DAE5',
  },
}))

export const StyledText = muiStyled('div')(({ theme }) => ({
  fontFamily: "'Nunito', sans-serif",
}))

export const Item = muiStyled(Paper)(({ theme }) => ({
  borderRadius: '24px',
  boxShadow: '0px 8px 32px #8F95B226',
  opacity: '1',
  background: '#FFFFFF 0% 0% no-repeat padding-box',
}))

interface StyledBadgeProps {
  bgColor: string
}

export const StyledBadge = muiStyled(Badge)<StyledBadgeProps>`
box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 10px;
  font-variant: tabular-nums;
  list-style: none;
  font-family: 'SF UI Display 600';
  position: relative;
  display: inline-block;
  line-height: 1;

  & .${badgeClasses.badge} {
    z-index: auto;
    min-width: 16px;
    height: 16px;
    padding: 0 5px;
    color: ${colorPalette.white};
    font-family: 'SF UI Display 600';
    font-size: 10px;
    line-height: 16px;
    white-space: nowrap;
    text-align: center;
    background: ${(props) => props.bgColor};
    border-radius: 10px;
    box-shadow: 0 0 0 1px #fff;
    position: absolute;
    top: 4px;
    right: 13px;
    transform: translate(50%, -50%);
    transform-origin: 100% 0;
  }
`
