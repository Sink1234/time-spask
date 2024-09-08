import {Suspense} from 'react';
import {notFound} from "next/navigation";
import {IListGroup, ITimetableFlutter} from "@/interfaces/timetable";
import {Timetable, default as defaultTimetable, flattenArray} from "@/shared/lib/data";
import classNames from "@/shared/lib/classNames";
import {readDataJsonFile} from "@/shared/scripts/utils";
import Group from "@/features/SearchSemestr/Group";
import TableHead from "@/entities/Table/TableHead";
import styles from "@/components/Main/main.module.css";

const MainGroupName = async ({params}: { params: { name: string } }) => {
    const name = decodeURI(params.name);
    const listGroup = defaultTimetable.group.listNameGroup();

    if (!listGroup.includes(name))
        return notFound();

    const maxLength = listGroup.reduce((previousValue, currentValue) => {
        return currentValue.length > previousValue
            ? currentValue.length
            : previousValue
    }, 0);

    return (
        <div className={classNames(styles.wrapper, styles["pt-26px"])}>
            <h1 className={styles.title}>Расписание на семестр</h1>
            <Group
                listGroup={listGroup}
                className={classNames(styles.search, styles['mt-16px'])}
                maxLength={maxLength}
            />
            <h2 className={classNames(styles.group, styles["pt-42px"])}>
                Группа <strong className={styles['group-accent']}>{name}</strong>
            </h2>
            <div className={classNames(styles.table, styles["pt-26px"])}>
                <h3 className={styles["table-title"]}>Неделя 1</h3>
                <div className={styles["table-content"]}>
                    <Suspense fallback={<div className={styles["table-loading"]}>Загрузка...</div>}>
                        <Table data={await getOddData(name)}/>
                    </Suspense>
                </div>
            </div>

            <div className={classNames(styles.table, styles["pt-35px"], styles["mb-50px"])}>
                <h3 className={styles["table-title"]}>Неделя 2</h3>
                <div className={styles["table-content"]}>
                    <Suspense fallback={<div className={styles["table-loading"]}>Загрузка...</div>}>
                        <Table data={await getEvenData(name)}/>
                    </Suspense>
                </div>
            </div>
        </div>
    );
};

async function Table({data}: { data: IListGroup }) {
    return (
        <table>
            <TableHead/>
            <tbody>
            {["1", "2", "3", "4"].map((value) => (
                <Row key={value} data={flattenArray([data])} partNumber={value}/>
            ))}
            </tbody>
        </table>
    );
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
                    <div key={index}
                         className={classNames(styles['part_name'])}>{value && (value[0].lessonPart.name)}</div>
                    {value && value.map((e, index) => (
                        <div key={index}
                             className={classNames(styles.nowrap, styles['part_teacher'])}>
                            {e.lessonPart.teacher}
                        </div>
                    ))}
                </td>
            ))}
        </tr>
    )
}

async function getOddData(group: string) {
    const data = await readDataJsonFile("odd_data.json");
    const timetable = Timetable(data.YhZav);
    return timetable.listGroup.filter(value => value.name === group)[0];
}

async function getEvenData(group: string) {
    const data = await readDataJsonFile("even_data.json");
    const timetable = Timetable(data.YhZav);
    return timetable.listGroup.filter(value => value.name === group)[0];
}

export default MainGroupName;