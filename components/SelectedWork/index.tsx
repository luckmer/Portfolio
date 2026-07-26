'use client'
import { Typography } from '@components/Typography'

const SelectedWork = () => {
  return (
    <section className='py-120 px-8 border-b border-line-800'>
      <div className='flex flex-row items-start'>
        <div className='mr-64'>
          <Typography text='small' class='pt-12' color='muted'>
            03
          </Typography>
        </div>
        <div>
          <Typography text='custom' class='text-[44px]! pb-24' bold>
            Selected Work
          </Typography>
        </div>
      </div>
    </section>
  )
}

export default SelectedWork
