'use client'
import { INNER_SPEED, OUTER_SPEED } from '@static/index'
import { useEffect, useRef } from 'react'

const Cursor = () => {
  const outerRef = useRef<HTMLDivElement>(null)
  const innerRef = useRef<HTMLDivElement>(null)

  const target = useRef({ x: 0, y: 0 })
  const outerPos = useRef({ x: 0, y: 0 })
  const innerPos = useRef({ x: 0, y: 0 })
  const rafId = useRef<number>(0)

  useEffect(() => {
    const setFromEvent = (e: MouseEvent) => {
      target.current.x = e.clientX
      target.current.y = e.clientY
    }

    document.addEventListener('mousemove', setFromEvent)

    const animate = () => {
      const outer = outerRef.current
      const inner = innerRef.current

      outerPos.current.x += (target.current.x - outerPos.current.x) * OUTER_SPEED
      outerPos.current.y += (target.current.y - outerPos.current.y) * OUTER_SPEED

      innerPos.current.x += (target.current.x - innerPos.current.x) * INNER_SPEED
      innerPos.current.y += (target.current.y - innerPos.current.y) * INNER_SPEED

      if (outer) {
        outer.style.transform = `translate3d(${outerPos.current.x}px, ${outerPos.current.y}px, 0) translate(-50%, -50%)`
      }
      if (inner) {
        inner.style.transform = `translate3d(${innerPos.current.x}px, ${innerPos.current.y}px, 0) translate(-50%, -50%)`
      }

      rafId.current = requestAnimationFrame(animate)
    }

    rafId.current = requestAnimationFrame(animate)

    return () => {
      document.removeEventListener('mousemove', setFromEvent)
      cancelAnimationFrame(rafId.current)
    }
  }, [])

  return (
    <>
      <div
        ref={outerRef}
        className='hidden min-[901px]:block fixed top-0 border-fg-muted left-0 rounded-full border pointer-events-none z-999  w-48 h-48 transition-[width,height,opacity] duration-300 ease-out'
      />
      <div
        ref={innerRef}
        className='hidden min-[901px]:block fixed border-fg-muted top-0 left-0 rounded-full border pointer-events-none z-999 w-18 h-18 transition-[width,height,opacity] duration-300 ease-out'
      />
    </>
  )
}

export default Cursor
