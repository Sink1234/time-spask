import {Montserrat} from "next/font/google"
import PageWrapper from '@/components/PageWrapper'
import Room from '@/components/Room/Room'
import Timetable from '@/lib/data'
import styels from './page.module.css'

const montserrat = Montserrat({
    variable: '--font-montserrat',
    subsets: ['latin'],
});

export default function RoomPage({
    params,
    searchParams,
  }: {
    params: { slug: string };
    searchParams?: { [key: string]: string };
  }){

    const query = searchParams
    const data = Timetable.teacher.roomName()
    data.sort((a, b) => a - b)
    console.log(data)

    return(
        <PageWrapper >
            <h2 className={styels.h2}>Поиск по кабинетам</h2>

            <section className={montserrat.className}>
                <Room data = {data} query={query}/>
            </section>
        </PageWrapper>
    )
}