import {Montserrat} from "next/font/google"
import Home from "@/components/Home/Home"
import Timetable from '@/lib/data'

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
});

export default function groupPage(
    req: { params: { name: string } }
) {
    const id = decodeURIComponent(req.params.name);
    const data = Timetable.teacher.searchByGroup(id)
    return (
        <section>
            <div className={montserrat.className}>
                {data.length ? (
                    <Home data={data} pageFor='group'/>
                ) : (
                    <h2>Нет занятий</h2>
                )}
            </div>
        </section>
    )
}
