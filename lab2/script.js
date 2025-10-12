function calculate() {
    let result = 10;
    if (true) {
        let result = 20;
        console.log("В середині if:", result);
        document.write("В середині if: " + result + "<br>");
    }
    console.log("Поза if:", result);
    document.write("Поза if: " + result + "<br><br>");
}
calculate();

const secretNumber = 19 % 10;
let num = Number(prompt("Введіть число від 0 до 9"));

if (num === secretNumber) {
    alert("Correct!");
    document.write("Correct!<br><br>");
} else {
    alert("Wrong!");
    document.write("Wrong!<br><br>");
}

let name = prompt("Введіть ваше ім'я");
let num1 = Number(prompt("Введіть перше число"));
let num2 = Number(prompt("Введіть друге число"));
let sum = num1 + num2;

console.log("Hello, " + name + "! The sum of " + num1 + " and " + num2 + " is " + sum);
document.write("Hello, " + name + "! The sum of " + num1 + " and " + num2 + " is " + sum);
