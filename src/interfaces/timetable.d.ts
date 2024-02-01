export interface IListGroup {
    name: string;
    timetable?: ITimetable[];
}

export interface ITimetable {
    number: string;
    lesson: ILesson[];
}

export interface ILesson {
    number: string;
    part: IPart[];
}

export interface IPart {
    number: string;
    name: string;
    teacher: string;
    auditorium?: IAuditorium;
}

export interface IAuditorium {
    number: string;
    building: string;
}

export interface ITimetableTeachers {
    lessonPart: IPart; //Данные пары
    groupName: string;//Имя группы
    lessonNumber: string; //Какая по счету пара
    timetableNumber: string; //День недели
}
