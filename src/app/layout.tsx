import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import { ThemeProvider } from '@/components/ThemeProvider'
import { Navbar } from '@/components/Navbar'
import { Footer } from '@/components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
}

export const metadata: Metadata = {
  metadataBase: new URL('https://modernbuddha.org'),
  title: 'The Modern Buddha - Modern Spirituality Without the Fluff',
  description: 'Wake up to what\'s already here. Modern spirituality without the fluff. Turn your mess into your message and live from the first-person experience of consciousness.',
  keywords: ['spirituality', 'mindfulness', 'consciousness', 'coaching', 'meditation', 'zen', 'buddhism'],
  authors: [{ name: 'The Modern Buddha' }],
  openGraph: {
    title: 'The Modern Buddha - Modern Spirituality Without the Fluff',
    description: 'Wake up to what\'s already here. Modern spirituality without the fluff.',
    type: 'website',
    locale: 'en_US',
    images: [
      {
        url: '/logo-lg.png',
        width: 128,
        height: 128,
        alt: 'The Modern Buddha Logo',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Modern Buddha - Modern Spirituality Without the Fluff',
    description: 'Wake up to what\'s already here. Modern spirituality without the fluff.',
    images: ['/logo-lg.png'],
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="light"
          enableSystem
          disableTransitionOnChange
        >
          <div className="min-h-screen flex flex-col">
            <Navbar />
            <main className="flex-1 pt-16">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
