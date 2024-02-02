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

    const week = getWeek(new Date());
    const data = Timetable.teacher.groupName().filter(Timetable.teacher.filterGroupNotHavePairs(week[1]));
    return (
        <div>
            <section className={styles.section}>
                <h2 className={styles.h2}>Кабинеты по группам</h2>
                <Suspense>
                    <ButtonPrint><Table data={data} week={week} pageFor="group"/></ButtonPrint>
                </Suspense>
            </section>
        </div>
    )
}
