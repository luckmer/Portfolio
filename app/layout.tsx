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
  metadataBase: new URL('https://luckmer.github.io'),
  title: 'Piotr Goik',
  description: 'Frontend Engineer & opensource contributor',
  icons: {
    icon: '/metadata/background.png',
  },
  openGraph: {
    title: 'Piotr Goik',
    description: 'Frontend Engineer & opensource contributor',
    url: 'https://luckmer.github.io/Portfolio/',
    siteName: 'Piotr Goik',
    images: [{ url: '/metadata/background.png' }],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Piotr Goik',
    description: 'Frontend Engineer & opensource contributor',
    images: ['/metadata/background.png'],
  },
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
