const f = document.getElementById("f");
const c = document.getElementById("c");

f.oninput = function(){
    const F = Number(f.value);
    c.value = ((F - 32)*5/9).toFixed(2);
};

c.oninput = function(){
    const C = Number(c.value);
    f.value = (C * 9/5 + 32).toFixed(2);
};