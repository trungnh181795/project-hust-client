import { MaybeUndef } from '@/types/common'
import { useState, useEffect } from 'react'

type UseViewportHandler = {
  onScroll?: () => void
  onResize?: () => void
}

type UseViewportReturn = {
  viewport: {
    width: number
    height: number
  }
  currScrollY: number
  scrolled: boolean
  topOffset: number
  scrolledUp: boolean
}

export const useViewport = (
  handler?: MaybeUndef<UseViewportHandler>
): UseViewportReturn => {
  const [viewport, setViewport] = useState({
    width: 0,
    height: 0,
  })
  const [scrolled, setScrolled] = useState<boolean>(false)
  const [topOffset, setTopOffset] = useState<number>(0)
  const [currScrollY, setCurrScrollY] = useState<number>(0)
  const [scrolledUp, setScrolledUp] = useState<boolean>(true)

  useEffect(() => {
    const handleResize = () => {
      setViewport({ width: window.innerWidth, height: window.innerHeight })
      if (handler && handler.onResize) handler?.onResize()
    }

    const handleScroll = () => {
      const curOffset = window.scrollY

      setCurrScrollY((prevScrollY) => {
        setScrolledUp(prevScrollY > curOffset || prevScrollY < 0)

        return curOffset
      })
      const scrollY = document.documentElement.scrollTop
      setTopOffset((prevOffset) => {
        setScrolledUp(scrollY < prevOffset)
        return scrollY
      })
      setScrolled(scrollY > 0)
      if (handler && handler.onScroll) handler?.onScroll()
    }

    if (typeof window !== 'undefined' && typeof document !== 'undefined') {
      handleResize()
      window.addEventListener('resize', handleResize)
      window.addEventListener('scroll', handleScroll)
    }

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return { viewport, scrolled, topOffset, scrolledUp, currScrollY }
}
