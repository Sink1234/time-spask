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
    number: string; //какая по счету пара
    name: string; //Имя пары
    teacher: string; //Ф.И.О. учителя
    auditorium?: IAuditorium;
}

export interface IAuditorium {
    number: string; //Номер кабинета
    building: string; //Название
}

export interface ITimetableFlutter {
    lessonPart: IPart; //Данные пары
    groupName: string;//Имя группы
    lessonNumber: string; //Какая по счету пара
    timetableNumber: string; //День недели
}
