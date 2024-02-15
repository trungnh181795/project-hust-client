import { Box, BoxProps } from '@mui/material'
import Image, { StaticImageData } from 'next/image'
import { forwardRef } from 'react'

type WrapImageProps = BoxProps & {
  src: string | StaticImageData
  alt: string
}

const WrapImage = forwardRef(
  ({ src, alt, sx, ...props }: WrapImageProps, ref: any) => {
    return (
      <Box ref={ref} sx={{ position: 'relative', ...sx }} {...props}>
        <Image src={src} alt={alt} quality={100} fill />
      </Box>
    )
  }
)

export default WrapImage
