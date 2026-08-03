'use client'

import { revealVariants } from '@framer/reveal'
import { VIEWPORT } from '@static/index'
import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'

export interface IProps {
  children: ReactNode
  className?: string
  delay?: number
}

const Reveal: FC<IProps> = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      className={className}
      custom={delay}
      variants={revealVariants}
      initial='hidden'
      whileInView='visible'
      viewport={VIEWPORT}>
      {children}
    </motion.div>
  )
}

export default Reveal
