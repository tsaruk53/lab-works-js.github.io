const phrase1 = "Це друк через setInterval.";
let i1 = 0;

const intervalId = setInterval(function () {
  document.getElementById("text1").textContent += phrase1[i1];
  i1++;

  if (i1 === phrase1.length) {
    clearInterval(intervalId);
  }
}, 300);


const phrase2 = "Це друк через setTimeout.";
let i2 = 0;

function typeByTimeout() {
  document.getElementById("text2").textContent += phrase2[i2];
  i2++;

  if (i2 < phrase2.length) {
    setTimeout(typeByTimeout, 300);
  }
}

typeByTimeout();
