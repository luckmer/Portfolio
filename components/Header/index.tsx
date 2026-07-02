'use client'
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
      className='w-full  h-auto fixed top-0 left-0 pt-[4.9vh] px-24 flex flex-row justify-between z-99 mix-blend-difference'>
      <Link href='/'>
        <Typography text='h1' font='playfair' class='text-white'>
          Luckmer
        </Typography>
      </Link>

      <div className='flex flex-row gap-12 items-center justify-center'>
        <div>
          <Typography text='caption' class='text-white'>
            Contact
          </Typography>
        </div>
        <div>
          <Typography text='caption' class='text-white'>
            Resume
          </Typography>
        </div>
        <button className='flex gap-6 flex-col'>
          <div className='w-24 h-2 bg-white' />
          <div className='w-24 h-2 bg-white' />
          <div className='w-24 h-2 bg-white' />
        </button>
      </div>
    </motion.nav>
  )
}

export default Header
