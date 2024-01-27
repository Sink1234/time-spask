'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import styles from './uiRoom.module.css'
import Link from "next/link"
import { useCallback } from "react"

interface ISearchRoom{
    day: string,
    lesson: string
}

const SearchRoom = ({day, lesson}: ISearchRoom) => {
    const days = [ '1', '2', '3', '4', '5', '6']
    const numberLesson = ['1', '2', '3', '4']
    const searchParams = useSearchParams()
    const router = useRouter()
    const pathname = usePathname()

    const getDay = (N: string) => {
        switch (N){
            case '1':
                return 'Понедельник';
            case '2':
                return 'Вторник';
            case '3':
                return 'Среда';
            case '4':
                return 'Четверг';
            case '5':
                return 'Пятница';
            case '6':
                return 'Суббота';
        };
    }

    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )
    return(
        <>
            <span>Выберите день</span>

            <div className={styles.dayOfWeek}>
                <span><div/></span>
                <div>
                    {days.map((dayN)=>(
                        <Link key={dayN} href={pathname + '?' + createQueryString('day', dayN)} className={day === dayN ? styles.activeLink : styles.Link}>{getDay(dayN)}</Link>
                    ))}
                </div>
                <span><div /></span>
            </div>
                    
            <div className={styles.lesson}>
                <div>Каб</div>
                    {numberLesson.map((N)=> (
                        <Link key={N} className={lesson === N ? styles.activeLink : styles.Link} href={pathname + '?' + createQueryString('lesson', N)}><div>{N + ' пара'}</div></Link>
                    ))}
            </div>
        </>
    )
}

export default SearchRoom