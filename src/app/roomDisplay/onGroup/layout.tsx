import { ReactNode } from "react";
import {Montserrat} from "next/font/google"

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
            <body className={montserrat.className} id="withoutLayout">
                {children}
            </body>
        </html>
    )
}
