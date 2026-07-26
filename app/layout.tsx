import Cursor from '@components/Cursor'
import Header from '@components/Header'
import SplashScreen from '@components/SplashScreen'
import '@styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { ReactLenis } from 'lenis/react'
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
          <div className='flex flex-col w-full h-full'>
            <ReactLenis root options={{ lerp: 0.1, duration: 1.2, smoothWheel: true }}>
              <Header />
              <Cursor />
              {children}
            </ReactLenis>
          </div>
        </AnimatePresence>
      </body>
    </html>
  )
}
