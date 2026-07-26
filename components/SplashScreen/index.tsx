'use client'
import { Typography } from '@components/Typography'
import { DELAY, HOLD_DURATION } from '@static/index'
import { motion, type Variants } from 'framer-motion'
import { useEffect, useState } from 'react'

const SplashScreen = () => {
  const [phase, setPhase] = useState<'first' | 'second'>('first')

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('second')
    }, 500 + HOLD_DURATION)

    return () => clearTimeout(timer)
  }, [])

  const topContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        delayChildren: DELAY,
        staggerChildren: 0.2,
      },
    },
  }

  const leftContainerVariants: Variants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const childVariants: Variants = {
    hidden: {
      y: '-100%',
      x: '0%',
    },
    visible: {
      y: '0%',
      x: '0%',
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
    exit: (i: number) => ({
      x: '100%',
      transition: {
        duration: 0.5,
        delay: i * 0.1,
        ease: 'easeInOut',
      },
    }),
  }

  return (
    <div className='w-full h-screen absolute left-0 top-0 flex flex-row overflow-hidden  pointer-events-none items-center justify-center z-99'>
      <motion.div
        className='w-full h-screen absolute left-0 top-0 flex flex-row overflow-hidden z-99 pointer-events-none'
        style={{ display: phase === 'first' ? 'flex' : 'none' }}
        variants={topContainerVariants}
        initial='hidden'
        animate='visible'>
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className='h-screen w-full bg-ink-850 pointer-events-auto'
            variants={childVariants}
            custom={index}
          />
        ))}
      </motion.div>
      <motion.div
        className='w-full h-screen absolute left-0 top-0 flex flex-col overflow-hidden z-99 pointer-events-none'
        style={{ display: phase === 'second' ? 'flex' : 'none' }}
        variants={leftContainerVariants}
        initial='visible'
        animate={phase === 'second' ? 'exit' : 'visible'}>
        {[0, 1, 2, 3].map((index) => (
          <motion.div
            key={index}
            className='h-screen w-full bg-ink-850  pointer-events-auto'
            variants={childVariants}
            custom={index}
            initial='visible'
            animate={phase === 'second' ? 'exit' : 'visible'}
          />
        ))}
      </motion.div>
      {phase !== 'second' ? (
        <Typography text='h1' font='playfair'>
          Luckmer
        </Typography>
      ) : null}
    </div>
  )
}

export default SplashScreen
