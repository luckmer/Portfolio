'use client'

import { LENIS_OPTIONS } from '@static/index'
import { scrollToHash } from '@utils/index'
import { ReactLenis, useLenis } from 'lenis/react'
import { usePathname } from 'next/navigation'
import { FC, ReactNode, useEffect, useRef } from 'react'

export interface IProps {
  children: ReactNode
}

const SmoothScroll: FC<IProps> = ({ children }) => {
  const lenis = useLenis()
  const pathname = usePathname()
  const navigated = useRef(false)

  useEffect(() => {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual'
    }
  }, [])

  useEffect(() => {
    if (!lenis) return

    const run = () => {
      const id = navigated.current ? window.location.hash.slice(1) : ''

      if (!id) return lenis.scrollTo(0, { immediate: true, force: true })

      scrollToHash(lenis, id, true)
    }

    run()
    navigated.current = true

    window.addEventListener('hashchange', run)
    return () => window.removeEventListener('hashchange', run)
  }, [lenis, pathname])

  return (
    <ReactLenis root options={LENIS_OPTIONS}>
      {children}
    </ReactLenis>
  )
}

export default SmoothScroll
