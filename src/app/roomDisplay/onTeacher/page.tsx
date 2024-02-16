import Timetable from '@/shared/lib/data'
import styles from './page.module.css'
import TablePage from "@/views/TableRoom/TablePage"
import {Suspense} from "react"
import {getWeek} from "@/shared/lib/date";

export async function generateMetadata() {
    return {
        title: `Кабинеты по преподавателям`,
    }
}

export const dynamic = 'force-dynamic'
export default async function RoomPage({}) {
    const currentDate = new Date(new Date().toLocaleString('en', {timeZone: 'Europe/Moscow'}))
    if (currentDate.getDay() === 0) {
        currentDate.setDate(currentDate.getDate() + 1)
    } else if (currentDate.getDay() !== 6) {
        if (currentDate.getHours() > 17) {
            currentDate.setDate(currentDate.getDate() + 1)
        }
    }

    const week = getWeek(currentDate);
    const data = Timetable.teacher.listName().filter(Timetable.teacher.filterTeachersNotHavePairs(week[1]));
    data.sort((a, b) => a > b ? 1 : a < b ? -1 : 0);

    return (
        <div>
            <section className={styles.section}>
                <h2 className={styles.h2}>Кабинеты по преподавателям </h2>
                <Suspense>
                        <TablePage data={data} week={week} pageFor="teacher"/>
                </Suspense>
            </section>
        </div>
    )
}
