import styles from './Home.module.css'
import Day from "../ui/timetable/Day"
import type {ITimetableFlutter} from "@/interfaces/timetable";

interface IData{
    data:  ITimetableFlutter[]
    pageFor: string
}
export default async function Home({data, pageFor}: IData) {

    const group = pageFor === 'group' ? data[0].groupName : data[0].lessonPart.teacher
    const days = ['1', '2', '3', '4', '5', '6']

    const filterByDay = (day: string, data:ITimetableFlutter[])=>{
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



