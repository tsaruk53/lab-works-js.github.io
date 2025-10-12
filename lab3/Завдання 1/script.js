function* randomGenerator(min, max){
    while(true){
        yield Math.floor(Math.random()*(max-min+1))+min;
    }
}
let min = Number(prompt("Введіть мінімальне число"));
let max = Number(prompt("Введіть максимальне число"));

const gen = randomGenerator(min, max);
document.getElementById("next").addEventListener("click", ()=>{
    const number = gen.next().value;
    document.getElementById("out").textContent=`Випадкове число: ${number}`;
    console.log("Випадкове число", number);
});
