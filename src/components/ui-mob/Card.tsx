

import { LessonSingle } from "@/interfaces"


const Card= ({lesson}: LessonSingle) => {

    return(
        <>
           
                { lesson.Part.map((part) => (
                    <span>
                        <div>{part.Name}</div>
                        <div>{part.Teacher}</div>
                        <div>{part.Auditorium[0].$.Number[0]}</div> 
                    </span>
                    
                ))}

        </>
    )
}

export default Card