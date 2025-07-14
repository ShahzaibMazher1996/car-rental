import './globals.css'
import type { ReactNode } from 'react'

export const metadata = {
  title: 'Car Loans Canada',
  description: 'Get driving now. All credit accepted.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-white text-gray-900">
        {children}
      </body>
    </html>
  )
}
