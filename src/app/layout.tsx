import type {Metadata, Viewport} from 'next'
import type {ReactNode} from "react";
import {Montserrat} from "next/font/google"
import Navbar from '@/widgets/header/Header'
import Footer from '@/widgets/footer/Footer'
import PageWrapper from '@/entities/PageWrapper/PageWrapper'
import ScrollUpButton from "@/features/ScrollUpButton/ScrollUpButton";
import './globals.css'
import { GoogleAnalytics } from '@next/third-parties/google'

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
    themeColor: "#3d46a1",
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
            <GoogleAnalytics gaId="GTM-PRF66MH3" />
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
