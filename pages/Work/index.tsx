'use client'

import Card from '@components/Card'
import Footer from '@components/Footer'
import { Typography } from '@components/Typography'
import { work } from '@static/data'
import ReactLenis from 'lenis/react'

const Work = () => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div className='w-full flex flex-col select-none'>
        <div className='max-w-1360 mx-auto px-64 flex flex-col w-full h-auto border-r border-l border-line-800'>
          <div className='pt-80'>
            <div className='pt-120 flex flex-col gap-40 pb-90 px-8 border-b border-line-800'>
              <Typography uppercase text='small' color='muted'>
                Selected work
              </Typography>
              <Typography
                text='custom'
                class='text-[clamp(15px,8.2cqw,72px)] font-semibold leading-[0.96] tracking-[-0.035em] text-nowrap text-fg mb-56'>
                All <span className='text-accent'>projects.</span>
              </Typography>
            </div>
            <div className='grid grid-cols-[1fr_1fr_1fr] gap-24 max-[1100px]:grid-cols-[1fr_1fr] max-[900px]:grid-cols-[1fr] pt-80 pb-60 px-8'>
              {work.map((el) => (
                <Card
                  key={el.id}
                  tags={el.tags}
                  title={el.title}
                  year={el.year}
                  description={el.description}
                  color={el.color}
                />
              ))}
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default Work
