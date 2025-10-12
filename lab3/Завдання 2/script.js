function* passwordGenerator() {
  let pass = "";
  while (true) {
    let s = yield;
    if (s === "done") return pass;
    pass += s;
  }
}

let genPass = passwordGenerator();
genPass.next();
while (true) {
  let ch = prompt("Введіть символ або 'done':");
  if (ch === "done") {
    alert("Пароль: " + genPass.next("done").value);
    break;
  }
  genPass.next(ch);
}


