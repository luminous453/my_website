// Функция showMessage
function showMessage(message) {
    console.log(message);
}

// Функция changeBackgroundColor
function changeBackgroundColor(color) {
    document.body.style.backgroundColor = color;
}

// Функция toggleVisibility
function toggleVisibility(selector) {
    const element = document.querySelector(selector);
    if (element) {
        const currentDisplay = getComputedStyle(element).display;
        element.style.display = currentDisplay === "none" ? "block" : "none";
    }
}

// Функция для работы с utm_term
function updateHeadingFromUTM() {
    const urlParams = new URLSearchParams(window.location.search);
    const utmTerm = urlParams.get("utm_term");
    const heading = document.querySelector("h1");
    if (heading) {
        heading.textContent = utmTerm ? utmTerm : heading.textContent;
    }
}

document.addEventListener("DOMContentLoaded", () => {
    // Вызов showMessage
    showMessage("Скрипт загружен!");

    // Вызов logCurrentTime
    logCurrentTime();

    // Сброс цвета фона
    resetBackgroundColor();

    // Изменение цвета фона
    changeBackgroundColor("lightblue");

    // Переключение видимости элемента с классом .content
    toggleVisibility(".content");

    // Обновление заголовка H1
    updateHeadingFromUTM();
});

// Функция logCurrentTime
function logCurrentTime() {
    const now = new Date();
    const formattedTime = now.toTimeString().split(" ")[0];
    console.log(`Текущее время: ${formattedTime}`);
}

// Функция resetBackgroundColor
function resetBackgroundColor() {
    document.body.style.backgroundColor = "white";
}
