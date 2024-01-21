import { Welcome} from "@/interfaces"
import Group from '../ui-mob/Group'
import PageWrapper from '../PageWrapper'
import styles from './Home.module.css'
import { useMemo } from 'react'

export default async function Home(YhZav: Welcome) {
    
    const dayWeek = YhZav.YhZav.Work[0].split(' ')
    const dayWork = [dayWeek[2].split('/'), dayWeek[4].split('/')]
    
    const dataMon = {
        dayMon: YhZav.YhZav.Monday[0].split('.'),
        dayWeekStart: dayWork[0],
        dayWeekEnd: dayWork[1] 
    }

    return useMemo(()=>(
        (
                <PageWrapper >
                    <div className={styles.wrapper}>
                        <h3>Кабинеты обновляются КАЖДЫЙ день, будте внимательны!</h3>
                        {YhZav.YhZav.ListGroup[0].Group.map((group) => (
                                <Group key={group.$.Name} group={group} dataMon={dataMon} />
                            ))}
                    </div>
                </PageWrapper>
            )
    ),[])
    
}



