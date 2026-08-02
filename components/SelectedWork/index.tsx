import Card from '@components/Card'
import { Typography } from '@components/Typography'
import { WORK } from '@static/data'
import Link from 'next/link'

const SelectedWork = () => {
  return (
    <section className='py-120 px-8 border-b border-line-800' id='work'>
      <div className='flex flex-row items-center justify-between pb-80'>
        <div className='flex flex-row items-start gap-64 max-[450px]:flex-col'>
          <div>
            <Typography text='small' class='pt-12' color='muted'>
              03
            </Typography>
          </div>
          <div>
            <Typography text='custom' class='text-[44px]!' bold>
              Selected Work
            </Typography>
          </div>
        </div>
        <Link href='/work' className='border-b border-line-800 pb-8 max-[900px]:hidden'>
          <Typography color='muted' text='caption' class='hover:text-white! cursor-pointer'>
            Archive →
          </Typography>
        </Link>
      </div>
      <div className='grid grid-cols-[1fr_1fr_1fr] gap-24 max-[1100px]:grid-cols-[1fr_1fr] max-[900px]:grid-cols-[1fr]'>
        {WORK.map((el) => (
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
    </section>
  )
}

export default SelectedWork
