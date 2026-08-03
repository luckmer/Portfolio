import { Typography } from '@components/Typography'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center h-full'>
      <Typography
        text='custom'
        class='block text-center text-nowrap select-none text-[min(38cqw,300px)] leading-[0.82] font-bold tracking-[-0.045em] text-fg/10 pt-[clamp(24px,6cqw,56px)] pb-[clamp(16px,4cqw,40px)]'>
        {404}
      </Typography>
    </div>
  )
}

export default NotFound
