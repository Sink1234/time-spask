import {Suspense} from "react";
import RowRoom from "@/entities/RowRoom/RowRoom";
import SearchRoom from "@/features/SearchRoom/SearchRoom";
import styles from './SearchRoomPage.module.css';

interface IRoom {
    data: string[];
    day: string;
    lesson: string;
}

const SearchRoomPage = ({data, day, lesson}: IRoom) => {
    return (
        <div className={styles.box}>
            <SearchRoom day={day} lesson={lesson}/>
            <Suspense>
                <div className={styles.table}>
                    {data.map((room) => (
                        room && <RowRoom key={room} room={room} day={day}/>
                    ))}
                </div>
            </Suspense>
        </div>

    )
}

export default SearchRoomPage