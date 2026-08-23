import NotFound from '@components/NotFound'
import { WORK_MAP } from '@static/data'
import WorkSlugRoot from '.'

export function generateStaticParams() {
  return Object.keys(WORK_MAP).map((slug) => ({ slug }))
}

const WorkSlug = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params
  const content = WORK_MAP[slug]

  if (!content) {
    return <NotFound />
  }

  return (
    <WorkSlugRoot
      id={content.id}
      isMobile={content.isMobile}
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

export default WorkSlug
