const btn_30 = document.getElementById("button-script");
btn_30.onclick = function() {
    //Задание 1
    let userAge = prompt("Введите ваш возраст:");
    if (userAge >= 18) {
        alert("Вы совершеннолетний.");
    } else {
        alert("Вы несовершеннолетний.");
    }
    //Задание 2
    for(let i = 0; i < 11; i++){
        console.log(i)
    }
    let num = 10;
    while(num > 0){
        console.log(num);
        num--;
    }
    //Задание 3
    const lectures = ['Тема 1', 'Тема 2', 'Тема 3'];
    const practices = ['Практика 1', 'Практика 2', 'Практика 3'];

    lectures.push('Тема 4');
    practices.unshift('Практика 0');

    console.log('Лекции:');
    lectures.forEach((lecture) => console.log(lecture));
    console.log('Практики:');
    practices.forEach((practice) => console.log(practice));

    function arrayToString(array) {
        return array.join(', ');
    }
    console.log('Лекции:', arrayToString(lectures));
    console.log('Практики:', arrayToString(practices));

    //Задание 4
    const lectures_1 = ['ОТема 1', 'Тема 2', 'Тема 3', 'ОТема 4'];

    function filterLectures(array) {
        return array.filter((lecture) => lecture.startsWith('О'));
    }

    const lectures_WithO = filterLectures(lectures_1);
    console.log('Темы, начинающиеся с буквы "О":', lectures_WithO);

}
