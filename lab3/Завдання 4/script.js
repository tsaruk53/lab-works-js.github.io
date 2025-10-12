const userName = prompt("Введіть ваше імя");
const user = {
    name: userName,
    say(){alert(`Hello, ${this.name}`);}
};
// якщо просто зробити: document.getElementById("hello").onclick = user.say;
// то this втратиться, бо функція викличеться без контексту
document.getElementById("hello").addEventListener("click", user.say.bind(user));