'use client'
import { Typography } from '@components/Typography'
import { childVariants, leftContainerVariants, topContainerVariants } from '@framer/splashScreen'
import { SPLASH_EXIT, SPLASH_HOLD } from '@static/index'
import { motion } from 'framer-motion'
import { useLenis } from 'lenis/react'
import { useEffect, useState } from 'react'

const SplashScreen = () => {
  const [phase, setPhase] = useState<'first' | 'second'>('first')
  const lenis = useLenis()

  useEffect(() => {
    const timer = setTimeout(() => {
      setPhase('second')
    }, SPLASH_HOLD)

    return () => clearTimeout(timer)
  }, [])

  useEffect(() => {
    if (!lenis) return

    lenis.stop()
    const unlock = setTimeout(() => lenis.start(), SPLASH_HOLD + SPLASH_EXIT)

    return () => {
      clearTimeout(unlock)
      lenis.start()
    }
  }, [lenis])

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
        <div className='w-full h-full bg-ink-950 flex items-center justify-center'>
          <Typography text='h1'>Luckmer</Typography>
        </div>
      ) : null}
    </div>
  )
}

export default SplashScreen
