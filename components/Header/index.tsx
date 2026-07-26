'use client'
import { PixelMark } from '@components/pixelMark'
import { Typography } from '@components/Typography'
import { motion, Variants } from 'framer-motion'
import Link from 'next/link'

const Header = () => {
  const containerVariants: Variants = {
    hidden: {
      y: '-50%',
      x: '0%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      x: '0%',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
        delay: 2.2,
      },
    },
  }

  return (
    <motion.nav
      variants={containerVariants}
      initial='hidden'
      animate='visible'
      className='fixed top-0 inset-x-0 z-99 border-b border-line-800 bg-ink-950/70 backdrop-blur-md'>
      <div className='w-full max-w-1360 mx-auto flex flex-row items-center justify-between px-64 h-80'>
        <Link href='/' className=' flex flex-row gap-24 items-center justify-center'>
          <PixelMark />
          <Typography text='h2' bold>
            PG.
          </Typography>
        </Link>
        <div className='flex flex-row gap-34 items-center justify-center'>
          <div className='border border-line-800 px-22 py-12 rounded-full'>
            <Typography text='caption'>{"Let's talk"}</Typography>
          </div>
          <button className='flex items-center gap-6 flex-col'>
            <div className='w-30 min-h-1.5 bg-white' />
            <div className='w-30 min-h-1.5 bg-white' />
          </button>
        </div>
      </div>
    </motion.nav>
  )
}

export default Header
