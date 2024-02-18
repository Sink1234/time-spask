import TimetablePage from "@/views/Timetable/TimetablePage"
import Timetable from '@/shared/lib/data'
import { Metadata, ResolvingMetadata } from "next"
import { Suspense } from "react"


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
  

export default async function teacherPage(
    req: { params: { name: string } }
) {
    const id = decodeURIComponent(req.params.name);
    const data = Timetable.teacher.searchByName(id)
    return (
        <section>
            <Suspense>
            {data.length ? (
                    <TimetablePage data={data} pageFor='teacher'/>
                ) : (
                    <h2>Нет занятий</h2>
                )}
            </Suspense>
        </section>
    )
}