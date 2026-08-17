import { DELAY_CHILDREN, DURATION, EASE, ITEMS, STAGGER } from '@static/index'
import { Variants } from 'framer-motion'

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
