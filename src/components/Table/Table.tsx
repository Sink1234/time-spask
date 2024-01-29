import Timetable from '@/lib/data'
import styles from './Table.module.css'

interface ITable{
    data: string[],
    pageFor: string
}

const Table = ({data, pageFor}: ITable ) => {
    const timeNow:string = new Intl.DateTimeFormat("ru", {dateStyle: 'full', timeStyle: 'short'}).format(new Date).split(',')[0]
    const numberLesson = ['1', '2', '3', '4']
    const getDay = (dayOfWeek: string) => {
        switch(dayOfWeek){
            case "понедельник":
                return '1';
            case "вторник":
                return '2';
            case "среда":
                return '3';
            case "четверг":
                return '4';
            case "пятница":
                return '5';
            case "суббота":
                return '6';
        }
        return '1'
    }

    const day = getDay(timeNow)
    
    const getRoom = (name: string, day: string, lesson: string, pageFor: string) => {
        if(pageFor === 'group'){
            return Timetable.teacher.searchByGroupDayLesson(name, day, lesson)
        }else{
            return Timetable.teacher.searchByNameDayLesson(name, day, lesson)
        }
    }

    return (
        <section className={styles.table}>
            {data.map((data) => (
            <div key={data}>
                <span >{data}</span>
                {numberLesson.map((N) => (
                    <span key={N}>{getRoom(data, day, N, pageFor)[0] ? getRoom(data, day, N, pageFor)[0].lessonPart.auditorium?.number : ''}</span>
                ))}
            </div>
            ))}
        </section>
    )
}

export default Table