import type {ITimetableFlutter} from "@/interfaces/timetable";
import styles from './ui.module.css'
import Timetable from '@/lib/data'
import Card from "./Card";

interface IDaySingle{
    day: string,
    data: ITimetableFlutter[],
    pageFor: string
}

const Day = ({day, data, pageFor}:IDaySingle) => {

    const getData = (day: number) => {
        let dataWork: string[] = []
        let date
        Timetable.work.split(' ').map((data)=>{
            data.split('/').length > 1 ? (
                dataWork.push(data)
            ) : ('')
        })

        

        let year = 2000 + Number(dataWork[0].split('/')[2])
        let monthFirst = Number(dataWork[0].split('/')[1]) - 1
        let monthSecond = Number(dataWork[1].split('/')[1]) - 1
        let dayStart = Number(dataWork[0].split('/')[0])
        let dayEnd = Number(dataWork[1].split('/')[0])
        let dayNow = day + dayStart - 1
        let day_n = 6 - Number(dayEnd) + 1
        
        monthFirst === monthSecond ? (
            date = new Date(Date.UTC(year, monthFirst, dayNow))
        ) : (
            day < day_n + 1? (
                date = new Date(Date.UTC(year, monthFirst, dayNow))
            ) : (
                date = new Date(Date.UTC(year, monthSecond, day - day_n))
            )
        )
        const timeWork = new Intl.DateTimeFormat("ru", {dateStyle: 'full', timeStyle: 'short'}).format(date)
        return timeWork
    }

    const filterByLessonN = (N: string, data:ITimetableFlutter[])=>{
        return data.filter(
            (value) =>
                value.lessonNumber === N
        )
    }

    

    const timeNow = new Intl.DateTimeFormat("ru", {dateStyle: 'full', timeStyle: 'short'}).format(new Date)
    const timeForCompare = timeNow.split(' ')[0] + ' ' + timeNow.split(' ')[1] + ' ' + timeNow.split(' ')[2]
    const dayForCompare = getData(Number(day)).split(' ')[0] + ' ' + getData(Number(day)).split(' ')[1] + ' ' + getData(Number(day)).split(' ')[2]
    const dayOfWeek = getData(Number(day)).split(' ')[0]
    const mainData = timeForCompare === dayForCompare ? (getData(Number(day)).split(' ')[1] + ' ' + getData(Number(day)).split(' ')[2]) + ' (Сегодня)' : (getData(Number(day)).split(' ')[1] + ' ' + getData(Number(day)).split(' ')[2])
    const numberLesson = ['1', '2', '3', '4', '5']
    const id = timeForCompare === dayForCompare ? 'now' : 'other'
    return(
        <div className={styles.day} id={id}>
            <h3><span>{dayOfWeek} </span>{mainData}</h3>
            {numberLesson.map((N)=>(
                <Card key={N} N={N} data={filterByLessonN(N, data)} pageFor={pageFor}/>
            ))}
        </div>
    )
}

export default Day