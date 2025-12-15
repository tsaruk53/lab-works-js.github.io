document.write("<h3>Завдання №2</h3>");

function getWeekDay(date) {
    const days = ["НД", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return days[date.getDay()];
}

let date = new Date(2012, 0, 3); // 3 січня 2012
document.write(getWeekDay(date));
