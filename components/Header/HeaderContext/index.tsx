'use client'
import Button from '@components/Button'
import HashLink from '@components/HashLink'
import { PixelMark } from '@components/pixelMark'
import { Typography } from '@components/Typography'
import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

export interface IProps {
  open: boolean
  onClick: () => void
  onClickCloseMenu: () => void
}

const HeaderContext: FC<IProps> = ({ open, onClick, onClickCloseMenu }) => {
  return (
    <div className='w-full max-w-1360 mx-auto flex flex-row items-center justify-between px-64 h-80'>
      <Link href='/' className=' flex flex-row gap-24 items-center justify-center'>
        <PixelMark />
        <Typography text='h2' bold>
          PG.
        </Typography>
      </Link>
      <div className='flex flex-row gap-34 items-center justify-center'>
        <Button className='flex flex-row items-center justify-center' onClick={onClickCloseMenu}>
          <HashLink
            href='/#contact'
            className='border border-line-800 px-22 py-12 rounded-full hover:border-fg duration-300 max-[900px]:hidden'>
            <Typography text='caption'>{"Let's talk"}</Typography>
          </HashLink>
        </Button>
        <Button className='relative flex h-14 w-30 items-center justify-center' onClick={onClick}>
          <div
            className={clsx(
              'absolute left-0 w-30 h-1.5 bg-white duration-300',
              open ? 'rotate-45' : '-translate-y-4',
            )}
          />
          <div
            className={clsx(
              'absolute left-0 w-30 h-1.5 bg-white duration-300',
              open ? '-rotate-45' : 'translate-y-4',
            )}
          />
        </Button>
      </div>
    </div>
  )
}

export default HeaderContext
