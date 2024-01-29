import {Montserrat} from "next/font/google"
import PageWrapper from '@/components/PageWrapper'
import Timetable from '@/lib/data'
import styles from './page.module.css'
import Table from "@/components/Table/Table"
import { Suspense } from "react"

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
});

export default function RoomPage(){

    const data = Timetable.teacher.groupName()

    return(
            <div className={montserrat.className}>
                <section className={styles.section}>
                    <h2 className={styles.h2}>Таблица кабинетов по группам</h2>
                    <Suspense>
                        <Table data = {data}  pageFor="group"/>
                    </Suspense>
                </section>
            </div>
    )
}