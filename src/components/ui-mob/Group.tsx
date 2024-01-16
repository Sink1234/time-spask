
import 'server-only'
import { IGroupSingle} from "@/interfaces"
import Day from "./Day"

export default async function Group({group, dataMon}:IGroupSingle) {

    
    const unDay ={
        Lesson: [''],
        _N:''
    }

    const short = group.Timetable[0].Day
    return(
        <>
            <h3>{group.$.Name}</h3>
            {short.map((day) => (
                <Day key={day.$.N} day={day} dataMon={dataMon}/> 
            ))}
        </>
    )
}
