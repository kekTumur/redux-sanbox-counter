Чистая функция
    1. Возвращаемое значение зависит только от аргументов
    2. У функции нет побочных эффектов

(a, b) => a > b ? a : b - Чистая ф-ия
(a) => Math.random() * a - не чистая ф-ия

const render = () => { 
    document.getElementById('root') ----- не чистая функция
        .innerHTML = 'h1';
};

const render = (el) => {
    el.innerHTML = 'hi'   ----- не чистая функция
}