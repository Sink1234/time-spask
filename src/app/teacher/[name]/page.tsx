import {Montserrat} from "next/font/google"
import Home from "@/components/Home-mobile/Home"
import Timetable from '@/lib/data'

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
});

export default function teacherPage(
    req: { params: { name: string } }
) {
    const id = decodeURIComponent(req.params.name);
    const data = Timetable.teacher.searchByName(id)
    return (
        <section>
            <div className={montserrat.className}>
                <Home data={data} pageFor='teacher'/>
            </div>
        </section>
    )
}