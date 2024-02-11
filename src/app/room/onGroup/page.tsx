import {Suspense} from "react"
import TablePage from "@/ppages/TableRoom/TablePage"
import ButtonPrint from "@/features/Button/ButtonPrint";
import Timetable from '@/shared/lib/data'
import {getWeek} from "@/shared/lib/date";
import styles from './page.module.css'

export async function generateMetadata() {
    return {
        title: `Кабинеты по группам`,
    }
}

export const dynamic = 'force-dynamic'
export default async function RoomGroupPage() {
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
                <h2 className={styles.h2}>Кабинеты по группам</h2>
                <Suspense>
                    <ButtonPrint>
                        <TablePage data={data} week={week} pageFor="group"/>
                    </ButtonPrint>
                </Suspense>
            </section>
        </div>
    )
}
