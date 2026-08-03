'use client'
import EmptyImg from '@components/EmptyImg'
import Footer from '@components/Footer'
import { Typography } from '@components/Typography'
import ReactLenis from 'lenis/react'
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
  tags: string[]
}

const WorkSlug: FC<IProps> = ({ title, year, role, description, images, tags }) => {
  return (
    <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
      <div className='w-full flex flex-col select-none'>
        <div className='max-w-1360 mx-auto px-64 flex flex-col w-full h-auto border-r border-l border-line-800 max-[900px]:px-24'>
          <section className='pt-80'>
            <div className='pt-60 pb-80 px-8  border-b border-line-800'>
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
            </div>
          </section>
          <section className='py-60 px-8 border-b border-line-800'>
            <div className='relative w-full aspect-video overflow-hidden border border-line-800'>
              {images?.image1 ? (
                <Image
                  src={images?.image1 ?? ''}
                  alt='flasher'
                  fill
                  className='object-cover'
                  priority
                />
              ) : (
                <EmptyImg />
              )}
            </div>
          </section>
          <section className='py-60 px-8 border-b border-line-800'>
            <div className='grid grid-cols-[300px_1fr] gap-80'>
              <div className='flex flex-col gap-36'>
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
                    {tags.map((skill) => (
                      <div key={skill} className='border border-line-800 rounded-full py-5 px-13'>
                        <Typography text='small' class='leading-[1.6]!' color='muted'>
                          {skill}
                        </Typography>
                      </div>
                    ))}
                  </div>
                </div>
                <div className='mt-auto border-t border-line-800 pt-28'>
                  <Link href='/'>
                    <Typography
                      color='muted'
                      text='caption'
                      class='hover:text-white! cursor-pointer'>
                      Code ↗
                    </Typography>
                  </Link>
                </div>
              </div>
              <div>
                <Typography text='small' uppercase color='muted' class='tracking-[0.22em]'>
                  overview
                </Typography>
              </div>
            </div>
          </section>
          <section className='py-60 px-8'>
            <div className='mb-40'>
              <Typography text='small' uppercase color='muted' class='tracking-[0.22em]'>
                Gallery
              </Typography>
            </div>
            <div className='grid grid-cols-[1fr_1fr] gap-24'>
              <div className='relative w-full aspect-video overflow-hidden border border-line-800'>
                {images?.image3 ? (
                  <Image
                    src={images?.image3 ?? ''}
                    alt='flasher'
                    fill
                    className='object-cover'
                    priority
                  />
                ) : (
                  <EmptyImg />
                )}
              </div>
              <div className='relative w-full aspect-video overflow-hidden border border-line-800'>
                {images?.image2 ? (
                  <Image
                    src={images?.image2 ?? ''}
                    alt='flasher'
                    fill
                    className='object-cover'
                    priority
                  />
                ) : (
                  <EmptyImg />
                )}
              </div>

              <div className='relative w-full col-span-full aspect-video overflow-hidden border border-line-800 '>
                {images?.image1 ? (
                  <Image
                    src={images?.image1 ?? ''}
                    alt='flasher'
                    fill
                    className='object-cover'
                    priority
                  />
                ) : (
                  <EmptyImg />
                )}
              </div>
            </div>
          </section>
        </div>
        <Footer />
      </div>
    </ReactLenis>
  )
}

export default WorkSlug
