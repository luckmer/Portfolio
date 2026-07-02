import { Typography } from '@components/Typography'

const About = () => {
  return (
    <section id='skills' className='px-48 py-24 md:py-32 border-t border-border'>
      <div className='flex items-baseline gap-4'>
        <Typography font='mono' text='small' uppercase>
          [A]
        </Typography>
        <Typography font='mono' text='small' uppercase>
          About
        </Typography>
        <span className='flex-1 h-px bg-border' />
      </div>

      <div className='flex flex-col gap-64 py-128 px-48 max-w-700 '>
        <Typography text='h2' font='default'>
          Frontend Engineer with 4+ years of experience building web and mobile products across
          crypto wallets and trading platforms. Built a multi-chain wallet with 30K+ active users
          and core-maintain an open-source VR eyetracking project with 1.1K+ GitHub stars.
        </Typography>

        <Typography text='h2' font='default'>
          Frontend Engineer with 4+ years of experience building web and mobile products across
          crypto wallets and trading platforms. Built a multi-chain wallet with 30K+ active users
          and core-maintain an open-source VR eyetracking project with 1.1K+ GitHub stars.
        </Typography>
      </div>
    </section>
  )
}

export default About
