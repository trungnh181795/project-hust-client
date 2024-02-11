'use client'

import { Box, BoxProps } from '@mui/material'
import { FC, FunctionComponent, useEffect, useRef, useState } from 'react'

type IconProps = {
  type: 'fill' | 'stroke'
  color: string
  src: FunctionComponent<any>
  width?: number
  height?: number
  active?: boolean
  activeColor?: string
}

type ExtraIconProps = IconProps & BoxProps

enum HoverEvent {
  MOUSE_ENTER = 'in',
  MOUSE_LEAVE = 'out',
}

const Icon: FC<ExtraIconProps> = (props) => {
  const {
    type,
    src,
    color,
    width,
    height,
    active,
    activeColor,
    sx,
    ...restProps
  } = props
  const SvgIcon = src
  const iconShapes = ['path', 'circle', 'ellipse']

  const iconRef = useRef<SVGSVGElement>()

  const [isHovered, setIsHovered] = useState<boolean>(false)

  const handleOnHover = (event: HoverEvent) => {
    setIsHovered(!!(event === HoverEvent.MOUSE_ENTER))
  }

  useEffect(() => {
    iconShapes.forEach((shape) => {
      const elements = iconRef.current?.querySelectorAll(shape)
      elements?.forEach((element) => {
        element?.setAttribute(type, color)
      })
      if ((active || isHovered) && activeColor) {
        elements?.forEach((element) => {
          element?.setAttribute(type, activeColor)
        })
      }
    })
  }, [type, color, src, active, activeColor, isHovered])

  useEffect(() => {
    const element = iconRef.current?.querySelector('svg')
    if (!!width && !!height) {
      element?.setAttribute('width', `${width}`)
      element?.setAttribute('height', `${height}`)
    }
  }, [width, height])

  return (
    <Box
      sx={{
        width,
        height,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
      ref={iconRef}
      onMouseEnter={() => handleOnHover(HoverEvent.MOUSE_ENTER)}
      onMouseLeave={() => handleOnHover(HoverEvent.MOUSE_LEAVE)}
      {...restProps}
    >
      <SvgIcon />
    </Box>
  )
}

export default Icon
