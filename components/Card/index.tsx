import { Typography } from '@components/Typography'
import clsx from 'clsx'
import Link from 'next/link'
import { FC } from 'react'

export interface IProps {
  href: string
  repo?: string
  year: string
  title: string
  description: string
  color: string
  tags: string[]
}

const Card: FC<IProps> = ({ href, repo, title, year, description, tags, color }) => {
  return (
    <div className='@container relative border border-line-800 w-full rounded-12 hover:-translate-y-6 duration-300 group flex flex-col h-full'>
      <Link
        href={href}
        aria-label={title}
        className='absolute inset-0 z-10 rounded-12 focus-visible:outline-2 focus-visible:outline-accent'
      />
      <div
        className={clsx(
          'p-[8cqw] min-h-[max(140px,55cqw)] rounded-t-12 flex items-center justify-center',
          color,
        )}>
        <Typography
          text='custom'
          class='text-[clamp(16px,8.2cqw,30px)] font-semibold leading-[0.96] tracking-[-0.035em] text-nowrap text-line-800 group-hover:scale-[1.02] duration-300'>
          {title}
        </Typography>
      </div>
      <div className='pt-26 px-28 pb-30 flex flex-col flex-1'>
        <div className='flex flex-row items-center justify-between pb-14'>
          <Typography text='body'>{title}</Typography>
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
        <div className='mt-auto relative z-20 w-fit'>
          <Link href={repo ?? ''} target='_blank' rel='noreferrer noopener'>
            <Typography color='muted' text='caption' class='hover:text-white! cursor-pointer'>
              Code ↗
            </Typography>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Card
