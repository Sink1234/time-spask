import db from './data.json'
import dbRoom from './roomNames.json'
import {AuditoriumElement, DayElement, Group, Lesson, Part, type YhZav} from "@/interfaces";
import {IListGroup, ITimetableFlutter} from "@/interfaces/timetable";

class TimetableGroup {
    public dataset: IListGroup[];

    constructor(listGroup: IListGroup[]) {
        this.dataset = listGroup
    }

    listNameGroup() {
        return Array.from(new Set(this.dataset.map((group) => group.name)))
    }
}

export function flattenArray(listGroup: IListGroup[]) {
    return listGroup.reduce((result, group) => {
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
    }, [] as ITimetableFlutter[])
}

class TimetableTeachers {
    public dataset: ITimetableFlutter[];

    constructor(listGroup: IListGroup[]) {
        this.dataset = flattenArray(listGroup);
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
        const data = this.dataset.filter(v => v.timetableNumber === day)
        const teachers = data.reduce(
            (previousValue, currentValue) => {
                const name = currentValue.lessonPart.teacher
                const number = currentValue.lessonPart.auditorium?.number
                if (!number) return previousValue

                if (previousValue[name]) {
                    previousValue[name].push(number)
                } else {
                    previousValue[name] = [number]
                }
                return previousValue
            },
            {} as { [key: string]: string[] }
        )
        return (name: string) => {
            return teachers?.[name]?.length > 0
        }
    }

    filterGroupNotHavePairs(day: string) {
        const data = this.dataset.filter(v => v.timetableNumber === day)
        const groups = data.reduce(
            (previousValue, currentValue) => {
                const name = currentValue.groupName
                const number = currentValue.lessonPart.auditorium?.number
                if (!number)
                    return previousValue

                if (previousValue[name]) {
                    previousValue[name].push(number)
                } else {
                    previousValue[name] = [number]
                }
                return previousValue
            },
            {} as { [key: string]: string[] }
        )
        return (name: string) => {
            return groups?.[name]?.length > 0
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

export function getListGroup(data: Group[]): IListGroup[] {
    return data.map((value) => ({
        name: value.$.Name,
        timetable: getListTimeTable(value.Timetable?.[0].Day)
    }));
}

function getListTimeTable(data: DayElement[] | undefined) {
    if (!data) return undefined;
    return data.map((value) => ({
        number: value.$.N,
        lesson: getListLesson(value.Lesson)
    }));
}

function getListLesson(data: Lesson[]) {
    return data.map((value) => ({
        number: value.$.N,
        part: value.Part.map(value => getPart(value))
    }));
}

function getPart(data: Part) {
    return {
        number: fixPartNumber(data.$.N),
        name: data.Name[0],
        teacher: data.Teacher[0],
        auditorium: getAuditorium(data.Auditorium?.[0])
    };
}
function fixPartNumber(number: string){
    return number.replace(/\.(?=\s*$)/, "")
}

function getAuditorium(data: AuditoriumElement | undefined) {
    if (!data) return undefined;
    return {
        number: fixPartNumber(data.$.Number),
        building: data.$.Building
    };
}
function Timetable(data: YhZav) {

    const listGroup = getListGroup(data.ListGroup?.[0].Group)
    return {
        year: data.Year[0],
        week: data.Week[0],
        numerator: data.Numerator[0],
        // monday: data.Monday[0],
        work: data.Work[0],
        listGroup: listGroup,
        group: new TimetableGroup(listGroup),
        teacher: new TimetableTeachers(listGroup)
    }
}

export {Timetable}
export default Timetable(db.YhZav as YhZav)

