import type {ITimetableFlutter} from "@/interfaces/timetable";
import Timetable from '@/lib/data'
import styles from './ui.module.css'
import Card from "./Card";
import FollowTo from "@/components/ui/timetable/FollowTo";
import {getWeek} from "@/lib/date";

interface IDaySingle {
    day: string,
    data: ITimetableFlutter[],
    pageFor: string
}

const getData = (day: number) => {
    let dataWork: string[] = []
    let date
    Timetable.work.split(' ').map((data) => {
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
        day < day_n + 1 ? (
            date = new Date(Date.UTC(year, monthFirst, dayNow))
        ) : (
            date = new Date(Date.UTC(year, monthSecond, day - day_n))
        )
    )
    return new Intl.DateTimeFormat("ru", {dateStyle: 'full', timeStyle: 'short'}).format(date)
}
const filterByLessonN = (N: string, data: ITimetableFlutter[]) => {
    return data.filter(
        (value) =>
            value.lessonNumber === N
    )
}
const Day = ({day, data, pageFor}: IDaySingle) => {
    const timeNow = new Intl.DateTimeFormat("ru", {dateStyle: 'full', timeStyle: 'short'}).format(new Date)
    const timeForCompare = timeNow.split(' ')[0] + ' ' + timeNow.split(' ')[1] + ' ' + timeNow.split(' ')[2]
    const dayForCompare = getData(Number(day)).split(' ')[0] + ' ' + getData(Number(day)).split(' ')[1] + ' ' + getData(Number(day)).split(' ')[2]
    const dayOfWeek = getData(Number(day)).split(' ')[0]
    const mainData = timeForCompare === dayForCompare ? (getData(Number(day)).split(' ')[1] + ' ' + getData(Number(day)).split(' ')[2]) + ' (Сегодня)' : (getData(Number(day)).split(' ')[1] + ' ' + getData(Number(day)).split(' ')[2])
    const numberLesson = ['1', '2', '3', '4', '5']
    const id = timeForCompare === dayForCompare ? 'now' : 'other'

    const currentDate = new Date(new Date().toLocaleString('en', {timeZone: 'Europe/Moscow'}))
    let isEdit = false
    const timeWork = Timetable.work.match(/(\d){1,2}\/(\d){2}\/(\d){2}/g)
    if (timeWork) {
        const dateTimetableStart = timeWork[0].match(/(\d){1,2}/g)
        if (dateTimetableStart) {
            const dateStart = new Date(
                Number(new Date().getFullYear().toString().slice(0, 2) + dateTimetableStart[2]),
                Number(dateTimetableStart[1]) - 1,
                Number(dateTimetableStart[0])
            )
            if (dateStart.getTime() > new Date().getTime()){
                isEdit = true
            }
        }
    }


    let follow = undefined
    if (currentDate.getDay() === 6 || currentDate.getDay() === 0) {
        const week = getWeek(currentDate)
        if (isEdit){
            if ("понедельник" === dayOfWeek.replace(/,/g, "")){
                follow = "follow"
            }
        }
        else {
            if (week[0] === dayOfWeek.replace(/,/g, "")) {
                follow = "follow"
            }
        }
    } else {
        currentDate.setDate(currentDate.getDate() + 1)
        const week = getWeek(currentDate)
        if (week[0] === dayOfWeek.replace(/,/g, "")) {
            follow = "follow"
        }
    }
    return (
        <div className={styles.day} id={id}>
            <h3 id={follow}><span>{dayOfWeek} </span>{mainData}</h3>
            {numberLesson.map((N) => (
                <Card key={N} N={N} data={filterByLessonN(N, data)} pageFor={pageFor}/>
            ))}
            <FollowTo/>
        </div>
    )
}

export default Day