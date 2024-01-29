import Link from "next/link"
import RowRoom from "../ui/room/RowRoom"
import styles from './Room.module.css'
import { useSearchParams } from "next/navigation"
import SearchRoom from "../ui/room/SearchRoom"
import { Suspense } from "react"
import  Timetable, { ITimetableTeachers } from "@/lib/data"


interface IRoom {
    data: number[],
    day: string,
    lesson: string
}

const Room = ({data, day, lesson}: IRoom) => {

    
    
    


    return(
        <>
            <div className={styles.box}>

                <SearchRoom day={day} lesson={lesson}/>
                <Suspense>
                    <div className={styles.table}>
                        {data.map((room)=>(
                            room ? <RowRoom key={room} room={Number(room)} day={day} /> : ''
                        ))}
                    </div>
                </Suspense>
                
            </div>
        </>
    )
}

export default Room