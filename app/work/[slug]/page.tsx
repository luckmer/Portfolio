'use client'
import NotFound from '@components/NotFound'
import WorkSlug from '@pages/WorkSlug'
import { WORK_MAP } from '@static/data'
import { useParams } from 'next/navigation'
import { useMemo } from 'react'

const WorkRoot = () => {
  const data = useParams<{ slug: string }>()
  const slug = data?.slug

  const content = useMemo(() => {
    return WORK_MAP[slug ?? '-1']
  }, [slug])

  if (!slug || !content) {
    return <NotFound />
  }

  return (
    <WorkSlug
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

export default WorkRoot
