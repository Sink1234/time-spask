import Timetable from '@/lib/data'
import styles from './page.module.css'
import Table from "@/components/Table/Table"
import {Suspense} from "react"
import {getWeek} from "@/lib/date";

export async function generateMetadata() {
    return {
        title: `Кабинеты по группам`,
    }
}

export default function RoomPage() {

    const week = getWeek();
    const data = Timetable.teacher.groupName().filter(Timetable.teacher.filterGroupNotHavePairs(week[1]));
    return (
        <div>
            <section className={styles.section}>
                <h2 className={styles.h2}>Кабинеты по группам</h2>
                <Suspense>
                    <Table data={data} week={week} pageFor="group"/>
                </Suspense>
            </section>
        </div>
    )
}
