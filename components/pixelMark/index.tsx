import { pixels } from '@static/index'
import clsx from 'clsx'

export const PixelMark = () => {
  return (
    <div
      className='animate-glitch min-w-30 min-h-30 grid grid-cols-12 gap-2'
      aria-label='Ora Vale mark'>
      {pixels.flatMap((row, y) =>
        row.split('').map((c, x) => (
          <span
            key={`${y}-${x}`}
            className={clsx(c === '1' ? 'bg-amber-50' : 'bg-transparent')}
            style={{
              aspectRatio: '1 / 1',
            }}
          />
        )),
      )}
    </div>
  )
}
