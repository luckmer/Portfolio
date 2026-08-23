'use client'
import WorkSlug from '@pages/WorkSlug'
import { StaticImageData } from 'next/image'
import { FC, useLayoutEffect } from 'react'

export interface IProps {
  id: string
  color: string
  title: string
  year: string
  role: string
  description: string
  images?: Record<string, StaticImageData>
  content: Record<string, string>
  tags: string[]
  isMobile?: boolean
}

const WorkSlugRoot: FC<IProps> = (content) => {
  useLayoutEffect(() => {
    window.scrollTo({ behavior: 'instant', top: 0 })
  }, [])

  return (
    <WorkSlug
      isMobile={content.isMobile}
      id={content.id}
      color={content.color}
      title={content.title}
      year={content.year}
      role={content.role}
      description={content.description}
      content={content.content}
      images={content.images}
      tags={content.tags}
    />
  )
}

export default WorkSlugRoot
