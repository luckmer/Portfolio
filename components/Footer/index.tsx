import HashLink from '@components/HashLink'
import Reveal from '@components/Reveal/Reveal'
import RevealGroup from '@components/Reveal/RevealGroup'
import RevealItem from '@components/Reveal/RevealItem'
import { Typography } from '@components/Typography'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className='bg-ink-900 border-t border-line-800 '>
      <div className='max-w-1360 pt-100 px-64 pb-40 mx-auto border-r border-l border-line-800'>
        <RevealGroup className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-56 pb-80 border-b border-line-800 max-[900px]:grid-cols-1'>
          <div />
          <RevealItem>
            <Typography text='small' color='accent' class='mb-24' uppercase>
              explore
            </Typography>
            <div className='flex flex-col gap-14'>
              <HashLink href='/#home' className='group cursor-pointer w-fit'>
                <Typography text='body' color='muted' class='group-hover:text-fg!'>
                  Home
                </Typography>
              </HashLink>
              <HashLink href='/#work' className='group cursor-pointer w-fit'>
                <Typography text='body' color='muted' class='group-hover:text-fg!'>
                  Work
                </Typography>
              </HashLink>
              <HashLink href='/#about' className='group cursor-pointer w-fit'>
                <Typography text='body' color='muted' class='group-hover:text-fg!'>
                  About
                </Typography>
              </HashLink>
              <HashLink href='/#contact' className='group cursor-pointer w-fit'>
                <Typography text='body' color='muted' class='group-hover:text-fg!'>
                  Contact
                </Typography>
              </HashLink>
            </div>
          </RevealItem>
          <RevealItem>
            <Typography text='small' color='accent' class='mb-24' uppercase>
              Elsewhere
            </Typography>
            <div className='flex flex-col gap-14'>
              <Link
                href='https://github.com/luckmer'
                rel='noreferrer'
                className='group cursor-pointer w-fit'>
                <Typography text='body' color='muted' class='group-hover:text-fg!'>
                  GitHub ↗
                </Typography>
              </Link>
              <Link
                href='https://linkedin.com/in/piotr-goik'
                className='group cursor-pointer w-fit'>
                <Typography text='body' color='muted' class='group-hover:text-fg!'>
                  LinkedIn ↗
                </Typography>
              </Link>
              <Link
                href='mailto:piotrsebastiangoik@gmail.com'
                className='group cursor-pointer w-fit'>
                <Typography text='body' color='muted' class='group-hover:text-fg!'>
                  Email ↗
                </Typography>
              </Link>
            </div>
          </RevealItem>
          <RevealItem className='flex flex-col gap-36'>
            <Link
              href='mailto:piotrsebastiangoik@gmail.com'
              className='group relative  border-t border-line-800 pt-20 flex flex-row justify-between items-start'>
              <div>
                <Typography text='custom' class='mb-6 text-[19px] font-semibold text-fg'>
                  Contact
                </Typography>
                <Typography text='custom' class='text-sm text-fg-muted'>
                  Say hello
                </Typography>
              </div>
              <div className='border group-hover:bg-accent duration-300 border-line-800 p-12 rounded-full w-40 h-40 flex items-center justify-center'>
                <Typography class='group-hover:text-ink-950 group-hover:rotate-45 duration-300'>
                  ↗
                </Typography>
              </div>
            </Link>
            <Link
              href='/resume/Piotr_Goik_Frontend_Engineer.pdf'
              download
              className='group relative  border-t border-line-800 pt-20 flex flex-row justify-between'>
              <div>
                <Typography text='custom' class='mb-6 text-[19px] font-semibold text-fg'>
                  Résumé
                </Typography>
                <Typography text='custom' class='text-sm text-fg-muted'>
                  Download PDF
                </Typography>
              </div>
              <div className='border group-hover:bg-accent duration-300 border-line-800 p-12 rounded-full w-40 h-40 flex items-center justify-center'>
                <Typography class='group-hover:text-ink-950 group-hover:rotate-45 duration-300'>
                  ↗
                </Typography>
              </div>
            </Link>
          </RevealItem>
        </RevealGroup>
        <Reveal className='@container relative overflow-hidden'>
          <Typography
            text='custom'
            class='block text-center text-nowrap select-none text-[min(19cqw,240px)] leading-[0.82] font-bold tracking-[-0.045em] text-fg/10 pt-[clamp(24px,6cqw,56px)] mb-[-0.14em]'>
            Piotr Goik
          </Typography>
        </Reveal>
        <div className='flex flex-wrap items-center justify-between gap-16 pt-28'>
          <span className='text-[13px] text-fg/10'>© 2026 Piotr Goik</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
