import {Montserrat} from "next/font/google"
import Home from "@/components/Home-mobile/Home"
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
                <Home data={data} pageFor='group'/>
            </div>
        </section>
    )
}
