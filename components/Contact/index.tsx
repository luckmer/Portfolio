import Reveal from '@components/Reveal/Reveal'
import { Typography } from '@components/Typography'
import Link from 'next/link'

const SelectedWork = () => {
  return (
    <section className='py-120 px-8' id='contact'>
      <Reveal className='flex flex-row items-start gap-64 max-[450px]:flex-col'>
        <div>
          <Typography text='small' class='pt-12' color='muted'>
            05
          </Typography>
        </div>
        <div>
          <Typography text='custom' class='text-[44px]! pb-24' bold>
            Contact
          </Typography>
        </div>
      </Reveal>
      <Reveal delay={0.1} className='pb-64'>
        <Typography
          text='custom'
          class='text-[clamp(10px,5.2cqw,60px)] font-semibold leading-[0.96] tracking-[-0.035em] text-nowrap text-fg mb-56'>
          {`Let's build `}
          <br />
          <span>something</span> <span className='text-accent'>refined.</span>
        </Typography>
        <Typography text='body' class='max-w-420 leading-[1.6]!' color='muted'>
          Open to new opportunities and interesting projects. The fastest way to reach me is email.
        </Typography>
      </Reveal>
      <Reveal delay={0.2}>
        <div>
          <div className='pb-8'>
            <Typography uppercase color='muted' text='small' class='tracking-[0.2em]!'>
              email
            </Typography>
          </div>
          <Link
            href='mailto:piotrsebastiangoik@gmail.com'
            className='flex cursor-pointer text-[clamp(10px,10.2cqw,34px)] '>
            <Typography
              text='custom'
              color='muted'
              class='text-[clamp(10px,5.2cqw,34px)] border-b border-line-800 pb-8 leading-[0.96] tracking-[-0.01em] text-nowrap hover:text-fg mb-56'>
              piotrsebastiangoik@gmail.com
            </Typography>
          </Link>
          <div className='flex flex-row gap-32 max-[600px]:flex-col max-[600px]:gap-64'>
            <div className='flex flex-col gap-8'>
              <Typography uppercase color='muted' text='small' class='tracking-[0.2em]!'>
                github
              </Typography>
              <Link href='https://github.com/luckmer' className='cursor-pointer'>
                <Typography
                  color='muted'
                  text='body'
                  class='border-b border-line-800 hover:text-fg pb-8'>
                  github.com/luckmer ↗
                </Typography>
              </Link>
            </div>
            <div className='flex flex-col gap-8 '>
              <Typography uppercase color='muted' text='small' class='tracking-[0.2em]!'>
                linkedin
              </Typography>
              <Link href='https://linkedin.com/in/piotr-goik' className='cursor-pointer'>
                <Typography
                  color='muted'
                  text='body'
                  class='border-b border-line-800 hover:text-fg pb-8'>
                  in/piotr-goik ↗
                </Typography>
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}

export default SelectedWork
