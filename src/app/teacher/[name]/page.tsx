import Home from "@/components/Home/Home"
import Timetable from '@/lib/data'
import { Metadata, ResolvingMetadata } from "next"


type Props = {
    params: { name: string }
    searchParams: { [key: string]: string | string[] | undefined }
  }

export async function generateMetadata(
    { params, searchParams }: Props,
    parent: ResolvingMetadata
  ): Promise<Metadata> {
    // read route params
    const id = decodeURIComponent(params.name)
    return {
      title: `Расписание ${id}`,
    }
  }
  

export default function teacherPage(
    req: { params: { name: string } }
) {
    const id = decodeURIComponent(req.params.name);
    const data = Timetable.teacher.searchByName(id)
    return (
        <section>
            <div>
            {data.length ? (
                    <Home data={data} pageFor='teacher'/>
                ) : (
                    <h2>Нет занятий</h2>
                )}
                
            </div>
        </section>
    )
}