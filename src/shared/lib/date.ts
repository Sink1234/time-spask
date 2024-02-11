const getDay = (dayOfWeek: string) => {
    switch (dayOfWeek) {
        case "понедельник":
            return '1';
        case "вторник":
            return '2';
        case "среда":
            return '3';
        case "четверг":
            return '4';
        case "пятница":
            return '5';
        case "суббота":
            return '6';
    }
    return '1';
}
export function getWeek(date: Date) {
    const timeNow = new Intl.DateTimeFormat(
        'ru-RU',
        {weekday: 'long'}
    ).format(date);

    return [timeNow, getDay(timeNow)];
}