import { Inter } from 'next/font/google'
import '../Components/globals.css'
import { ReactNode } from 'react'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Admin Dashboard',
  description: 'Next.js Tutorial',
}

export default function RootLayout({ children }: {children: ReactNode}) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  )
}