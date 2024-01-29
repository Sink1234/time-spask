import {ITimetableTeachers} from "@/lib/data"
import PageWrapper from '../PageWrapper'
import styles from './Home.module.css'
import Day from "../ui/timetable/Day"
import Link from "next/link"


interface IData{
    data:  ITimetableTeachers[]
    pageFor: string
}
export default async function Home({data, pageFor}: IData) {

    const group = pageFor === 'group' ? data[0].groupName : data[0].lessonPart.teacher
    const days = ['1', '2', '3', '4', '5', '6']

    const filterByDay = (day: string, data:ITimetableTeachers[])=>{
        return data.filter(
            (value) =>
                value.timetableNumber === day
        )
    }
    return (
            <div className={styles.wrapper}>
                <div className={styles.group}>
                    <h3>{pageFor === 'group' ? 'Группа ' : 'Преподаватель'} <span>{group}</span></h3>
                   <section>
                        {days.map((day) => (
                            <Day key={day} day={day} data={filterByDay(day, data)} pageFor={pageFor}/> 
                        ))} 
                   </section>
                </div>
            </div>
    )
}




