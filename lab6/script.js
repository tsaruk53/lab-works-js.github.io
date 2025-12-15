const tabs = document.querySelectorAll(".tabContent");
const box = document.getElementById("box");
const cssCode = document.getElementById("cssCode");

function openTab(index) {
    tabs.forEach(tab => tab.classList.remove("active"));
    tabs[index].classList.add("active");
}

openTab(0); // перша вкладка відкрита

function generate() {
    const tl = document.getElementById("tl").value;
    const tr = document.getElementById("tr").value;
    const br = document.getElementById("br").value;
    const bl = document.getElementById("bl").value;

    const radius = `${tl}px ${tr}px ${br}px ${bl}px`;

    box.style.borderRadius = radius;
    cssCode.value = `border-radius: ${radius};`;
}
