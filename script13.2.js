const topicsTable = document.getElementById('lekcii').getElementsByTagName('tbody')[0];
const semesterBtn = document.getElementById('semester-btn');

semesterBtn.addEventListener('click', () => {
    const secondSemesterTopics = [
        'Базовое бэкенд-приложение',
        'HTTP-запросы',
        'JSON и работа с ним',
        'HTTP-ответы',
        'Проектирование API',
        'Роутинг и его настройка',
        'NoSQL базы данных',
        'Обеспечение авторизации и доступа пользователей',
        'Работа сторонних сервисов уведомления и авторизации',
        'Основы ReactJS',
        'Работа с компонентами динамической DOM',
        'Использование хуков в React',
        'Основы микросервисной архитектуры',
        'Разработка классических модулей веб-приложений'
    ];

    topicsTable.innerHTML = '';
    secondSemesterTopics.forEach((topic, index) => {
        const row = topicsTable.insertRow();
        row.insertCell(0).textContent = index + 1;
        row.insertCell(1).textContent = topic;
    });
});
