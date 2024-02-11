import type {ITimetableFlutter} from "@/interfaces/timetable";
import Day from "@/widgets/Day/Day"
import styles from './TimetablePage.module.css'

interface IData {
    data: ITimetableFlutter[]
    pageFor: string
}

export default async function TimetablePage({data, pageFor}: IData) {
    const group = pageFor === 'group' ? data[0].groupName : data[0].lessonPart.teacher

    const filterByDay = (day: string, data: ITimetableFlutter[]) => {
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
                    {['1', '2', '3', '4', '5', '6'].map((day, index) => (
                        <Day key={day} day={day} data={filterByDay(day, data)} pageFor={pageFor}/>
                    ))}
                </section>
            </div>
        </div>
    )
}




