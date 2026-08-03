import Reveal from '@components/Reveal/Reveal'
import { Typography } from '@components/Typography'

const About = () => {
  return (
    <section className='py-120 px-8 border-b border-line-800' id='about'>
      <Reveal className='flex flex-row items-start mb-72 max-[450px]:flex-col gap-64'>
        <div>
          <Typography text='small' class='pt-12' color='muted'>
            02
          </Typography>
        </div>
        <div>
          <Typography text='custom' class='text-[44px]!' bold>
            About
          </Typography>
        </div>
      </Reveal>
      <div className='grid grid-cols-[280px_1fr] gap-80 max-[900px]:grid-cols-1 max-[900px]:gap-36'>
        <Reveal delay={0.1} className=' top-100 self-start min-[901px]:sticky'>
          <div className='mb-32'>
            <Typography uppercase text='tiny' color='muted' class='mb-12'>
              based in
            </Typography>
            <Typography text='body'>Cracow, Poland</Typography>
          </div>
          <div>
            <Typography uppercase text='tiny' color='muted' class='mb-12'>
              available for
            </Typography>
            <Typography text='body'>Full time</Typography>
          </div>
        </Reveal>
        <div>
          <Reveal delay={0.2} className='max-w-640'>
            <Typography text='h1' class='leading-[1.6em]!'>
              Frontend Engineer with 4+ years of experience building web and mobile products across
              crypto wallets and trading platforms. Built a multi-chain wallet with 30K+ active
              users and core-maintain an open-source VR eye-tracking project with 1.1K+ GitHub
              stars.
            </Typography>
          </Reveal>
        </div>
      </div>
    </section>
  )
}

export default About
