import type {Metadata, Viewport} from 'next'
import type {ReactNode} from "react";
import {Montserrat} from "next/font/google"
import Navbar from '@/layout/header/Header'
import Footer from '@/layout/footer/Footer'
import PageWrapper from '@/components/PageWrapper'
import ScrollUpButton from "@/components/ui/ScrollUpButton/ScrollUpButton";
import './globals.css'

const APP_DEFAULT_TITLE = "Расписание СПАСКа"
export const metadata: Metadata = {
    applicationName: APP_DEFAULT_TITLE,
    manifest: "/manifest.json",
    title: APP_DEFAULT_TITLE,
    description: 'Здесь можно посмотреть актуальное расписание пар как студентам, так и преподавателям',
    openGraph: {
        type: "website",
        title: 'Расписание СПАСКа',
        description: 'Здесь можно посмотреть актуальное расписание пар как студентам, так и преподавателям',
        images: "https://opengraph.b-cdn.net/production/documents/6ce83c81-d00a-4110-a8fd-7559d3739447.jpg?token=KduzQ1uOPvoy60Sm-DB-dtUk-pTonCwdKv-P1yHMrmc&height=800&width=1200&expires=33242589608"
    }
}
export const viewport: Viewport = {
    themeColor: "#1D5770",
    colorScheme: "light"
}

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
})

export default function RootLayout(
    {children,}: { children: ReactNode }
) {
    return (
        <html lang="ru">
        <head>
            <link rel="manifest" href="/manifest.json"/>
        </head>
        <body className={montserrat.className}>
        <Navbar/>
        <PageWrapper>
            {children}
        </PageWrapper>
        <ScrollUpButton/>
        <Footer/>
        </body>
        </html>
    )
}

