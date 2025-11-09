const scoreText = document.getElementById("score");
const taskText = document.getElementById("task");
const answersDiv = document.getElementById("answers");
const resultText = document.getElementById("result");

let a, b;
let correct = 0;
let total = 0;
let rightAnswer;
let answered = false;

function updateScore(){
    if(total === 0){
        scoreText.textContent = "Рахунок: 0% (0 правильних з 0)";
        return;
    }
    let percent = Math.round(correct / total * 100);
    scoreText.textContent = `Рахунок: ${percent}% (${correct} правильних з ${total})`;
}

function newTask(){
    answered = false;
    answersDiv.innerHTML = "";
    resultText.textContent = "";

    a = Math.floor(Math.random()*10)+1;
    b = Math.floor(Math.random()*10)+1;
    rightAnswer = a * b;

    taskText.textContent = `${a} × ${b} = ?`;

    // генеруємо 4 варіанти
    let variants = [rightAnswer];
    while(variants.length < 4){
        let random = Math.floor(Math.random()*91)+1; // просто рандом 1..91
        if(!variants.includes(random)) variants.push(random);
    }

    // перемішати варіанти
    variants.sort(() => Math.random() - 0.5);

    variants.forEach(v => {
        const radio = document.createElement("input");
        radio.type = "radio";
        radio.name = "ans";
        radio.value = v;

        radio.onchange = checkAnswer; // вибір = перевірка

        const label = document.createElement("label");
        label.textContent = v;

        answersDiv.appendChild(radio);
        answersDiv.appendChild(label);
        answersDiv.appendChild(document.createElement("br"));
    });
}

function checkAnswer(){
    if(answered) return; // тільки 1 спроба!
    answered = true;
    total++;

    let chosen = Number(this.value);

    if(chosen === rightAnswer){
        correct++;
        resultText.textContent = "Правильно!";
    } else {
        resultText.textContent = `Помилка, правильна відповідь ${rightAnswer}`;
    }

    updateScore();
}

document.getElementById("next").onclick = newTask;
