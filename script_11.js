const h1 = document.querySelector('h1');
if (h1) {
    h1.textContent = "Добро пожаловать на наш сайт!!!";
}

const h2 = document.querySelector('h2');
if (h2) {
    h2.style.color = 'red';
}

const firstParagraph = document.querySelector('p');
if (firstParagraph) {
    firstParagraph.textContent = "Это новый текст параграфа.";
}

const video = document.querySelector('video');
if (video) {
    video.style.display = 'none';
}