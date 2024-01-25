import Home_teachers from "@/components/Home-teachers/Home"
import { Welcome } from "@/interfaces"
import { Services } from "@/service/data.services"
import { Montserrat } from "next/font/google"

const montserrat = Montserrat({ 
    variable: '--font-montserrat',
    subsets: ['latin'],
})

export default function Teacher(){
    const data: Welcome = Services.getStudents()
    let teachers: string[] = []


    data.YhZav.ListGroup[0].Group.map((group)=>{
       group.Timetable ? (
            group.Timetable[0].Day.map((day)=>{
                day.Lesson.map((lesson)=>{
                    teachers.push(lesson.Part[0].Teacher[0]) 
                })
            })
       ) : ( '')
    })

    let output: string[] = []
    
    teachers.forEach((item) => {
        if (output.indexOf(item) === -1) {
          output.push(item);
        }
      });

    const name = output
    return (
      <section >
        <div className={montserrat.className}>
          <Home_teachers YhZav={data.YhZav} teachers={name}/>
        </div>
      
      </section>
    )
}