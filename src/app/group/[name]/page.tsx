import { Metadata, ResolvingMetadata } from "next"
import TimeTable from "@/pages/Timetable/TimetablePage"
import Timetable from '@/lib/data'

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

export default function groupPage(
    req: { params: { name: string } }
) {
    const id = decodeURIComponent(req.params.name);
    const data = Timetable.teacher.searchByGroup(id)
    return (
        <section>
            <div>
                {data.length ? (
                    <TimeTable data={data} pageFor='group'/>
                ) : (
                    <h2>Нет занятий</h2>
                )}
            </div>
        </section>
    )
}
