import db from './data.json'
import dbRoom from './roomNames.json'
import {type YhZav} from "@/interfaces";
import type {IListGroup, ITimetableTeachers} from "@/interfaces/timetable";
import {getListGroup} from "@/app/api/timetable/utils";

class TimetableTeachers {
    public dataset: ITimetableTeachers[];

    constructor(listGroup: IListGroup[]) {
        this.dataset = listGroup.reduce((result, group) => {
            if (!(group.timetable)) return result;
            group.timetable.forEach((timetable) =>
                timetable.lesson.forEach((lesson) =>
                    lesson.part.forEach((part) => result.push({
                        lessonPart: part,
                        groupName: group.name,
                        lessonNumber: lesson.number,
                        timetableNumber: timetable.number
                    }))
                )
            );
            return result;
        }, [] as ITimetableTeachers[]);
    }

    listName() {
        return Array.from(
            new Set(
                this.dataset.map(
                    value => value.lessonPart.teacher
                )
            )
        );
    }

    searchByName(nameTeacher: string) {
        return this.dataset.filter(
            (value) =>
                value.lessonPart.teacher === nameTeacher
        )
    }

    searchByNameDayLesson(nameTeacher: string, day: string, lesson: string) {
        return this.dataset.filter(
            (value) =>
                value.lessonPart.teacher === nameTeacher
                && value.timetableNumber === day
                && value.lessonNumber === lesson
        )
    }

    groupName() {
        return Array.from(
            new Set(
                this.dataset.map(
                    value => value.groupName
                )
            )
        )
    }

    searchByGroup(nameGroup: string) {
        return this.dataset.filter(
            (value) =>
                value.groupName === nameGroup
        )
    }

    searchByGroupDayLesson(nameGroup: string, day: string, lesson: string) {
        return this.dataset.filter(
            (value) =>
                value.groupName === nameGroup
                && value.timetableNumber === day
                && value.lessonNumber === lesson
        )
    }

    roomName() {
        return dbRoom
        // return Array.from(
        //     new Set(
        //         this.dataset.reduce((previousValue, currentValue) => {
        //             if (currentValue.lessonPart.auditorium) {
        //                 const number = Number(currentValue.lessonPart.auditorium.number)
        //                 if (!isNaN(number))
        //                     previousValue.push(number)
        //             }
        //
        //             return previousValue
        //         }, [] as number[])
        //     )
        // )
    }

    searchByRoom(nameRoom: number) {
        return this.dataset.filter(
            (value) =>
                value.lessonPart.auditorium?.number === String(nameRoom)
        )
    }

    searchByRoomsPart(nameRoom: string, day: string, lesson: string) {
        return this.dataset.filter(
            (value) =>
                value.lessonPart.auditorium
                && value.lessonPart.auditorium.number === nameRoom
                && value.timetableNumber === day
                && value.lessonNumber === lesson
        )
    }

    filterTeachersNotHavePairs(day: string) {
        const dataDay = this.dataset.filter(v => v.timetableNumber === day)
        const teachers = dataDay.reduce(
            (previousValue, currentValue) => {
                const name = currentValue.lessonPart.teacher
                const number = currentValue.lessonPart.auditorium?.number
                if (!number) return previousValue

                if (previousValue[name]) {
                    previousValue[name].push(number)
                } else {
                    previousValue[name] = [number]
                }
                if (name === "Сущик Е В"){
                    console.log(previousValue)
                }
                return previousValue
            },
            {} as { [key: string]: string[] }
        )
        return (name: string) => {
            return teachers?.[name]?.length > 0
        }
    }

    getListEmptyRoom(day: string) {
        return ['1', '2', '3', '4']
            .map(
                lesson =>
                    this.dataset
                        .filter(
                            value =>
                                value.lessonNumber === lesson
                                && value.timetableNumber === day
                        )
                        .map(value => value.lessonPart.auditorium?.number)
                        .filter(value => value)
            )
            .map(
                lesson =>
                    this.roomName().filter(room => !lesson.includes(room))
            )
    }
}

function Timetable(data: YhZav) {
    const listGroup = getListGroup(data.ListGroup?.[0].Group)
    return {
        year: data.Year[0],
        week: data.Week[0],
        numerator: data.Numerator[0],
        monday: data.Monday[0],
        work: data.Work[0],
        listGroup: listGroup,
        teacher: new TimetableTeachers(listGroup)
    }
}

export default Timetable(db.YhZav as YhZav)

