import Timetable from '@/lib/data'
import {ITimetableTeachers} from "@/lib/data"

export default async function Room(){

    const data = Timetable.teacher.roomName()

    return(
        <>
            <input />

            <div>
                {data.map((value)=>(
                    <ul>
                        <li>{value}</li>
                    </ul>
                ))}
            </div>
        </>
    )
}