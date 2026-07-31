'use client'
import Home from '@pages/Home'
import { useEffect } from 'react'

const HomeRoot = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return <Home />
}

export default HomeRoot
