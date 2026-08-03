'use client'
import Work from '@pages/Work'
import { useLayoutEffect } from 'react'

const WorkRoot = () => {
  useLayoutEffect(() => {
    window.scrollTo({ behavior: 'instant', top: 0 })
  }, [])

  return <Work />
}

export default WorkRoot
