'use client'

import { Typography } from '@components/Typography'
import { getTime } from '@utils/index'
import { useEffect, useState } from 'react'

const Contact = () => {
  const [localTime, setLocalTime] = useState<string | null>(null)

  useEffect(() => {
    const frame = requestAnimationFrame(() => {
      setLocalTime(getTime())
    })

    const interval = setInterval(() => {
      setLocalTime(getTime())
    }, 1000)

    return () => {
      cancelAnimationFrame(frame)
      clearInterval(interval)
    }
  }, [])

  return (
    <footer className='py-128 px-48 bg-background-dark-black'>
      <div className='max-w-1920 mx-auto'>
        <div className=' justify-between flex items-center gap-6 md:gap-10 pb-64'>
          <Typography uppercase font='jetbrains' text='small' color='white'>
            [C] Contact
          </Typography>
        </div>

        <div className='mt-64 grid pt-40 grid-cols-1 md:grid-cols-2 gap-128 '>
          <div>
            <Typography text='h2' color='light' font='mono' class='mb-32'>
              Get in touch
            </Typography>
            <div className='flex flex-col gap-16 w-fit'>
              <a
                href='mailto:piotrsebastiangoik@gmail.com'
                className='group flex flex-row items-center justify-between border-b text-text-light/25 pb-16 w-full'>
                <Typography text='body' color='light' font='mono'>
                  piotrsebastiangoik@gmail.com
                </Typography>
              </a>
              <a
                href='https://github.com/luckmer'
                className='group flex flex-row items-center justify-between border-b text-text-light/25 pb-16 w-full'>
                <Typography text='body' color='light' font='mono'>
                  github.com/luckmer
                </Typography>
              </a>
              <a
                href='https://linkedin.com/in/piotr-goik'
                className='group flex flex-row items-center justify-between border-b text-text-light/25 pb-16 w-full'>
                <Typography text='body' color='light' font='mono'>
                  linkedin.com/in/piotr-goik
                </Typography>
              </a>
            </div>
          </div>
          <div>
            <Typography text='h2' color='light' font='mono' class='mb-32'>
              Location
            </Typography>
            <div className='flex flex-col gap-16'>
              <Typography text='h2' color='light' font='mono'>
                Cracow, Poland
              </Typography>
              <Typography text='caption' color='light' font='mono'>
                {localTime ? `${localTime} Local time` : 'Loading time...'}
              </Typography>
            </div>
          </div>
        </div>

        <div className='mt-64 flex flex-col md:flex-row justify-between gap-3 md:items-center'>
          <Typography uppercase font='jetbrains' text='tiny' class='text-text-light/60!'>
            © 2026 Piotr Goik
          </Typography>
        </div>
      </div>
    </footer>
  )
}

export default Contact
