'use client'

import { childVariants } from '@framer/reveal'
import { motion } from 'framer-motion'
import { FC, ReactNode } from 'react'

export interface IProps {
  children: ReactNode
  className?: string
}

const RevealItem: FC<IProps> = ({ children, className }) => {
  return (
    <motion.div className={className} variants={childVariants}>
      {children}
    </motion.div>
  )
}

export default RevealItem
