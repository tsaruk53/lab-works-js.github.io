document.write("<h3>Завдання №3.1</h3>");

function getLastDayOfMonth(year, month) {
    return new Date(year, month + 1, 0).getDate();
}

document.write(
    "Останній день лютого 2020 року: " +
    getLastDayOfMonth(2020, 1)
);

document.write("<h3>Завдання №3.2</h3>");

function getSecondsToTomorrow() {
    let now = new Date();

    let tomorrow = new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate() + 1
    );

    let diffMs = tomorrow - now;
    return Math.floor(diffMs / 1000);
}

document.write(
    "Секунд до завтра: " +
    getSecondsToTomorrow()
);
