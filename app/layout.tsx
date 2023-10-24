import type { Metadata } from 'next'
import './globals.css'


export const metadata: Metadata = {
  title: 'My Next.js Site',
  description: 'This is my Next.js site',
  other: {
    'theme-color': '#0d1117',
    'color-scheme': 'dark only',
    'twitter:image': 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    'tiwtter:card': 'summary_large_image',
    'og:url': 'jsmastery.pro',
    'og:image': 'https://i.ibb.co/d6TXxB2/homepage-thumbnail.jpg',
    'og:type': 'website',
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className='min-h-screen bg-black-100 font-poppins'>{children}</body>
    </html>
  )
}
