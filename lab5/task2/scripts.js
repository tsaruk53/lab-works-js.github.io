const scoreText = document.getElementById("score");
const taskText = document.getElementById("task");
const answer = document.getElementById("answer");
const resultText = document.getElementById("result");

let a, b;
let correct =0;
let total = 0;

function updateScore(){
    if (total===0){
        scoreText.textContent = "Рахунок: 0% (0 правильних з 0)";
        return;
    }
    let percent = Math.round(correct / total * 100);
    scoreText.textContent = `Рахунок: ${percent}% (${correct} правильних з ${total})`;
}

function newTask(){
    a = Math.floor(Math.random()*10)+1;
    b = Math.floor(Math.random()*10)+1;
    taskText.textContent = `${a} * ${b} = ?`;
    answer.value = "";
    resultText.textContent = "";
}

document.getElementById("next").onclick = newTask;
document.getElementById("check").onclick = function(){
    let userValue = Number(answer.value);
    let rightValue = a*b;
    total++;
    if (userValue === rightValue){
        correct++;
        resultText.textContent = "Правильно";
    } else{
        resultText.textContent = `Помилка, правильна відповідь ${rightValue}`
    }
    updateScore();
}