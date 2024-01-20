
import { IGroupSingle} from "@/interfaces"
import Day from "./Day"
import styles from './ui.module.css'

export default async function Group({group, dataMon}:IGroupSingle) {
    let s: string[]
    const st: string[] = []
    st.push(group.$.Name)
    
    const unDay ='Relax'
    return(
        <div className={styles.group}>
            <h3>Группа <span>{group.$.Name}</span></h3>
            {group.Timetable ? group.Timetable[0].Day.map((day) => (
                <Day key={day.$.N} day={day} dataMon={dataMon}/> 
            )) : ''}
        </div>
    )
}
