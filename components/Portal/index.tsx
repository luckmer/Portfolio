'use client'
import { ReactNode, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({ children }: { children: ReactNode }) => {
  const [mount, setMount] = useState(false)

  useEffect(() => {
    //eslint-disable-next-line
    setMount(true)
  }, [])

  return mount ? createPortal(children, document.body) : null
}

export default Portal
