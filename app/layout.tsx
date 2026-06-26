import Cursor from '@components/Cursor'
import SplashScreen from '@components/SplashScreen'
import '@styles/globals.css'
import { AnimatePresence } from 'framer-motion'
import type { Metadata } from 'next'
import { DM_Mono, Playfair_Display, Ubuntu } from 'next/font/google'
import Header from './(header)'

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
      className={` ${dmMono.variable} ${playfair.variable} ${ubuntu.variable} h-full antialiased`}>
      <body className='min-h-full flex flex-col'>
        <AnimatePresence>
          <div className='flex flex-col w-full h-full'>
            <Header />
            <SplashScreen />
            <Cursor />
            {children}
          </div>
        </AnimatePresence>
      </body>
    </html>
  )
}
