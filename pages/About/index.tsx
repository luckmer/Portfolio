import Footer from '@components/Footer'
import { Typography } from '@components/Typography'
import { EXPERIENCE, INTRO } from '@static/data'
import clsx from 'clsx'
import ReactLenis from 'lenis/react'

const About = () => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div className='w-full flex flex-col select-none'>
        <div className='max-w-1360 mx-auto px-64 flex flex-col w-full h-auto border-r border-l border-line-800 max-[900px]:px-24'>
          <div className='pt-80'>
            <div className='pt-120 flex flex-col gap-40 pb-90 px-8 border-b border-line-800'>
              <Typography uppercase text='small' color='muted'>
                about
              </Typography>
              <Typography
                text='custom'
                class='text-[clamp(15px,8.2cqw,72px)] font-semibold leading-[0.96] tracking-[-0.035em] text-nowrap text-fg mb-56'>
                Frontend Engineer
                <br />
                focused on <br />
                <span className='text-accent'>craft</span>
              </Typography>
            </div>
          </div>
          <div className='py-120 px-8 border-b border-line-800 grid grid-cols-[280px_1fr] max-[900px]:grid-cols-1 max-[900px]:gap-80'>
            <Typography text='small' class='pt-12' color='muted'>
              Introduction
            </Typography>
            <div className='flex flex-col max-w-720 mx-auto'>
              <div className='mb-40'>
                <Typography text='h1'>
                  {
                    "I'm a Frontend Engineer with 4 years of experience building real time interfaces for crypto trading platforms and multi chain wallets, with React and TypeScript as my core tools."
                  }
                </Typography>
              </div>
              {INTRO.map(({ id, text }) => (
                <div key={id} className='mb-40'>
                  <Typography text='body' color='muted'>
                    {text}
                  </Typography>
                </div>
              ))}
            </div>
          </div>
          <div className='py-120 px-8 border-b border-line-800'>
            <div className='flex flex-row items-start mb-72 max-[900px]:flex-col gap-64 '>
              <div>
                <Typography text='small' class='pt-12' color='muted'>
                  02
                </Typography>
              </div>
              <div>
                <Typography text='custom' class='text-[44px]!' bold>
                  Experience
                </Typography>
              </div>
            </div>
            {EXPERIENCE.map(({ id, period, role, place, description }, index) => (
              <div
                key={id}
                className={clsx(
                  'border-b border-line-800 grid grid-cols-[1fr_1fr_1fr] py-40 max-[900px]:grid-cols-1 max-[900px]:gap-40',
                  index === 0 && 'border-t',
                )}>
                <div>
                  <Typography color='muted' text='caption'>
                    {period}
                  </Typography>
                </div>
                <div className='flex flex-col gap-6 justify-between'>
                  <Typography text='h1'>{role}</Typography>
                  <Typography color='muted' text='caption'>
                    {place}
                  </Typography>
                </div>
                <div>
                  <Typography color='muted' text='caption'>
                    {description}
                  </Typography>
                </div>
              </div>
            ))}
          </div>
        </div>
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default About
