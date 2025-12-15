function addZero(num){
    if(num<10) return "0" + num;
    return num;
}

function showTime(){
 const now = new Date();
 let h = addZero(now.getHours());
 let m = addZero(now.getMinutes());
 let s = addZero(now.getSeconds());
 document.getElementById("clock").textContent = h + ":" + m + ":" + s;
 setTimeout(showTime, 1000);
}
showTime();