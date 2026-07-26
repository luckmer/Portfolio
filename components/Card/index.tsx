import Button from '@components/Button'
import { Typography } from '@components/Typography'
import clsx from 'clsx'
import { FC } from 'react'

export interface IProps {
  year: string
  title: string
  description: string
  color: string
  tags: string[]
}

const Card: FC<IProps> = ({ title, year, description, tags, color }) => {
  return (
    <div className='border border-line-800 w-full rounded-12 hover:-translate-y-6 duration-300 group flex flex-col h-full'>
      <div
        className={clsx(
          'px-30 py-32 min-h-210 rounded-t-12 flex items-center justify-center',
          color,
        )}>
        <Typography text='h1' color='900' bold class='group-hover:scale-105 duration-300'>
          {title}
        </Typography>
      </div>
      <div className='pt-26 px-28 pb-30 flex flex-col flex-1'>
        <div className='flex flex-row items-center justify-between pb-14'>
          <Typography text='body'>Neony Exchange</Typography>
          <Typography text='small' color='muted'>
            {year}
          </Typography>
        </div>
        <Typography text='caption' class='leading-[1.6]! pb-22' color='muted'>
          {description}
        </Typography>
        <div className='flex flex-wrap gap-8 pb-22'>
          {tags.map((skill) => (
            <div key={skill} className='border border-line-800 rounded-full py-5 px-13'>
              <Typography text='small' class='leading-[1.6]!' color='muted'>
                {skill}
              </Typography>
            </div>
          ))}
        </div>
        <div className='mt-auto'>
          <Button>
            <Typography color='muted' text='caption' class='hover:text-white! cursor-pointer'>
              Code ↗
            </Typography>
          </Button>
        </div>
      </div>
    </div>
  )
}

export default Card
