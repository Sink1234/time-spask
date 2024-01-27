import Link from "next/link"
import RowRoom from "../ui/room/RowRoom"
import styles from './Room.module.css'
import { useSearchParams } from "next/navigation"
import SearchRoom from "../ui/room/SearchRoom"
import { Suspense } from "react"

interface IRoom {
    data: number[]
    query: { [key: string]: string } | undefined
}

const Room = ({data, query}: IRoom) => {

    const day = query ? query.day ? query.day : '1' : '1'
    const lesson = query ? query.lesson ? query.lesson : 'non' : "non"

    console.log(day, lesson)
    return(
        <>
            <div className={styles.box}>

                <SearchRoom day={day} lesson={lesson}/>
                <Suspense>
                    <div className={styles.table}>
                        {data.map((room)=>(
                            room ? <RowRoom key={room} room={room} day={day} lessonSort={lesson}/> : ''
                        ))}
                    </div>
                </Suspense>
                
            </div>
        </>
    )
}

export default Room