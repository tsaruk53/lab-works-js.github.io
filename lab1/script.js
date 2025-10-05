//1
let name = "Ростислав";
let nameList = document.getElementById("nameList");

for (let i = 0; i < name.length; i++) {
  let li = document.createElement("li");
  li.textContent = name[i];
  li.onmouseover = function() {
    alert("Це літера " + name[i]);
  };
  nameList.appendChild(li);
}



//2
let studentsDiv = document.getElementById("students");
while (true){
    let student = prompt("Введіть прізвище та ім’я (або натисніть Відміна):");
    if (student === null) break;
    studentsDiv.innerHTML += "<p>" + student + "</p>"
}



//3
let surname = "Царук"; // своє прізвище
let button = document.getElementById("showBlocks");
let container = document.getElementById("letters");
let shown = false;

button.onclick = function() {
  if (!shown) {
    container.innerHTML = "";
    for (let i = 0; i < surname.length; i++) {
      let div = document.createElement("div");
      div.textContent = surname[i];
      div.onmouseover = function() {
        alert("Це літера " + surname[i]);
      };
      container.appendChild(div);
    }
    shown = true;
    button.textContent = "Сховати блоки";
  } else {
    container.innerHTML = "";
    shown = false;
    button.textContent = "Показати блоки";
  }
};