import  Timetable from "@/lib/data"
import styles from './RowRoom.module.css'

interface IRowRoom{
    room: string,
    day: string,
}

const RowRoom = ({room, day}: IRowRoom) => {
    const numberLesson = ['1', '2', '3', '4']
    const full = numberLesson.map(
        (N) => {
           return Timetable.teacher.searchByRoomsPart(room, day, N)
        })
    return(
        <div className={styles.contains}>
                <>
                    <span>{room}</span>{
                        full.map((part, indexN)=>(
                            <div key={indexN} className={styles.onePart}>{
                                part.map((value, indexV)=>(
                                    <div key={indexV} className={styles.box_full}>
                                        <span>{value.groupName}</span>
                                        <span>{value.lessonPart.teacher}</span>
                                    </div>
                                ))} 
                            </div>
                        ))}
                </>
        </div>
    )
}

export default RowRoom