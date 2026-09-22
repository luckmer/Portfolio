'use client'
import EmptyImg from '@components/EmptyImg'
import Footer from '@components/Footer'
import Reveal from '@components/Reveal/Reveal'
import RevealGroup from '@components/Reveal/RevealGroup'
import RevealItem from '@components/Reveal/RevealItem'
import { Typography } from '@components/Typography'
import clsx from 'clsx'
import Image, { StaticImageData } from 'next/image'
import Link from 'next/link'
import { FC } from 'react'

export interface IProps {
  id: string
  color: string
  title: string
  year: string
  role: string
  description: string
  images?: Record<string, StaticImageData>
  content: Record<string, string>
  isMobile?: boolean
  tags: string[]
}

const WorkSlug: FC<IProps> = ({
  isMobile = false,
  title = '--',
  year = '--',
  role = '--',
  description = '--',
  images = {},
  tags = [],
  content = {
    link: '/',
    main: '--',
    content1: '--',
    content2: '--',
  },
}) => {
  return (
    <div className='w-full flex flex-col select-none'>
      <div className='max-w-1360 mx-auto px-64 flex flex-col w-full h-auto border-r border-l border-line-800 max-[900px]:px-24'>
        <section className='pt-80'>
          <Reveal className='pt-60 pb-80 px-8  border-b border-line-800'>
            <div className='mb-64'>
              <Link href='/work'>
                <Typography color='muted' text='caption' class='hover:text-white! cursor-pointer'>
                  ← Back to work
                </Typography>
              </Link>
            </div>
            <div className=' flex flex-row justify-between items-center mb-36'>
              <Typography text='caption' uppercase color='muted'>
                01- case study
              </Typography>
              <Typography text='caption' uppercase color='muted'>
                {year}
              </Typography>
            </div>
            <div className='flex flex-col gap-40'>
              <Typography
                text='custom'
                class='text-[clamp(15px,8.2cqw,116px)] font-semibold leading-[0.98] tracking-[-0.035em] text-nowrap text-fg'>
                {title}
              </Typography>
              <div className='max-w-640'>
                <Typography text='h3' color='muted'>
                  {description}
                </Typography>
              </div>
            </div>
          </Reveal>
        </section>
        <section className='py-60 px-8 border-b border-line-800'>
          <Reveal
            className={clsx(
              isMobile
                ? 'aspect-10/7  max-[900px]:aspect-9/10 max-[500px]:aspect-6/10'
                : 'aspect-video',
              'relative w-full  overflow-hidden',
              !images?.image1 && 'border border-line-800',
            )}>
            {images?.image1 ? (
              <Image
                src={images?.image1 ?? ''}
                alt={`${title} cover`}
                fill
                className='object-contain'
                priority
              />
            ) : (
              <EmptyImg />
            )}
          </Reveal>
        </section>
        <section className='py-60 px-8 border-b border-line-800'>
          <div className='grid grid-cols-[300px_1fr] gap-80 max-[900px]:grid-cols-1'>
            <Reveal className='flex flex-col gap-36'>
              <div className='flex flex-col gap-12'>
                <Typography text='small' uppercase color='muted' class='tracking-[0.22em]'>
                  Role
                </Typography>
                <Typography text='body'>{role}</Typography>
              </div>
              <div className='flex flex-col gap-12'>
                <Typography text='small' uppercase color='muted' class='tracking-[0.22em]'>
                  timeline
                </Typography>
                <Typography text='body'>{year}</Typography>
              </div>
              <div className='flex flex-col gap-12'>
                <Typography text='small' uppercase color='muted' class='tracking-[0.22em]'>
                  stack
                </Typography>
                <div className='flex flex-wrap gap-8 pb-22'>
                  {(tags?.length ? tags : []).map((skill) => (
                    <div key={skill} className='border border-line-800 rounded-full py-5 px-13'>
                      <Typography text='small' class='leading-[1.6]!' color='muted'>
                        {skill}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            </Reveal>
            <RevealGroup delay={0.1} className='max-w-600 mx-auto'>
              <RevealItem className='mb-28'>
                <Typography text='small' uppercase color='muted' class='tracking-[0.22em]'>
                  overview
                </Typography>
              </RevealItem>
              <RevealItem className='mb-24'>
                <Typography text='h1'>{content.main}</Typography>
              </RevealItem>
              <RevealItem className='mb-24'>
                <Typography text='body' color='muted'>
                  {content.content1}
                </Typography>
              </RevealItem>
              <RevealItem className='mb-24'>
                <Typography text='body' color='muted'>
                  {content.content2}
                </Typography>
              </RevealItem>
            </RevealGroup>
            <div className='mt-auto border-t border-line-800 pt-28 visible'>
              <Link href={content.link}>
                <Typography color='muted' text='caption' class='hover:text-white! cursor-pointer'>
                  Code ↗
                </Typography>
              </Link>
            </div>
          </div>
        </section>
        <section className='py-60 px-8'>
          <Reveal className='mb-40'>
            <Typography text='small' uppercase color='muted' class='tracking-[0.22em]'>
              Gallery
            </Typography>
          </Reveal>
          <RevealGroup
            delay={0.1}
            className={
              isMobile
                ? 'flex gap-12 max-[900px]:flex-col'
                : 'grid grid-cols-[1fr_1fr] gap-24 max-[900px]:grid-cols-1'
            }>
            <Reveal
              className={clsx(
                isMobile
                  ? 'aspect-7/16 max-[900px]:aspect-9/10 max-[500px]:aspect-6/10'
                  : 'aspect-video',
                'relative w-full overflow-hidden',
                !images?.image3 && 'border border-line-800',
              )}>
              {images?.image3 ? (
                <Image
                  src={images?.image3 ?? ''}
                  alt={`${title} gallery 1`}
                  fill
                  className='object-contain'
                  priority
                />
              ) : (
                <EmptyImg />
              )}
            </Reveal>
            <RevealItem
              className={clsx(
                isMobile
                  ? 'aspect-7/16 max-[900px]:aspect-9/10 max-[500px]:aspect-6/10'
                  : 'aspect-video',
                'relative w-full overflow-hidden',
                !images?.image2 && 'border border-line-800',
              )}>
              {images?.image2 ? (
                <Image
                  src={images?.image2 ?? ''}
                  alt={`${title} gallery 2`}
                  fill
                  className='object-contain'
                  priority
                />
              ) : (
                <EmptyImg />
              )}
            </RevealItem>
            <RevealItem
              className={clsx(
                isMobile
                  ? 'aspect-7/16 max-[900px]:aspect-9/10 max-[500px]:aspect-6/10'
                  : 'aspect-video',
                'relative w-full col-span-full  overflow-hidden',
                !(images?.image4 || images?.image1) && 'border border-line-800',
              )}>
              {images?.image4 || images?.image1 ? (
                <Image
                  src={images?.image4 ?? images?.image1 ?? ''}
                  alt={`${title} gallery 3`}
                  fill
                  className='object-contain'
                  priority
                />
              ) : (
                <EmptyImg />
              )}
            </RevealItem>
          </RevealGroup>
          {images?.image5 && images?.image6 && images?.image7 && (
            <RevealGroup
              delay={0.1}
              className={clsx(
                'mt-24',
                isMobile
                  ? 'flex gap-12 max-[900px]:flex-col'
                  : 'grid grid-cols-[1fr_1fr] gap-24 max-[900px]:grid-cols-1',
              )}>
              <Reveal
                className={clsx(
                  isMobile
                    ? 'aspect-7/16 max-[900px]:aspect-9/10 max-[500px]:aspect-6/10'
                    : 'aspect-video',
                  'relative w-full overflow-hidden',
                  !images?.image5 && 'border border-line-800',
                )}>
                {images?.image5 ? (
                  <Image
                    src={images?.image5 ?? ''}
                    alt={`${title} gallery 4`}
                    fill
                    className='object-contain'
                    priority
                  />
                ) : (
                  <EmptyImg />
                )}
              </Reveal>
              <RevealItem
                className={clsx(
                  isMobile
                    ? 'aspect-7/16 max-[900px]:aspect-9/10 max-[500px]:aspect-6/10'
                    : 'aspect-video',
                  'relative w-full overflow-hidden',
                  !images?.image6 && 'border border-line-800',
                )}>
                {images?.image6 ? (
                  <Image
                    src={images?.image6 ?? ''}
                    alt={`${title} gallery 5`}
                    fill
                    className='object-contain'
                    priority
                  />
                ) : (
                  <EmptyImg />
                )}
              </RevealItem>
              <RevealItem
                className={clsx(
                  isMobile
                    ? 'aspect-7/16 max-[900px]:aspect-9/10 max-[500px]:aspect-6/10'
                    : 'aspect-video',
                  'relative w-full col-span-full  overflow-hidden',
                  !images?.image7 && 'border border-line-800',
                )}>
                {images?.image7 ? (
                  <Image
                    src={images?.image7 ?? ''}
                    alt={`${title} gallery 6`}
                    fill
                    className='object-contain'
                    priority
                  />
                ) : (
                  <EmptyImg />
                )}
              </RevealItem>
            </RevealGroup>
          )}
        </section>
      </div>
      <Footer />
    </div>
  )
}

export default WorkSlug
