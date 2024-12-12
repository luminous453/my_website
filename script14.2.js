document.addEventListener("DOMContentLoaded", () => {
    const button = document.getElementById('showLectures');
    const table = document.getElementById('lectures');

    if (button && table) {
        button.addEventListener("click", () => {
            table.classList.toggle("show");
        });
    }
});