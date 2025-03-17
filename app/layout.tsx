import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'VADET Website',
  description: 'Created by Mj',
  generator: 'mj',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
