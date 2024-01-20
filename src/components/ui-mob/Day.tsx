
import { IDaySingle } from "@/interfaces"
import Card from "./Card";
import styles from './ui.module.css'


const Day = ({day, dataMon}:IDaySingle) => {

    const getDay = (num: string) => {
        switch (num){
       
            case '1':
                return 'Понедельник';
            case '2':
                return 'Вторник';
            case '3':
                return 'Среда';
            case '4':
                return 'Четврег';
            case '5':
                return 'Пятница';
            case '6':
                return 'Суббота';
        };
    }

    const getMonth = () => {
        let month: number
        if(getNumber() > Number(dataMon.dayWeekStart[0])){
            month = Number(dataMon.dayWeekStart[1])
            switch (month){
                case 1:
                    return 'Января';
                case 2:
                    return 'Февраля';
                case 3:
                    return 'Марта';
                case 4:
                    return 'Апреля';
                case 5:
                    return 'Мая';
                case 6:
                    return 'Июня';
                case 7:
                    return 'Июля';
                case 8:
                    return 'Августа';
                case 9:
                    return 'Сентября';
                case 10:
                    return 'Октября';
                case 11:
                    return 'Ноября';
                case 12:
                    return 'Декабря';
            };
        }else{
            month = Number(dataMon.dayWeekEnd[1])
            switch (month){
                case 1:
                    return 'Январь';
                case 2:
                    return 'Февраль';
                case 3:
                    return 'Март';
                case 4:
                    return 'Апрель';
                case 5:
                    return 'Май';
                case 6:
                    return 'Июнь';
                case 7:
                    return 'Июль';
                case 8:
                    return 'Август';
                case 9:
                    return 'Сентябрь';
                case 10:
                    return 'Октябрь';
                case 11:
                    return 'Ноябрь';
                case 12:
                    return 'Декабрь';
            };
        }
        
    }
    
    const getNumber = () => {
        let monday = dataMon.dayMon
        let startDay = dataMon.dayWeekStart
        let EndDay = dataMon.dayWeekEnd
        let data = Number(startDay[0]) + Number(day.$.N) - 1
        if(monday == startDay){
            if(startDay[1] === EndDay[1]){
                data = Number(startDay[0]) + Number(day.$.N) - 1
            }else{
                let day_n = 6 - Number(EndDay[0])
                if(Number(day.$.N) - 1 < day_n){
                    data = Number(startDay[0]) + Number(day.$.N) - 1
                }else{
                    data = Number(EndDay[0]) - Number(day.$.N) + day_n 
                }
                
            }
        }
        return data
    }
    
    return(
        <div className={styles.day}>
            
                <h3 ><span>{getDay(day.$.N)}, </span>{String(getNumber()) + ' ' + String(getMonth())}</h3>
                {day.Lesson.map((lesson) => (
                    <Card key={lesson.$.N} lesson={lesson} />
                ))}
            
        </div>
    )
}

export default Day