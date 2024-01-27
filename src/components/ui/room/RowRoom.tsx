import  Timetable from "@/lib/data"
import styles from './uiRoom.module.css'

interface IRowRoom{
    room: number,
    day: string,
    lessonSort: string,
}

const RowRoom = ({room, day, lessonSort}: IRowRoom) => {

    const data = Timetable.teacher.searchByRoom(room)
    const numberLesson = ['1', '2', '3', '4']
    return(
        <div className={styles.contains}>
            <span>{room}</span>
            {numberLesson.map((N) => (
                <div key={room + N} className={styles.onePart}>{
                    data.map((value)=>(
                        value.timetableNumber === day ? (
                            value.lessonNumber === N ? (
                                <div key={value.groupName} className={styles.box_full}>
                                    <span>{value.groupName}</span>
                                    <span>{value.lessonPart.teacher}</span>
                                </div>
                            ) : (
                                ''
                            )
                        ) : ''
                    )) }
                </div>
            ))}

        </div>
    )
}

export default RowRoom