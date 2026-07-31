'use client'

import Button from '@components/Button'
import { Typography } from '@components/Typography'
import { contact, container, item } from '@framer/header'
import { motion } from 'framer-motion'
import Link from 'next/link'
import { FC, useMemo } from 'react'

interface IProps {
  onClickClose: () => void
  isOpen: boolean
}

const ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Work', href: '/work' },
  { label: 'About', href: '/#about' },
  { label: 'Stack', href: '/#stack' },
  { label: 'Contact', href: '/#contact' },
]

const HeaderMenu: FC<IProps> = ({ isOpen, onClickClose }) => {
  const animate = useMemo(() => (isOpen ? 'show' : 'hidden'), [isOpen])

  return (
    <div className='pt-80 px-64 pb-64 h-full w-full flex items-end max-w-1360 mx-auto justify-between'>
      <motion.div
        className='flex flex-col gap-8'
        variants={container}
        initial='hidden'
        animate={animate}>
        {ITEMS.map(({ label, href }) => (
          <motion.div key={label} variants={item}>
            <Button onClick={() => onClickClose()}>
              <Link
                href={href}
                className='inline-block transition-transform duration-300 hover:translate-x-25 group'>
                <Typography
                  text='custom'
                  class='text-[clamp(10px,5.2cqw,80px)] font-semibold leading-[0.96] tracking-[-0.035em] text-nowrap text-fg group-hover:text-accent duration-150'>
                  {label}
                </Typography>
              </Link>
            </Button>
          </motion.div>
        ))}
      </motion.div>
      <motion.div
        className='flex flex-col items-end justify-end'
        variants={contact}
        initial='hidden'
        animate={animate}>
        <div className='pb-16'>
          <Typography uppercase text='small' color='muted' class='tracking-[0.22em]!'>
            get in touch
          </Typography>
        </div>
        <div className='pb-16'>
          <Link href='mailto:piotrsebastiangoik@gmail.com' className='group cursor-pointer w-fit'>
            <Typography text='body'>piotrsebastiangoik@gmail.com</Typography>
          </Link>
        </div>
        <div className='flex items-end flex-col gap-8'>
          <Link
            href='https://github.com/luckmer'
            rel='noreferrer'
            className='group cursor-pointer w-fit'>
            <Typography text='body' color='muted' class='group-hover:text-fg!'>
              GitHub ↗
            </Typography>
          </Link>
          <Link href='https://linkedin.com/in/piotr-goik' className='group cursor-pointer w-fit'>
            <Typography text='body' color='muted' class='group-hover:text-fg!'>
              LinkedIn ↗
            </Typography>
          </Link>
        </div>
      </motion.div>
    </div>
  )
}

export default HeaderMenu
