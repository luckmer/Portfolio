import Cursor from '@components/Cursor'
import Header from '@components/Header'
import SmoothScroll from '@components/SmoothScroll'
import SplashScreen from '@components/SplashScreen'
import '@styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { Metadata } from 'next'

import localFont from 'next/font/local'

const generalSans = localFont({
  src: '../common/fonts/Sans/GeneralSans-Variable.ttf',
  variable: '--font-general-sans',
  weight: '100 900',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Portfolio',
  description: 'Portfolio',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en' className={` ${generalSans.variable}  h-full antialiased`}>
      <body className=' flex flex-col'>
        <SplashScreen />
        <AnimatePresence>
          <SmoothScroll>
            <div className='flex flex-col w-full h-full'>
              <Header />
              <Cursor />
              {children}
            </div>
          </SmoothScroll>
        </AnimatePresence>
      </body>
    </html>
  )
}
