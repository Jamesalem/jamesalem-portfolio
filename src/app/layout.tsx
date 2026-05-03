import '@/styles/globals.css'
import { Analytics } from "@vercel/analytics/next"

export const metadata = {
  title: 'Iyanuoluwa Akeju | Full-Stack Developer',
  description: 'Portfolio showcasing software engineering expertise in scalable applications, security, and compliance-driven systems.',
  icons: [
    { rel: 'apple-touch-icon', sizes: '180x180', url: '/apple-touch-icon.png' },
    { rel: 'icon', type: 'image/png', sizes: '32x32', url: '/favicon-32x32.png' },
    { rel: 'icon', type: 'image/png', sizes: '16x16', url: '/favicon-16x16.png' },
    { rel: 'shortcut icon', url: '/favicon.ico' },
    { rel: 'manifest', url: '/site.webmanifest' },
  ],
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className="bg-slate-950 text-slate-50 antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  )
}