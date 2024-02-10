import Timetable from '@/lib/data'
import styles from './page.module.css'
import Table from "@/components/Table/Table"
import {Suspense} from "react"
import {getWeek} from "@/lib/date";
import ButtonPrint from "@/components/ui/Button/ButtonPrint";

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
                <h2 className={styles.h2}>Кабинеты по группам</h2>
                <Suspense>
                    <ButtonPrint>
                        <Table data={data} week={week} pageFor="group"/>
                    </ButtonPrint>
                </Suspense>
            </section>
        </div>
    )
}
