import { DELAY } from '@static/index'
import { Variants } from 'framer-motion'

export const topContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: DELAY,
      staggerChildren: 0.2,
    },
  },
}

export const leftContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
}

export const childVariants: Variants = {
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
