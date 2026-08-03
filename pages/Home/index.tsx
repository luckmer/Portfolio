'use client'

import About from '@components/About'
import Contact from '@components/Contact'
import Footer from '@components/Footer'
import HashLink from '@components/HashLink'
import SelectedWork from '@components/SelectedWork'
import TechStack from '@components/Stack'
import { Typography } from '@components/Typography'

const Home = () => {
  return (
    <main className='w-full flex flex-col select-none'>
      <div className='w-full px-60 max-w-1360 mx-auto border-r border-l border-line-800 max-[900px]:px-24'>
        <section className='pt-190 pb-90 px-8 border-b border-line-800 ' id='home'>
          <div className='mb-40 flex flex-row gap-8 overflow-hidden'>
            <div>
              <Typography
                text='caption'
                uppercase
                class='tracking-[0.22em] text-[13px]! font-light'>
                {"Hi!, I'm"}
              </Typography>
            </div>
            <div>
              <Typography
                text='caption'
                uppercase
                color='accent'
                class='tracking-[0.22em] text-[13px]! font-light'>
                Piotr Goik
              </Typography>
            </div>
          </div>
          <div className='flex flex-col  border-b border-line-800'>
            <Typography
              text='custom'
              class='text-[clamp(15px,8.2cqw,116px)] font-semibold leading-[0.96] tracking-[-0.035em] text-nowrap text-fg mb-56'>
              Frontend Engineer
              <br />& <span className='text-accent'>Open-source</span>
              <br />
              Contributor
            </Typography>
          </div>
          <div className='pt-70 w-full flex items-center justify-between flex-wrap gap-64'>
            <div className='w-full flex flex-row gap-16 max-w-440 justify-between items-center'>
              <div className='flex flex-row gap-16'>
                <HashLink
                  href='/work'
                  className='group py-16 px-30 bg-fg hover:bg-accent duration-300'>
                  <Typography text='caption' color='950'>
                    View Projects{' '}
                    <span className='inline-block transition-transform duration-300 group-hover:translate-x-4'>
                      →
                    </span>
                  </Typography>
                </HashLink>
                <HashLink
                  href='/#contact'
                  className='group py-16 px-30 border border-line-800 hover:border-fg duration-300'>
                  <Typography text='caption'>
                    Contact{' '}
                    <span className='inline-block transition-transform duration-300 group-hover:translate-x-4'>
                      →
                    </span>
                  </Typography>
                </HashLink>
              </div>
            </div>
            <div className='flex items-center gap-12  '>
              <div className='p-4 bg-line-800 flex items-center rounded-full'>
                <div className='min-w-8 min-h-8 bg-green-300 rounded-full'></div>
              </div>
              <Typography text='small'>Available for work.</Typography>
            </div>
          </div>
        </section>
        <About />
        <SelectedWork />
        <TechStack />
        <Contact />
      </div>
      <Footer />
    </main>
  )
}

export default Home
