import Timetable from '@/lib/data'
import styles from './page.module.css'
import Table from "@/components/Table/Table"
import { Suspense } from "react"

export async function generateMetadata() {
    return {
      title: `Кабинеты по группам`,
    }
  }

export default function RoomPage(){

    const data = Timetable.teacher.groupName()

    return(
            <div>
                <section className={styles.section}>
                    <h2 className={styles.h2}>Кабинеты по преподавателям</h2>
                    <Suspense>
                        <Table data = {data}  pageFor="group"/>
                    </Suspense>
                </section>
            </div>
    )
}