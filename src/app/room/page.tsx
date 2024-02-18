import SearchRoomPage from '@/views/SearchRoom/SearchRoomPage'
import Timetable from '@/shared/lib/data'
import styles from './page.module.css'
import { Suspense } from 'react';

export async function generateMetadata() {
    return {
      title: `Поиск по кабинетам`,
    }
  }

export default async function RoomPage({
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
            <div className={styles.section}>
                <Suspense >
                    <h2 className={styles.h2}>Поиск по кабинетам</h2>
                    <SearchRoomPage data = {data} day = {day} lesson = {lesson} />
                </Suspense>
            </div>
    )
}