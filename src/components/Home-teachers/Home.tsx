import { Part, Welcome, YhZav } from "@/interfaces"
import PageWrapper from "../PageWrapper"
import styles from './Home.module.css'
import Group from "../ui-mob/Group"
import Teach_gr from "../ui-teach/Teacher_gr"
import { prototype } from "events"

export interface IHome{
    YhZav: YhZav
    teachers: string[]
}

export default async function Home_teachers({YhZav, teachers}: IHome) {
    
    const dayWeek = YhZav.Work[0].split(' ')
    const dayWork = [dayWeek[2].split('/'), dayWeek[4].split('/')]
    
    const dataMon = {
        dayMon: YhZav.Monday[0].split('.'),
        dayWeekStart: dayWork[0],
        dayWeekEnd: dayWork[1] 
    }

    const constructor = (name:string,dayN:number, day:string, partN:number, part:string, group:string, lesson:string, room:string) => {
        
         
        const getDay = () => {
            let getDay = []
            getDay.push([
                {
                    'N': day,
                    'lesson': getLesson()
                }
            ])
            return getDay
        }

        const getLesson = () => {
            let getLesson = []
            getLesson.push([ 
                {
                    'N': part,
                    'part':
                    {
                        'group': group,
                        'lesson': lesson,
                        'room': room
                    }
                
            }])
            return getLesson
        }
        const Timetable = 
            {'teacher':{
                'name': name,
                'day': getDay(),
        }}
        return Timetable
    }
    
    let dataRaw: { teacher: { name: string; day: { N: string; lesson: { N: string; part: { group: string; lesson: string; room: string } }[][] }[][] } }[] = []

    for(let i = 0; i < teachers.length; i++){
        YhZav.ListGroup[0].Group.map((group)=>{
            group.Timetable ? group.Timetable[0].Day.map((day)=>{
                day.Lesson.map((lesson)=>{
                   if(lesson.Part[0].Teacher[0] === teachers[i]){
                        dataRaw[i]=constructor(teachers[i], Number(day.$.N), day.$.N, Number(lesson.$.N), lesson.$.N, group.$.Name,
                            lesson.Part[0].Name[0], lesson.Part[0].Auditorium ? lesson.Part[0].Auditorium[0].$.Number : '')
                   }
                })
            }) : ''
        })
    }
        
    
   
    console.log(dataRaw)
    return(
        <PageWrapper >
            <div className={styles.wrapper}>
                {teachers.map((teacher) => (
                        <Teach_gr key={teacher} teacher={teacher} dataMon={dataMon} />
                ))}
            </div>
        </PageWrapper>
    )
}