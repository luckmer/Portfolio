'use client'

import { scrollToHash } from '@utils/index'
import { useLenis } from 'lenis/react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { FC, MouseEvent, ReactNode } from 'react'

export interface IProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

const HashLink: FC<IProps> = ({ href, children, className, onClick }) => {
  const lenis = useLenis()
  const pathname = usePathname()

  const [path, hash] = href.split('#')

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    onClick?.()

    if (!lenis || (path || '/') !== pathname) return

    event.preventDefault()
    window.history.replaceState(null, '', hash ? `#${hash}` : pathname)

    if (!hash) return lenis.scrollTo(0, { force: true })

    scrollToHash(lenis, hash)
  }

  return (
    <Link href={href} scroll={false} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}

export default HashLink
