'use client'
import Portal from '@components/Portal'
import clsx from 'clsx'
import { useState } from 'react'
import HeaderContext from './HeaderContext'
import HeaderMenu from './HeaderMenu'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <nav className='fixed top-0 inset-x-0 z-98 border-b border-line-800 bg-ink-950/70 backdrop-blur-md'>
      <HeaderContext
        open={open}
        onClickCloseMenu={() => {
          setOpen(false)
        }}
        onClick={() => {
          setOpen((prev) => !prev)
        }}
      />
      <Portal>
        <div
          className={clsx(
            'fixed inset-0 h-screen bg-ink-950 transition-opacity duration-300 ease-out ',
            open ? 'opacity-100 z-97' : 'opacity-0 pointer-events-none',
          )}>
          <HeaderMenu
            isOpen={open}
            onClickClose={() => {
              setOpen(false)
            }}
          />
        </div>
      </Portal>
    </nav>
  )
}

export default Header
