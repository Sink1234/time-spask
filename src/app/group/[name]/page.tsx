import { Metadata, ResolvingMetadata } from "next"
import TimeTable from "@/views/Timetable/TimetablePage"
import Timetable from '@/shared/lib/data'
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

export default async function groupPage(
    req: { params: { name: string } }
) {
    const id = decodeURIComponent(req.params.name);
    const data = Timetable.teacher.searchByGroup(id)
    return (
        <section>
            <Suspense>
                {data.length ? (
                    <TimeTable data={data} pageFor='group'/>
                ) : (
                    <h2>Нет занятий</h2>
                )}
            </Suspense>
        </section>
    )
}
