import { useEffect, useState } from 'react'

const useLocation = () => {
  const [location, setLocation] = useState<string>('')

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setLocation(window.location.href)
    }
  }, [])
  return location
}

export default useLocation
