// Убедитесь, что DOM полностью загружен перед выполнением кода
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("modal");
    const btn_1 = document.getElementById("openModal1");
    const btn_2 = document.getElementById("openModal2");
    const btn_3 = document.getElementById("openModal3");
    const span = document.getElementsByClassName("close")[0];
    const form = document.getElementById("contactForm");
    const successMessage = document.getElementById("successMessage");

    // Открытие модального окна
    [btn_1, btn_2, btn_3].forEach(btn => {
        btn.onclick = () => {
            modal.style.display = "block";
        };
    });

    // Закрытие модального окна (крестик)
    span.onclick = () => {
        modal.style.display = "none";
    };

    // Закрытие модального окна при клике на фон
    window.onclick = event => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    };

    // Объект formData
    const formData = {
        name: "",
        email: "",
        phone: "",
        date: "",
        comment: "",
        // Метод для вывода данных в консоль
        printData: function () {
            console.log("Собранные данные:");
            console.log(`Имя: ${this.name}`);
            console.log(`E-mail: ${this.email}`);
            console.log(`Телефон: ${this.phone}`);
            console.log(`Дата: ${this.date}`);
            console.log(`Комментарий: ${this.comment}`);
        }
    };

    // Функция для обработки формы
    function submitForm(event) {
        event.preventDefault(); // Предотвращаем стандартное поведение формы

        // Считываем данные из формы
        const name = form.querySelector("[name='name']");
        const email = form.querySelector("[name='email']");
        const phone = form.querySelector("[name='phone']");
        const date = form.querySelector("[name='date']");
        const comment = form.querySelector("[name='comment']");

        if (!name || !email || !comment) {
            alert("Поля 'Имя', 'E-mail' и 'Комментарий' обязательны для заполнения.");
            return;
        }

        // Получаем значения
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone ? phone.value.trim() : "";
        const dateValue = date ? date.value.trim() : "";
        const commentValue = comment.value.trim();

        // Проверки
        if (!nameValue || !emailValue || !commentValue) {
            alert("Поля 'Имя', 'E-mail' и 'Комментарий' обязательны для заполнения.");
            return;
        }

        if (phoneValue && !/^\d+$/.test(phoneValue)) {
            alert("Поле 'Телефон' должно содержать только цифры.");
            return;
        }

        if (!/^\S+@\S+\.\S+$/.test(emailValue)) {
            alert("Введите корректный e-mail.");
            return;
        }

        // Записываем данные в объект formData
        formData.name = nameValue;
        formData.email = emailValue;
        formData.phone = phoneValue || "Не указан";
        formData.date = dateValue || "Не указана";
        formData.comment = commentValue;

        // Выводим данные в консоль
        formData.printData();

        // Показываем сообщение об успехе
        successMessage.style.display = "block";

        // Закрываем модальное окно через 2 секунды
        setTimeout(() => {
            modal.style.display = "none";
            successMessage.style.display = "none";
            form.reset(); // Сбрасываем форму
        }, 2000);
    }

    // Обработчик отправки формы
    form.addEventListener("submit", submitForm);
});
