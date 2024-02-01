import Timetable from '@/lib/data'
import styles from './page.module.css'
import Table from "@/components/Table/Table"
import {Suspense} from "react"
import {getWeek} from "@/lib/date";
import ButtonPrint from "@/components/ui/Button/ButtonPrint";

export async function generateMetadata() {
    return {
        title: `Кабинеты по преподавателям`,
    }
}

export default function RoomPage() {

    const week = getWeek();
    const data = Timetable.teacher.listName().filter(Timetable.teacher.filterTeachersNotHavePairs(week[1]));
    data.sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        if (a < b) {
            return -1;
        }
        return 0;
    });
    return (
        <div>
            <section className={styles.section}>
                <h2 className={styles.h2}>Кабинеты по преподавателям </h2>

                <Suspense>
                    <ButtonPrint><Table data={data} week={week} pageFor="teacher"/></ButtonPrint>
                    {/*<Table data={data} week={week} pageFor="teacher"/>*/}
                </Suspense>
            </section>
        </div>
    )
}
