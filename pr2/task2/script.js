function updateTime() {
    const now = new Date();
    document.getElementById("clock30").textContent = now.toLocaleTimeString();
}

// Оновлюємо час одразу після завантаження сторінки
updateTime();

// Оновлюємо час кожні 30 секунд та показуємо попередження
setInterval(function() {
    alert("Зараз оновиться час на сторінці");
    updateTime();
}, 30000);
