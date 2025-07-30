/**
 * Root Layout Component
 *
 * Configures the application layout with Next.js metadata, fonts, and Visa Design System styling.
 * Sets up global styles and theme for the entire application.
 *
 * @author Josh Charpentier
 * @created 2025
 */

import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

// Import Nova styles and theme
import "@visa/nova-styles/styles.css"
import "@visa/nova-styles/themes/visa-light/index.css"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
})

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Uify",
  description: "Visa take home project",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
      </body>
    </html>
  )
}
