import db from './data.json'
import {
    Group,
    YhZav,
    DayElement,
    Lesson,
    Part,
    AuditoriumElement,
} from "@/interfaces";

interface IListGroup {
    name: string;
    timetable?: ITimetable[];
}

interface ITimetable {
    number: string;
    lesson: ILesson[];
}

interface ILesson {
    number: string;
    part: IPart[];
}

interface IPart {
    number: string;
    name: string;
    teacher: string;
    auditorium?: IAuditorium;
}

interface IAuditorium {
    number: string;
    building: string;
}

export interface ITimetableTeachers {
    lessonPart: IPart; //Данные пары
    groupName: string;//Имя группы
    lessonNumber: string; //Какая по счету пара
    timetableNumber: string; //День недели
}

function getListGroup(data: Group[]): IListGroup[] {
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
        number: data.$.N,
        name: data.Name[0],
        teacher: data.Teacher[0],
        auditorium: getAuditorium(data.Auditorium?.[0])
    };
}

function getAuditorium(data: AuditoriumElement | undefined) {
    if (!data) return undefined;
    return {
        number: data.$.Number,
        building: data.$.Building
    };
}

class TimetableTeachers {
    public dataset: ITimetableTeachers[];

    constructor(listGroup: IListGroup[]) {
        this.dataset = listGroup.reduce((result, group) => {
            if (!(group.timetable)) return result;
            group.timetable.forEach((timetable) =>
                timetable.lesson.forEach((lesson) =>
                    lesson.part.forEach((part)=> result.push({
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

    groupName(){
        return Array.from(
            new Set(
                this.dataset.map(
                    value => value.groupName
                )
            )
        )
    }

    searchByGroup(nameGroup: string){
        return this.dataset.filter(
            (value) =>
                value.groupName === nameGroup
        )
    }

    roomName(){
        return Array.from(
            new Set(
                this.dataset.map(
                    value => Number(value.lessonPart.auditorium?.number)
                )
            )
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

