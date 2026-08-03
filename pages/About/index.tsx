import Footer from '@components/Footer'
import Reveal from '@components/Reveal/Reveal'
import RevealGroup from '@components/Reveal/RevealGroup'
import RevealItem from '@components/Reveal/RevealItem'
import { Typography } from '@components/Typography'
import { EXPERIENCE, INTRO } from '@static/data'
import clsx from 'clsx'

const About = () => {
  return (
    <div className='w-full flex flex-col select-none'>
      <div className='max-w-1360 mx-auto px-64 flex flex-col w-full h-auto border-r border-l border-line-800 max-[900px]:px-24'>
        <div className='pt-80'>
          <Reveal className='pt-120 flex flex-col gap-40 pb-90 px-8 border-b border-line-800'>
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
          </Reveal>
        </div>
        <div className='py-120 px-8 border-b border-line-800 grid grid-cols-[280px_1fr] max-[900px]:grid-cols-1 max-[900px]:gap-80'>
          <Reveal>
            <Typography text='small' class='pt-12' color='muted'>
              Introduction
            </Typography>
          </Reveal>
          <RevealGroup delay={0.1} className='flex flex-col max-w-720 mx-auto'>
            <RevealItem className='mb-40'>
              <Typography text='h1'>
                {
                  "I'm a Frontend Engineer with 4 years of experience building real time interfaces for crypto trading platforms and multi chain wallets, with React and TypeScript as my core tools."
                }
              </Typography>
            </RevealItem>
            {INTRO.map(({ id, text }) => (
              <RevealItem key={id} className='mb-40'>
                <Typography text='body' color='muted'>
                  {text}
                </Typography>
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
        <div className='py-120 px-8 border-b border-line-800'>
          <Reveal className='flex flex-row items-start mb-72 max-[900px]:flex-col gap-64 '>
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
          </Reveal>
          {EXPERIENCE.map(({ id, period, role, place, description }, index) => (
            <Reveal
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
            </Reveal>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About
