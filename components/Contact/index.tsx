'use client'
import { Typography } from '@components/Typography'

const SelectedWork = () => {
  return (
    <section className='py-120 px-8'>
      <div className='flex flex-row items-start'>
        <div className='mr-64'>
          <Typography text='small' class='pt-12' color='muted'>
            05
          </Typography>
        </div>
        <div>
          <Typography text='custom' class='text-[44px]! pb-24' bold>
            Contact
          </Typography>
        </div>
      </div>
    </section>
  )
}

export default SelectedWork
