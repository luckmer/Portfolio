import { DELAY_CHILDREN, DURATION, EASE, OFFSET, STAGGER } from '@static/index'
import { Variants } from 'framer-motion'

export const revealVariants: Variants = {
  hidden: { opacity: 0, y: OFFSET },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: DURATION, ease: EASE, delay },
  }),
}

export const containerVariants: Variants = {
  hidden: {},
  visible: (delay: number = 0) => ({
    transition: { staggerChildren: STAGGER, delayChildren: delay + DELAY_CHILDREN },
  }),
}

export const childVariants: Variants = {
  hidden: { opacity: 0, y: OFFSET },
  visible: { opacity: 1, y: 0, transition: { duration: DURATION, ease: EASE } },
}
