const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

input.addEventListener("keydown", function (event) {
    if (event.key === "Enter" && input.value.trim() !== "") {
        addTask(input.value);
        input.value = "";
    }
});

function addTask(text) {
    const li = document.createElement("li");

    // checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // текст завдання
    const span = document.createElement("span");
    span.textContent = text;

    // дата і час
    const time = document.createElement("span");
    time.className = "time";
    const now = new Date();
    time.textContent = now.toLocaleString();

    // кнопка видалення
    const del = document.createElement("span");
    del.textContent = "✖";
    del.className = "delete";

    // виконання завдання
    checkbox.addEventListener("change", function () {
        li.classList.add("done");
        checkbox.remove();
    });

    // видалення
    del.addEventListener("click", function () {
        li.remove();
    });

    // редагування по double click
    span.addEventListener("dblclick", function () {
        const editInput = document.createElement("input");
        editInput.value = span.textContent;
        li.replaceChild(editInput, span);
        editInput.focus();

        editInput.addEventListener("keydown", function (e) {
            if (e.key === "Enter") {
                span.textContent = editInput.value;
                li.replaceChild(span, editInput);
            }
        });
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(time);
    li.appendChild(del);

    list.appendChild(li);
}
