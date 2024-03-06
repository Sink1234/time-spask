import classNames from "@/shared/lib/classNames";
import styles from './Card.module.css'
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
                return '09:30 - 11:05';
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

    let i = 0

    const NoN = "------------"
    const lessonName = data[0] ? data[0].lessonPart.name : NoN;
    const teacherName = data[0] ? (pageFor === 'group' ? (data[0].lessonPart.teacher) : (data[0].groupName)) : NoN;
    const room = data[0] ? data[0].lessonPart.auditorium?.number ? `Каб. ${data[0].lessonPart.auditorium?.number}` : "Каб. -----" : "Каб. -----";
    const secondRoom = data[1] ? data[1].lessonPart.auditorium?.number ? `Каб. ${data[1].lessonPart.auditorium?.number}` : "Каб. -----" : "Каб. -----";
    //const Building = data[0] ? data[0].lessonPart.auditorium?.building : NoN;
    const Building = ''

    return (
        <div className={N === '1' ? (
            styles.box1
            ) : (N === '2' ? (
                styles.box2
            ) : (N === '3' ? (
                styles.box3
            ) : (N === '4' ? (
                styles.box4
            ) : (N === '5' ? (
                styles.box5
            ) : ('')))))} id = {styles.box}>
            
            {data.length < 2
                ? (N === '5'
                        ? (
                            data[0] ? (
                                <div className={styles.card}>
                                    <span className={styles.box}>
                                        <div className={styles.lesson}>{lessonName}</div>
                                        <div className={styles.room}><span>{room}</span><p>{teacherName}</p></div>
                                        <div className={styles.time}><span>{getTime(N)}</span></div>
                                    </span>
                                </div>
                            ) : ('')
                        )
                        : (
                            data[0]
                                ? (<div className={styles.card} >
                                        <span className={styles.box}>
                                            <div className={styles.lesson}>{lessonName}</div>
                                            <div className={styles.room}><span>{room}</span><p>{teacherName}</p></div>
                                            <div className={styles.time}><span>{getTime(N)}</span></div>
                                        </span>
                                    </div>)
                                : (<div className={styles.notCard} >
                                        <div>Нет пары</div>
                                    </div>)
                        )
                )
                : (
                    <div className={styles.card}>
                        <span className={styles.box}>
                            <div className={styles.lesson}>{lessonName}</div>
                            <div className={styles.room}><span>{room}</span><p>{teacherName}</p></div>
                            <div className={styles.room}><span>{secondRoom}</span><p>{pageFor === 'group' ? (data[1].lessonPart.teacher) : (data[1].groupName)}</p></div>
                            <div className={styles.time}> <span>{getTime(N)}</span> </div>
                        </span>
                    </div>
                )}

        </div>
    )
}

export default Card
