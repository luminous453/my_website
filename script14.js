document.addEventListener("DOMContentLoaded", () => {
    // Находим изображение студента
    const studentImage = document.getElementById('student-photo');

    if (studentImage) {
        // Добавляем событие для вращения при наведении
        studentImage.addEventListener("mouseover", () => {
            studentImage.style.transition = "transform 0.5s ease-in-out";
            studentImage.style.transform = "rotate(360deg)";
        });

        // Возвращаемся к исходному состоянию при уходе мыши
        studentImage.addEventListener("mouseout", () => {
            studentImage.style.transition = "transform 0.5s ease-in-out";
            studentImage.style.transform = "rotate(0deg)";
        });
    } else {
        console.error("Изображение студента не найдено.");
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const paragraph = document.getElementById("paragraph1");
    if (paragraph) {
        paragraph.addEventListener("click", () => {
            paragraph.style.transition = "background-color 0.5s ease";
            paragraph.style.color = "white"
            paragraph.style.backgroundColor = "black";
        });
    }
});
const title = document.getElementById('animatedTitle');
title.addEventListener('mouseover', () => {
    title.style.transition = 'transform 0.3s ease-in-out';
    title.style.transform = 'scale(1.1)';
});

title.addEventListener('mouseout', () => {
    title.style.transform = 'scale(1)';
});