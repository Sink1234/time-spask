import Timetable from '@/shared/lib/data'
import styles from './page.module.css'
import TablePage from "@/views/TableRoom/TablePage"
import {Suspense} from "react"
import {getWeek} from "@/shared/lib/date";

export async function generateMetadata() {
    return {
        title: `Кабинеты по группам`,
    }
}

export const dynamic = 'force-dynamic'
export default async function RoomPage() {
    const currentDate = new Date(new Date().toLocaleString('en', {timeZone: 'Europe/Moscow'}))
    if (currentDate.getDay() === 0) {
        currentDate.setDate(currentDate.getDate() + 1)
    } else if (currentDate.getDay() !== 6) {
        if (currentDate.getHours() > 17) {
            currentDate.setDate(currentDate.getDate() + 1)
        }
    }
    const week = getWeek(currentDate);
    const data = Timetable.teacher.groupName().filter(Timetable.teacher.filterGroupNotHavePairs(week[1]));
    return (
        <div className={`current-house-${currentDate.getHours()}`}>
            <section className={styles.section}>
                <Suspense>
                        <TablePage data={data} week={week} pageFor="group"/>
                </Suspense>
            </section>
        </div>
    )
}
