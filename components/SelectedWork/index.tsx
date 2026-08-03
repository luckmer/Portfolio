import Card from '@components/Card'
import Reveal from '@components/Reveal/Reveal'
import RevealGroup from '@components/Reveal/RevealGroup'
import RevealItem from '@components/Reveal/RevealItem'
import { Typography } from '@components/Typography'
import { WORK } from '@static/data'
import Link from 'next/link'

const SelectedWork = () => {
  return (
    <section className='py-120 px-8 border-b border-line-800' id='work'>
      <Reveal className='flex flex-row items-center justify-between pb-80'>
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
      </Reveal>
      <RevealGroup
        delay={0.1}
        className='grid grid-cols-[1fr_1fr_1fr] gap-24 max-[1100px]:grid-cols-[1fr_1fr] max-[900px]:grid-cols-[1fr]'>
        {WORK.map((el) => (
          <RevealItem key={el.id} className='h-full'>
            <Card
              tags={el.tags}
              href={`/work/${el.id}`}
              title={el.title}
              year={el.year}
              description={el.description}
              color={el.color}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  )
}

export default SelectedWork
