import {AuditoriumElement, DayElement, Group, Lesson, Part} from "@/interfaces";
import {IListGroup} from "@/interfaces/timetable";


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

// export function getPublicPath (filename: string) {
//     return path.join(process.cwd(), 'public', filename)
// }
// export function roomName(){
//     const file = fs.readFileSync(getPublicPath(`roomNames.json`), {encoding: "utf8"})
//     return file.split(/\r?\n/).filter(v => v)
// }