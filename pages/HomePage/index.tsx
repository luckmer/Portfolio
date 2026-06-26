'use client'

import { Typography } from '@components/Typography'
import { motion, Variants } from 'framer-motion'

const Home = () => {
  const mainVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { delay: 2.1 },
    },
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delay: 2.1,
        delayChildren: 2.5,
        staggerChildren: 0.05,
      },
    },
  }

  const childVariants: Variants = {
    hidden: {
      y: '50%',
      opacity: 0,
    },
    visible: {
      y: '0%',
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  }

  return (
    <motion.main
      variants={mainVariants}
      initial='hidden'
      animate='visible'
      className='w-screen h-screen flex flex-col overflow-y-auto'>
      <div className='min-h-screen flex items-center justify-center flex-col relative p-8 gap-120'>
        <div className='flex flex-col items-center justify-center gap-120 h-full'>
          <div className='flex flex-col items-center relative'>
            <div className='absolute bottom-full left-full -translate-x-full translate-y-full w-full h-full rounded-full bg-[radial-gradient(circle_at_40%_35%,rgba(194,84,45,0.13),transparent_70%)] blur-[10px] pointer-events-none' />
            <motion.div
              variants={containerVariants}
              className='flex flex-row flex-wrap items-center justify-between w-full mb-6'>
              {'Piotr'.split('').map((char, i) => (
                <motion.div key={i} variants={childVariants}>
                  <Typography
                    text='h1'
                    class='text-[72px]! leading-72! font-500'
                    font='playfair'
                    uppercase>
                    {char === ' ' ? '\u00A0' : char}
                  </Typography>
                </motion.div>
              ))}
            </motion.div>
            <motion.div
              variants={containerVariants}
              className='flex flex-row flex-wrap items-center justify-between w-full mb-6'>
              {'Goik'.split('').map((char, i) => (
                <motion.div key={i} variants={childVariants}>
                  <Typography
                    text='h1'
                    class='text-[72px]! leading-72! font-500'
                    font='playfair'
                    uppercase>
                    {char === ' ' ? '\u00A0' : char}
                  </Typography>
                </motion.div>
              ))}
            </motion.div>
          </div>

          <div>
            <Typography text='body' font='mono' uppercase class='font-500'>
              Frontend Engineer & Opensource Contributor
            </Typography>
          </div>
        </div>
        <div className='flex flex-col items-center justify-center gap-4 absolute bottom-12'>
          <div className='relative w-[1px] h-24 bg-current/20 overflow-hidden right-1'>
            <div className='absolute top-0 left-0 w-full h-1/2 bg-current rounded-full animate-scroll-line' />
          </div>
          <Typography class='[writing-mode:vertical-rl] uppercase' font='playfair' text='small'>
            Scroll
          </Typography>
        </div>
      </div>
      {Array.from({ length: 5 }).map((_, i) => (
        <div key={i}>dsds dsds ds</div>
      ))}
    </motion.main>
  )
}

export default Home
