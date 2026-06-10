import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({
  variable: '--font-inter',
  subsets: ['latin'],
})

export const metadata: Metadata = {
  title: 'SWEL — Surgical Work and Equity Lab',
  description:
    'Advancing gender equity in global surgery through research, advocacy, and systems change.',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-screen font-sans bg-swel-bg text-swel-body">{children}</body>
    </html>
  )
}
