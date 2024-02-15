import { StaticImageData } from 'next/image'
import { FC } from 'react'
import { WrapImage } from '@/components/base'

type AvatarProps = {
  src: string | StaticImageData
  alt: string
  width: string
  height: string
}

const Avatar: FC<AvatarProps> = ({ src, alt, width, height }) => {
  return (
    <WrapImage
      src={src}
      alt={alt}
      sx={{ width, height, borderRadius: '50%', overflow: 'hidden' }}
    />
  )
}

export default Avatar
