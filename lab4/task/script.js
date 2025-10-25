let training = {
    type: "Кардіо",
    duration: 45,
    difficulty: "Середній",
    isCompleted: false,
    trainingInfo(){
        console.log(`Тип ${this.type}, Тривалість ${this.duration}хв Складність виконання ${this.difficulty} Виконано ${this.isCompleted ? "Так" : "Ні"}`)
    },
    markAsCompleted(){
        this.isCompleted = true;
        console.log(`Тренування типу "${this.type}" позначено як виконано`);
    }
};
training.trainingInfo();
training.isCompleted = !training.isCompleted;
training.trainingInfo();

let schedule = [
    {type: "Кардіо", duration: 45, difficulty: "Середній", isCompleted: false},
    {type: "Силове", duration: 60, difficulty: "Високий", isCompleted: true},
    {type: "Розтяжка", duration: 30, difficulty: "Легкий", isCompleted: false}
];

function displaySchedule(){
    schedule.forEach(workout =>{
        console.log(`Тип ${workout.type}, Тривалість ${workout.duration}хв Складність виконання ${workout.difficulty} Виконано ${workout.isCompleted ? "Так" : "Ні"}`);
    } );
}

schedule.push({type: "Йога", duration: 30, difficulty: "Легка", isCompleted: true});
displaySchedule();


let unCompletedTraining = schedule.filter(workout => !workout.isCompleted);
console.log("Незроблені тренування ",unCompletedTraining);
let cardioType = schedule.find(book => book.type === "Кардіо");
console.log("Кардіо ",cardioType);

function addTrainingToSchedule(){
    let type = prompt("Введіть тип тренування ");
    let duration = +prompt("Введіть тривалість тринування ")
    let difficulty = prompt("Введіть складність тренування ");
    let isCompleted = confirm("Чи виканоно тренування");

    schedule.push({type, duration, difficulty, isCompleted});
    displaySchedule();
}
addTrainingToSchedule();

schedule.sort((a,b) => a.duration - b.duration);
console.log("Відсортовані тренування за тривалістю ", schedule);

function calculateAverageDuration(){
    let total = schedule.reduce((sum, workout) => sum + workout.duration, 0);
    let avg = total / schedule.length;
    console.log("Середня тривалість тренування ", avg,"хв");
    return avg
}

calculateAverageDuration();