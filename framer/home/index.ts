import { Variants } from 'framer-motion'

export const mainVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { delay: 2.1 },
  },
}

export const containerVariants: Variants = {
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

export const childVariants: Variants = {
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
