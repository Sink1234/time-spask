

export interface Welcome{
    YhZav: YhZav
}

export interface YhZav {
    Year:      string[];
    Week:      string[];
    Numerator: string[];
    Monday:    string[];
    Work:      string[];
    ListGroup: ListGroup[];
}

export interface ListGroup {
    Group: Group[];
}

export interface IGroupSingle{
    group: Group
    dataMon: IDataMon
}

export interface IDataMon{
    dayMon: string[];
    dayWeekStart: string[];
    dayWeekEnd: string[]
}

export interface Group {
    $:          GroupClass;
    Timetable: Timetable[];
}

export interface GroupClass {
    Name: string;
}

export interface Timetable {
    Day: DayElement[];
}

export interface IDaySingle{
    dataMon: IDataMon;
    day: DayElement
}

export interface DayElement {
    $:      Day;
    Lesson: Lesson[];
}

export interface LessonSingle{
    lesson: Lesson
}

export interface Day {
    N: string;
}

export interface Lesson {
    $:    Day;
    Part: Part[];
}

export interface Part {
    $:           Day;
    Name:        string[];
    Teacher:     string[];
    Auditorium: AuditoriumElement[];
}

export interface AuditoriumElement {
    $: Auditorium;
}

export interface Auditorium {
    Number:   string;
    Building: Building;
}

export enum Building {
    ГлавныйКорпус = "Главный корпус",
}
