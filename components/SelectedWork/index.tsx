'use client'
import { Typography } from '@components/Typography'
import { STEPS } from '@static/data'
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

const SelectedWork = () => {
  const [activeId, setActiveId] = useState<string | null>(null)

  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springX = useSpring(mouseX, { stiffness: 120, damping: 20, mass: 0.5 })
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20, mass: 0.5 })

  const handleMouseMove = (e: React.MouseEvent) => {
    mouseX.set(e.clientX)
    mouseY.set(e.clientY)
  }

  return (
    <section className='border-t border-border '>
      <div className=' justify-between px-48 py-24 flex items-center gap-6 md:gap-10'>
        <Typography uppercase font='jetbrains' text='small'>
          [W] Selected Work
        </Typography>
        <Typography uppercase font='jetbrains' text='small'>
          [{STEPS.length}] Projects
        </Typography>
      </div>
      <div className='border-t border-border'>
        {STEPS.map((step) => (
          <Link
            key={step.id}
            href={`/work/${step.id}`}
            className='group block relative border-b border-border hover:bg-white transition-colors duration-500 text-left w-full'
            onMouseMove={handleMouseMove}
            onMouseEnter={() => setActiveId(step.id)}
            onMouseLeave={() => setActiveId(null)}>
            <div className='px-48 py-56 flex items-center gap-6 md:gap-10'>
              <span className='font-mono text-xs text-muted-foreground shrink-0 self-start pt-2'>
                {step.id}
              </span>
              <div className='min-w-0'>
                <h2 className='font-extrabold text-4xl md:text-7xl leading-100 tracking-tighter truncate translate-x-0   group-hover:translate-x-20 transition-transform duration-500 ease-out'>
                  {step.title}
                </h2>
                <div className='flex flex-wrap gap-2 mt-3'>
                  {step.tags.map((t) => (
                    <div className='border border-border px-2 py-0.5' key={t}>
                      <Typography font='mono' text='small' uppercase>
                        {t}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <AnimatePresence>
        {activeId && (
          <motion.div
            className='pointer-events-none fixed z-50 -translate-x-1/2 -translate-y-1/2 
               w-500 aspect-auto overflow-hidden rounded-lg shadow-2xl'
            style={{ left: springX, top: springY }}
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.92 }}
            transition={{ duration: 0.25, ease: 'easeOut', delay: 0.08 }}>
            {STEPS.filter((s) => s.id === activeId && s.image).map((step) => (
              <Image
                key={step.id}
                src={step.image ?? ''}
                alt={step.title}
                width={500}
                height={281}
                className='w-full h-full object-cover'
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <div className='py-128 px-0'>
        <button className='relative mx-auto flex h-256 w-256 items-center justify-center'>
          <motion.svg
            viewBox='0 0 200 200'
            className='absolute inset-0 h-full w-full'
            animate={{ rotate: 360 }}
            transition={{ duration: 12, repeat: Infinity, ease: 'linear' }}>
            <defs>
              <path
                id='circlePath'
                d='M 100, 100 m -80, 0 a 80,80 0 1,1 160,0 a 80,80 0 1,1 -160,0'
              />
            </defs>
            <text className='fill-current font-mono text-[13px] uppercase tracking-[0.25em]'>
              <textPath href='#circlePath' startOffset='0%'>
                View all work • View all work •
              </textPath>
            </text>
          </motion.svg>
          <div className='group relative z-10 flex h-144 w-144 items-center justify-center rounded-full bg-orange transition-transform duration-500 ease-out hover:scale-90'>
            <svg
              viewBox='0 0 24 24'
              className='h-40 w-40 text-text-inverse transition-transform duration-500 ease-out group-hover:rotate-45'
              fill='none'
              stroke='currentColor'
              strokeWidth={2}
              strokeLinecap='round'
              strokeLinejoin='round'>
              <path d='M7 17L17 7' />
              <path d='M7 7h10v10' />
            </svg>
          </div>
        </button>
      </div>
    </section>
  )
}

export default SelectedWork
