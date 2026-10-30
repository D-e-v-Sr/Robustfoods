import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Robust | WooCommerce Digital Commerce Proposal',
  description:
    'A brand-led digital commerce proposal for Robust and Kerapura Products Pvt. Ltd., shaped around its Kerala coconut heritage, product range and growth ambitions.',
  applicationName: 'Robust Digital Commerce Proposal',
  keywords: [
    'Robust',
    'Kerapura Products',
    'WooCommerce proposal',
    'coconut products',
    'digital commerce',
  ],
  openGraph: {
    title: 'A Digital Commerce Experience Designed for Growth',
    description:
      'A considered WooCommerce vision for Robust, the coconut products brand of Kerapura Products Pvt. Ltd.',
    type: 'website',
  },
  icons: {
    icon: [
      {
        url: '/icon-light-32x32.png',
        media: '(prefers-color-scheme: light)',
      },
      {
        url: '/icon-dark-32x32.png',
        media: '(prefers-color-scheme: dark)',
      },
      {
        url: '/icon.svg',
        type: 'image/svg+xml',
      },
    ],
    apple: '/apple-icon.png',
  },
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#183b30',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
