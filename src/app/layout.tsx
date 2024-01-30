import type { Metadata } from 'next'
import './globals.css'
import Navbar from '@/layout/header/Header'
import Footer from '@/layout/footer/Footer'
import PageWrapper from '@/components/PageWrapper'
import { Montserrat } from "next/font/google"

export const metadata: Metadata = {
  title: 'Расписание СПАСКа',
  description: 'Здесь можно посмотреть актуальное расписание пар как студентам, так и преподавателям',
  openGraph:{
    title: 'Расписание СПАСКа',
    description: 'Здесь можно посмотреть актуальное расписание пар как студентам, так и преподавателям',
    images: "https://opengraph.b-cdn.net/production/documents/6ce83c81-d00a-4110-a8fd-7559d3739447.jpg?token=KduzQ1uOPvoy60Sm-DB-dtUk-pTonCwdKv-P1yHMrmc&height=800&width=1200&expires=33242589608"
  }
}

const montserrat = Montserrat({ 
  variable: '--font-montserrat',
  subsets: ['latin'],
})

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        <Navbar />
          <PageWrapper >
            {children}
          </PageWrapper>
        <Footer />
      </body>
    </html>
  )
}

