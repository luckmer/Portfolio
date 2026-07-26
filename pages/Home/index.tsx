'use client'

import About from '@components/About'
import Button from '@components/Button'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import SelectedWork from '@components/SelectedWork'
import TechStack from '@components/Stack'
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
      className='w-full flex flex-col select-none'>
      <div className='w-full px-60 max-w-1360 mx-auto border-r border-l border-line-800'>
        <div className='pt-190 pb-90 px-8 border-b border-line-800 '>
          <motion.div
            variants={containerVariants}
            initial='hidden'
            animate='visible'
            className='mb-40 flex flex-row gap-8 overflow-hidden'>
            <motion.div variants={childVariants}>
              <Typography
                text='caption'
                uppercase
                class='tracking-[0.22em] text-[13px]! font-light'>
                {"Hi!, I'm"}
              </Typography>
            </motion.div>
            <motion.div variants={childVariants}>
              <Typography
                text='caption'
                uppercase
                color='accent'
                class='tracking-[0.22em] text-[13px]! font-light'>
                Piotr Goik
              </Typography>
            </motion.div>
          </motion.div>
          <div className='flex flex-col  border-b border-line-800'>
            <Typography
              text='custom'
              class='text-[clamp(40px,10.2cqw,116px)] font-semibold leading-[0.96] tracking-[-0.035em] text-nowrap text-fg mb-56'>
              Frontend Engineer
              <br />& <span className='text-accent'>Open-source</span>
              <br />
              Contributor
            </Typography>
          </div>
          <div className='pt-70 w-full flex items-center justify-between'>
            <div className='w-full flex flex-row gap-16 max-w-440 justify-between items-center'>
              <div className='flex flex-row gap-16'>
                <Button className='py-16 px-30 bg-fg'>
                  <Typography text='caption' color={950}>
                    View Projects →
                  </Typography>
                </Button>
                <Button className='py-16 px-30 border border-line-800'>
                  <Typography text='caption'>Contact →</Typography>
                </Button>
              </div>
            </div>
            <div className='flex items-center gap-12'>
              <div className='p-4 bg-line-800 flex items-center rounded-full'>
                <div className='min-w-8 min-h-8 bg-green-300 rounded-full'></div>
              </div>
              <Typography text='small'>Available for work.</Typography>
            </div>
          </div>
        </div>
        <About />
        <SelectedWork />
        <TechStack />
        <Contact />
      </div>
      <Footer />
    </motion.main>
  )
}

export default Home
