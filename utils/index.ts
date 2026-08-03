import { HEADER_OFFSET } from '@static/index'
import Lenis from 'lenis'

export const scrollToHash = (lenis: Lenis, id: string, immediate = false) => {
  const target = document.getElementById(id)
  if (!target) return

  lenis.resize()
  lenis.scrollTo(target, { offset: -HEADER_OFFSET, immediate, force: true })
}

export const getTime = () => {
  return new Date().toLocaleString('en-US', {
    timeZone: 'Europe/Warsaw',
    hour: 'numeric',
    minute: '2-digit',
    second: '2-digit',
    hour12: true,
  })
}
