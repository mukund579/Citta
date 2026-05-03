import './globals.css'
import type { Metadata } from 'next'
import type { ReactNode } from 'react'
import { AuthProvider } from '../contexts/AuthContext'

export const metadata: Metadata = {
  title: 'Citta',
  description: 'Emotionally intelligent AI companion for emotional wellbeing and self-growth.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  )
}
