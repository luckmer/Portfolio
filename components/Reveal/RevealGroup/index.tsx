'use client'

import { containerVariants } from '@framer/reveal'
import { VIEWPORT } from '@static/index'
import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'

export interface IProps {
  children: ReactNode
  className?: string
  delay?: number
}

const RevealGroup: FC<IProps> = ({ children, className, delay = 0 }) => {
  return (
    <motion.div
      className={className}
      custom={delay}
      variants={containerVariants}
      initial='hidden'
      whileInView='visible'
      viewport={VIEWPORT}>
      {children}
    </motion.div>
  )
}

export default RevealGroup
