import styles from './ui.module.css'
import type {ITimetableFlutter} from "@/interfaces/timetable";

interface ILessonSingle {
    N: string,
    data: ITimetableFlutter[],
    pageFor: string
}

const Card = ({N, data, pageFor}: ILessonSingle) => {

    const getTime = (N: string) => {
        switch (N) {
            case '1':
                return '9:30 - 11:05';
            case '2':
                return '11:25 - 13:00';
            case '3':
                return '13:40 - 15:15';
            case '4':
                return '15:25 - 17:00';
            case '5':
                return 'По договоренности :)';
        }
    }

    const NoN = "------------"
    const lessonName = data[0] ? data[0].lessonPart.name : NoN;
    const teacherName = data[0] ? (pageFor === 'group' ? (data[0].lessonPart.teacher) : (data[0].groupName)) : NoN;
    const room = data[0] ? data[0].lessonPart.auditorium?.number ? data[0].lessonPart.auditorium?.number : "Нет данных" : "Нет данных";
    const secondRoom = data[1] ? data[1].lessonPart.auditorium?.number ? data[1].lessonPart.auditorium?.number : "Нет данных" : "Нет данных";
    const Building = data[0] ? data[0].lessonPart.auditorium?.building : NoN;
    return (
        <>
            {data.length < 2
                ? (N === '5'
                        ? (
                            data[0] ? (
                                <div className={styles.card}>
                                <span className={styles.box}>
                                    <div className={styles.part}><span>{N + ' пара | '}</span> {getTime(N)} </div>
                                    <div
                                        className={styles.lesson}><span>{lessonName}</span><span> | </span><p>{teacherName}</p></div>
                                    <div className={styles.room}><span>{room}</span><div>{Building}</div></div> 
                                </span>
                                </div>
                            ) : ('')
                        )
                        : (
                            data[0]
                                ? (<div className={styles.card}>
                                        <span className={styles.box}>
                                            <div className={styles.part}><span>{N + ' пара | '}</span> {getTime(N)} </div>
                                            <div className={styles.lesson}><span>{lessonName}</span><span> | </span><p>{teacherName}</p></div>
                                            <div className={styles.room}><span>{room}</span><div>{Building}</div></div>
                                        </span>
                                    </div>)
                                : (<div className={styles.notCard}>
                                        <div>Нет пары</div>
                                    </div>)
                        )
                )
                : (
                    <div className={styles.card}>
                        <span className={styles.box}>
                            <div className={styles.part}><span>{N + ' пара | '}</span> {getTime(N)} </div>
                            <div className={styles.lesson}><span>{lessonName}</span><span> | </span><section><p>{teacherName + ', '}</p><p>{data[1].lessonPart.teacher}</p></section></div>
                            <div className={styles.room}><span>{room + ', ' + secondRoom + " "}</span><div>{Building}</div></div>
                        </span>
                    </div>
                )}

        </>
    )
}

export default Card
