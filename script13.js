document.getElementById('header').addEventListener('click', () => {
    alert('Вы кликнули на заголовок - так держать!');
});
document.addEventListener("DOMContentLoaded", () => {
    const studentImage = document.querySelector("#me img");

if (studentImage) {
    studentImage.addEventListener("mouseover", () => {
        studentImage.style.transform = "scale(1.1)";
        studentImage.style.transition = "transform 0.3s";
    });

    studentImage.addEventListener("mouseout", () => {
        studentImage.style.transform = "scale(1)";
    });

    studentImage.addEventListener("click", () => {
        studentImage.src = "img/teacher.jpg";});

    studentImage.addEventListener("dblclick", () => {
        alert("Не налегай, у меня не так много любимых преподавателей");
    });
    
    } else {
    console.error("Изображение с ID #student-img не найдено.");
}
});