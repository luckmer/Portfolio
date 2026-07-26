import { Typography } from '@components/Typography'

const TechStack = () => {
  const tech = [
    'Typescript',
    'React',
    'SolidJS',
    'JavaScript',
    'Zustand',
    'Tauri v2',
    'TailwindCSS',
    'Playwright',
    'Vitest',
    'Figma',
  ]

  return (
    <div className='py-120 px-8 border-b border-line-800 '>
      <div className='flex flex-row items-start'>
        <div className='mr-64'>
          <Typography text='small' class='pt-12' color='muted'>
            04
          </Typography>
        </div>
        <div>
          <Typography text='custom' class='text-[44px]! pb-24' bold>
            Tech stack
          </Typography>
          <Typography class='mb-64' text='body' color='muted'>
            Technologies and tools used on a regular basis.
          </Typography>
        </div>
      </div>
      <div className='grid grid-cols-5'>
        {tech.map((item, index) => (
          <div
            key={index}
            className='border border-line-800 py-40 px-32 min-h-172 flex items-start justify-between flex-col hover:bg-line-800 duration-300'>
            <div className='flex flex-row items-center justify-end w-full'>
              <Typography text='tiny' color='muted'>
                0{index + 1}
              </Typography>
            </div>
            <Typography text='caption'>{item}</Typography>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TechStack
