import Cursor from '@components/Cursor'
import Header from '@components/Header'
import SplashScreen from '@components/SplashScreen'
import '@styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import { ReactLenis } from 'lenis/react'
import type { Metadata } from 'next'
import { DM_Mono, JetBrains_Mono, Playfair_Display, Ubuntu } from 'next/font/google'

const ubuntu = Ubuntu({
  variable: '--font-ubuntu-sans',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
})

const dmMono = DM_Mono({
  variable: '--font-dm-mono',
  subsets: ['latin'],
  weight: ['400', '500'],
})

const playfair = Playfair_Display({
  variable: '--font-playfair',
  subsets: ['latin'],
  weight: ['400', '700'],
})

const jetbrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
  weight: ['400', '500', '700'],
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
    <html
      lang='en'
      className={` ${dmMono.variable} ${playfair.variable} ${ubuntu.variable} ${jetbrainsMono.variable} h-full antialiased`}>
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
