import { DELAY_CHILDREN, DURATION, EASE, STAGGER } from '@static/index'
import { Variants } from 'framer-motion'

const ITEMS = 5

export const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: STAGGER, delayChildren: DELAY_CHILDREN } },
}

export const item: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
}

export const contact: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: DURATION,
      ease: EASE,
      delay: DELAY_CHILDREN + STAGGER * (ITEMS - 1),
    },
  },
}
export const containerVariants: Variants = {
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
