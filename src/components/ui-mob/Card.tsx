import { LessonSingle } from "@/interfaces"
import styles from './ui.module.css'

const Card= ({lesson}: LessonSingle) => {

    const getTime = (N: string) => {
        switch (N){
       
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
        };
    }
    return(
        <div className={styles.card}>
           
                { lesson.Part.length < 2 ? (
                    <span className={styles.box}>
                        <div className={styles.part}><span>{lesson.$.N[0] + ' пара | '}</span> {getTime(lesson.$.N[0])} </div>
                        <div className={styles.lesson}><span>{lesson.Part[0].Name[0]}</span><span> | </span>{lesson.Part[0].Teacher[0]}</div>
                        <div className={styles.room}><span>{lesson.Part[0].Auditorium ? (lesson.Part[0].Auditorium[0].$.Number + " ") : 'Нет данных'}</span><div>{lesson.Part[0].Auditorium ? lesson.Part[0].Auditorium[0].$.Building : '------------'}</div></div> 
                    </span>
                    
                ) : (
                    <span className={styles.box}>
                        <div className={styles.part}><span>{lesson.$.N[0] + ' пара | '}</span> {getTime(lesson.$.N[0])} </div>
                        <div className={styles.lesson}><span>{lesson.Part[0].Name[0]}</span><span> | </span>{lesson.Part[0].Teacher[0] + ', ' + lesson.Part[1].Teacher[0]}</div>
                        <div className={styles.room}><span>{lesson.Part[0].Auditorium ? (lesson.Part[0].Auditorium[0].$.Number + ', ' + lesson.Part[1].Auditorium[0].$.Number + " ") : 'Нет данных'}</span><div>{lesson.Part[0].Auditorium ? lesson.Part[0].Auditorium[0].$.Building : '------------'}</div></div>
                    </span>
                )}

        </div>
    )
}

export default Card
