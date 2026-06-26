'use client'
import { Typography } from '@components/Typography'
import { motion, Variants } from 'framer-motion'

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
      className='w-full pointer-events-none h-auto absolute top-0 left-0 pt-[4.9vh] px-[6.4rem] flex flex-row justify-between z-2'>
      <div>
        <Typography text='h1' font='playfair'>
          Luckmer
        </Typography>
      </div>

      <div className='flex flex-row gap-12 items-center justify-center'>
        <div>
          <Typography text='caption'>Contact</Typography>
        </div>
        <div>
          <Typography text='caption'>Resume</Typography>
        </div>
        <button className='flex gap-6 flex-col'>
          <div className='w-24 h-2 bg-accent-active' />
          <div className='w-24 h-2 bg-accent-active' />
          <div className='w-24 h-2 bg-accent-active' />
        </button>
      </div>
    </motion.nav>
  )
}

export default Header
