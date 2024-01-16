import 'server-only'
import { Welcome} from "@/interfaces"
import Group from '../ui-mob/Group'


export default async function Home(YhZav: Welcome) {
    const dayWeek = YhZav.YhZav.Work[0].split(' ')
    const dayWork = [dayWeek[1].split('/'), dayWeek[3].split('/')]
    
    const dataMon = {
        dayMon: YhZav.YhZav.Monday[0].split('.'),
        dayWeekStart: dayWork[0],
        dayWeekEnd: dayWork[1] 
    }
    return(
        <>
            {YhZav.YhZav.ListGroup[0].Group.map((group) => (
                    <Group key={group.$.Name} group={group} dataMon={dataMon} />
                ))}
        </>
    )
}



