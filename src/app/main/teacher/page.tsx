import {Suspense} from "react";
import {notFound} from "next/navigation";
import type {ITimetableFlutter} from "@/interfaces/timetable";
import {Timetable, default as defaultTimetable} from "@/lib/data";
import classNames from "@/lib/classNames";
import {readDataJsonFile} from "@/shared/scripts/utils";
import Teacher from "@/features/SearchSemestr/Teacher";
import TableHead from "@/entities/Table/TableHead";
import styles from "@/components/Main/main.module.css";

const MainTeacherName = async () => {
    const listTeacher = defaultTimetable.teacher.listName();

    const maxLength = listTeacher.reduce((previousValue, currentValue) => {
        return currentValue.length > previousValue
            ? currentValue.length
            : previousValue;
    }, 0);

    return (
        <div className={classNames(styles.wrapper, styles["pt-26px"])}>
            <h1 className={styles.title}>Расписание на семестр</h1>
            <Teacher
                listGroup={listTeacher}
                className={classNames(styles.search, styles['mt-16px'])}
                maxLength={maxLength}
            />
            {listTeacher.map(async (name)=> (
                <div>
                    <h2 className={classNames(styles.group, styles["pt-42px"])}>
                    Преподаватель <strong className={styles['group-accent']}>{name}</strong>
                    </h2>

                    <div className={classNames(styles.table, styles["pt-26px"])}>
                        <h3 className={styles["table-title"]}>Четная неделя</h3>
                        <div className={styles["table-content"]}>
                            <Suspense fallback={<div className={styles["table-loading"]}>Загрузка...</div>}>
                                <Table data={await getOddData(name)}/>
                            </Suspense>
                        </div>
                    </div>

                    <div className={classNames(styles.table, styles["pt-35px"], styles["mb-50px"])}>
                        <h3 className={styles["table-title"]}>Нечетная неделя</h3>
                        <div className={styles["table-content"]}>
                            <Suspense fallback={<div className={styles["table-loading"]}>Загрузка...</div>}>
                                <Table data={await getEvenData(name)}/>
                            </Suspense>
                        </div>
                    </div>
                </div>  
            ))}
            
            
        </div>
    )
}

async function Table({data}: { data: ITimetableFlutter[] }) {
    return (
        <table>
            <TableHead/>
            <tbody>
            {["1", "2", "3", "4"].map((value) => (
                <Row key={value} data={data} partNumber={value}/>
            ))}
            </tbody>
        </table>
    )
}

interface IRowProps {
    data: ITimetableFlutter[];
    partNumber: string;
}

function Row({data, partNumber}: IRowProps) {
    const filtered = data.filter(v => v.lessonNumber === partNumber);
    const row = Array(7).fill(null).map((_, index) => {
        const currentDay = filtered.filter(v =>
            v.timetableNumber === String(index + 1)
        );
        return currentDay.length === 0 ? null : currentDay;
    });
    return (
        <tr>
            <td className={styles["part_number"]}>{partNumber}</td>
            {row.map((value, index) => (
                <td key={index} className={styles['pt-14px']}>
                    {!value && ("-")}
                    <div
                        key={index}
                        className={classNames(styles.nowrap, styles['part_name'])}
                    >
                        {value && (value[0].lessonPart.name)}
                    </div>
                    {value && value.map((e, index) => (
                        <div key={index}
                             className={classNames(styles.nowrap, styles['part_teacher'])}>
                            {e.groupName}
                        </div>
                    ))}
                </td>
            ))}
        </tr>
    )
}

async function getOddData(teacher: string) {
    const data = await readDataJsonFile("odd_data.json");
    return Timetable(data.YhZav).teacher.searchByName(teacher);
}

async function getEvenData(teacher: string) {
    const data = await readDataJsonFile("even_data.json");
    return Timetable(data.YhZav).teacher.searchByName(teacher);
}

export default MainTeacherName;