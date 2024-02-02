import Room from '@/components/Room/Room'
import Timetable from '@/lib/data'
import styles from './page.module.css'

export async function generateMetadata() {
    return {
      title: `Поиск по кабинетам`,
    }
  }

export default function RoomPage({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams?: { [key: string]: string };
  }){

    const query = searchParams
    const day = query ? query.day ? query.day : '1' : '1'
    const lesson = query ? query.lesson ? query.lesson : 'none' : "none"

    
    const data = lesson === 'none' ? (
        Timetable.teacher.roomName()
    ) : (
        Timetable.teacher.getListEmptyRoom(day)[Number(lesson) - 1]
    )

    data.sort() //(a, b) => a - b

    return(
            <div>
                <section className={styles.section}>
                    <h2 className={styles.h2}>Поиск по кабинетам</h2>
                    <Room data = {data} day = {day} lesson = {lesson} />
                </section>
            </div>
    )
}