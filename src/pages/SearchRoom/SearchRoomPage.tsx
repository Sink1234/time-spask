import RowRoom from "../../entities/RowRoom/RowRoom"
import styles from './SearchRoomPage.module.css'
import SearchRoom from "../../features/SearchRoom/SearchRoom"
import {Suspense} from "react"


interface IRoom {
    data: string[],
    day: string,
    lesson: string
}

const Room = ({data, day, lesson}: IRoom) => {
    return (
        <>
            <div className={styles.box}>
                <SearchRoom day={day} lesson={lesson}/>
                <Suspense>
                    <div className={styles.table}>
                        {data.map((room) => (
                            room ? <RowRoom key={room} room={room} day={day}/> : ''
                        ))}
                    </div>
                </Suspense>
            </div>
        </>
    )
}

export default Room