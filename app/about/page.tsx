'use client'
import About from '@pages/About'
import { useLayoutEffect } from 'react'

const AboutRoot = () => {
  useLayoutEffect(() => {
    window.scrollTo({ behavior: 'instant', top: 0 })
  }, [])

  return <About />
}

export default AboutRoot
