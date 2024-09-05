import styles from './Card.module.css'
import type {ITimetableFlutter} from "@/interfaces/timetable";

interface ILessonSingle {
    N: string,
    data: ITimetableFlutter[],
    pageFor: string
}

const Card = ({N, data, pageFor}: ILessonSingle) => {
    const getTime = (N: string) => {
        const name = data[0].groupName;
        const isUndergraduate = (/^(1\d{1,2}|2\d)-/).test(name);
        console.log({name, isUndergraduate})
        const times: { [key: string]: string } = {
            '1': '09:00 - 10:35',
            '2': '10:55 - 12:30',
            '3': isUndergraduate ? '13:10 - 14:45' : '12:40 - 14:15',
            '4': '14:55 - 16:30',
            '5': '16:40 - 18:15'
        };
        return times[N] || '';
    };

    const NoN = "------------"
    const lessonName = data[0] ? data[0].lessonPart.name : NoN;
    const teacherName = data[0] ? (pageFor === 'group' ? (data[0].lessonPart.teacher) : (data[0].groupName)) : NoN;
    const room = data[0] ? data[0].lessonPart.auditorium?.number ? `Каб. ${data[0].lessonPart.auditorium?.number}` : "Каб. -----" : "Каб. -----";
    const secondRoom = data[1] ? data[1].lessonPart.auditorium?.number ? `Каб. ${data[1].lessonPart.auditorium?.number}` : "Каб. -----" : "Каб. -----";
    //const Building = data[0] ? data[0].lessonPart.auditorium?.building : NoN;
    // const Building = ''

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
