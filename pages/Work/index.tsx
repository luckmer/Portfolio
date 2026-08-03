import Card from '@components/Card'
import Footer from '@components/Footer'
import Reveal from '@components/Reveal/Reveal'
import RevealGroup from '@components/Reveal/RevealGroup'
import RevealItem from '@components/Reveal/RevealItem'
import { Typography } from '@components/Typography'
import { WORK } from '@static/data'

const Work = () => {
  return (
    <div className='w-full flex flex-col select-none'>
      <div className='max-w-1360 mx-auto px-64 flex flex-col w-full h-auto border-r border-l border-line-800 max-[900px]:px-24'>
        <div className='pt-80'>
          <Reveal className='pt-120 flex flex-col gap-40 pb-90 px-8 border-b border-line-800'>
            <Typography uppercase text='small' color='muted'>
              Selected work
            </Typography>
            <Typography
              text='custom'
              class='text-[clamp(15px,8.2cqw,72px)] font-semibold leading-[0.96] tracking-[-0.035em] text-nowrap text-fg mb-56'>
              All <span className='text-accent'>projects.</span>
            </Typography>
          </Reveal>
          <RevealGroup className='grid grid-cols-[1fr_1fr_1fr] gap-24 max-[1100px]:grid-cols-[1fr_1fr] max-[900px]:grid-cols-[1fr] pt-80 pb-60 px-8'>
            {WORK.map((el) => (
              <RevealItem key={el.id} className='h-full'>
                <Card
                  href={`/work/${el.id}`}
                  tags={el.tags}
                  title={el.title}
                  year={el.year}
                  description={el.description}
                  color={el.color}
                />
              </RevealItem>
            ))}
          </RevealGroup>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Work
