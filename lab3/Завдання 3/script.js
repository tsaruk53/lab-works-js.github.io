function* chatBot(){
    const name = yield "Hi! What is your name?";
    const mood = yield `Nice to meet you, ${name}! How are you?`;
    return `Goodbye, ${name}! I'm glad you feel ${mood}.`;
}
const bot = chatBot();
let message = bot.next().value;
while(true){
    const answer = prompt(message);
    const result = bot.next(answer);
    if(result.done){
        alert(result.value);
        console.log(result.value);
        break;
    }
    message = result.value;
}

