import { Typography } from '@components/Typography'

const Footer = () => {
  return (
    <footer className='bg-ink-900 border-t border-line-800 '>
      <div className='max-w-1360 pt-100 px-64 pb-40 mx-auto border-r border-l border-line-800'>
        <div className='grid grid-cols-[1fr_1fr_1fr_1fr] gap-56 pb-80 border-b border-line-800'>
          <div />
          <div>
            <Typography text='small' color='accent' class='mb-24' uppercase>
              explore
            </Typography>
            <div className='flex flex-col gap-14'>
              <a href='#home'>
                <Typography text='body' color='muted'>
                  Home
                </Typography>
              </a>
              <a href='#work'>
                <Typography text='body' color='muted'>
                  Work
                </Typography>
              </a>
              <a href='mailto:piotrsebastiangoik@gmail.com'>
                <Typography text='body' color='muted'>
                  About
                </Typography>
              </a>
              <a href='#contact'>
                <Typography text='body' color='muted'>
                  Contact
                </Typography>
              </a>
            </div>
          </div>
          <div>
            <Typography text='small' color='accent' class='mb-24' uppercase>
              Elsewhere
            </Typography>
            <div className='flex flex-col gap-14'>
              <a href='https://github.com/luckmer' rel='noreferrer'>
                <Typography text='body' color='muted'>
                  GitHub ↗
                </Typography>
              </a>
              <a href='https://linkedin.com' rel='noreferrer'>
                <Typography text='body' color='muted'>
                  LinkedIn ↗
                </Typography>
              </a>
              <a href='mailto:piotrsebastiangoik@gmail.com'>
                <Typography text='body' color='muted'>
                  Email ↗
                </Typography>
              </a>
            </div>
          </div>
          <div className='flex flex-col gap-36'>
            <a href='#contact' className='group relative block border-t border-line-800 pt-20'>
              <Typography text='custom' class='mb-6 text-[19px] font-semibold text-fg'>
                Contact
              </Typography>
              <Typography text='custom' class='text-sm text-fg-muted'>
                Say hello
              </Typography>
            </a>
            <a
              href='/resume.pdf'
              download
              className='group relative block border-t border-line-800 pt-20'>
              <Typography text='custom' class='mb-6 text-[19px] font-semibold text-fg'>
                Résumé
              </Typography>
              <Typography text='custom' class='text-sm text-fg-muted'>
                Download PDF
              </Typography>
            </a>
          </div>
        </div>
        <div className='relative overflow-hidden'>
          <Typography
            text='custom'
            class='block text-center text-nowrap select-none text-[clamp(64px,15vw,240px)] leading-[0.82] font-bold tracking-[-0.045em] text-fg/10 pt-56 mb-[-0.14em]'>
            Piotr Goik
          </Typography>
        </div>
        <div className='flex flex-wrap items-center justify-between gap-16 pt-28'>
          <span className='text-[13px] text-fg/10'>© 2026 Piotr Goik</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
