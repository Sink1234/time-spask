import Timetable from '@/lib/data'
import styles from './Table.module.css'

interface ITable {
    data: string[];
    pageFor: string;
    week: string[];
}

const Table = ({data, pageFor, week}: ITable) => {
    const [timeNow, day] = week;
    const numberLesson = ['1', '2', '3', '4', '5'];

    const getRoom = (name: string, day: string, lesson: string, pageFor: string) => {
        if (pageFor === 'group') {
            return Timetable.teacher.searchByGroupDayLesson(name, day, lesson);
        } else {
            return Timetable.teacher.searchByNameDayLesson(name, day, lesson);
        }
    }
    return (
        <div className={styles.wrapper}>
            <h3 className={styles.h3}>{timeNow}</h3>
            <section className={pageFor === 'group' ? styles.tableGroup : styles.table}>
                {data.map((data) => (
                    <div key={data}>
                        <span>{data}</span>
                        {numberLesson.map((N) => (
                            <span
                                key={N}
                                className={styles.room}
                            >
                                {
                                    getRoom(data, day, N, pageFor)
                                        .map(value => value.lessonPart.auditorium?.number)
                                        .filter(v => v)
                                        .join(",")
                                }
                            </span>
                        ))}
                    </div>
                ))}
            </section>
        </div>

    )
}

export default Table