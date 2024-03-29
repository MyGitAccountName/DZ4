let a, b;
const mile = 0.621371;

function fSqr() {
    a = prompt("Число для возведения в квадрат: ");
    if (isNaN(+a))
        alert("Ошибка в исходных данных!");
    else
        alert(a + " в степени 2 равняется " + (+a) ** 2);
}

function fAvg() {
    a = prompt("Введите первое число: ");
    b = prompt("Введите второе число: ");
    if (isNaN(+a) || isNaN(+b))
        alert("Ошибка в исходных данных!");
    else
        alert("Среднее арифметическое чисел " + a + " и " + b + " равняется " + (((+a) + (+b))/2) );
}

function fSquare() {
    a = prompt("Укажите длину стороны квадрата: ");
    if (isNaN(+a) || (+a <= 0))
        alert("Ошибка в исходных данных!");
    else
        alert("Площадь квадрата со стороной " + a + " равна " + (+a) ** 2);
}

function fConv() {
    a = prompt("Расстояние в километрах: ");
    if (isNaN(+a))
        alert("Ошибка в исходных данных!");
    else
        alert(a + " километров = " + (+a) * mile + " миль");
}

function fCalc() {
    a = prompt("Введите первое число: ");
    b = prompt("Введите второе число: ");
    if (isNaN(+a) || isNaN(+b))
        alert("Ошибка в исходных данных!");
    else
        alert(a + " + " + b + " = " + ((+a) + (+b)) + '\n' +
            a + " - " + b + " = " + ((+a) - (+b)) + '\n' +
            a + " * " + b + " = " + ((+a) * (+b)) + '\n' +
            a + " / " + b + " = " + ((+a) / (+b)));
}

function fEq() {
    a = prompt("Для формулы a * x + b = 0  введите коэффициент a: ");
    b = prompt("Для формулы a * x + b = 0  введите коэффициент b: ");
    if (isNaN(+a) || isNaN(+b))
        alert("Ошибка в исходных данных!");
    else
        alert("x = " + ((+b) * (-1) / (+a)));
}

function fTime() {
    a = prompt("Текущее время (часы): ");
    b = prompt("Текущее время (минуты): ");
    if (isNaN(+a) || isNaN(+b) || (+a < 0) || (+a > 23) || (+b < 0) || (+b > 59))
        alert("Ошибка в исходных данных!");
    else {
        if ((+a < 0) || (+a > 23) || (+b < 0) || (+b > 59))
            alert("Неправильно указано время!");
        else if ((+b) === 0)
            alert("До завтра осталось " + (24 - (+a)) + " часов");
        else
            alert("До завтра осталось " + (23 - (+a)) + " часов " + (60 - (+b)) + " минут");
    }
}

function fXXX() {
    a = prompt("Введите трёхзначное число: ");
    if ((+a > -1000) && (+a < -99) || (+a > 99) && (+a < 1000))
        alert("Вторая цифра числа " + a + ": " + ((+a) % 100 - (+a) % 10) / 10);
    else
        alert("Задано не трёхзначное число!");
}

function fXXXXX() {
    a = prompt("Введите пятизначное число: ");
    if ((+a > -100000) && (+a < -9999) || (+a > 9999) && (+a < 100000)) {
        a = (+a) % 10 * 10000 + (+a.slice(0, -1));
        alert("Изменённое число: " + a);
    } else
        alert("Задано не пятизначное число!");
}

function fSalary() {
    a = prompt("Введите общую сумму продаж ($): ");
    if (isNaN(+a))
        alert("Ошибка в исходных данных!");
    else
        alert("Зарплата работника: " + ((+a) / 10 + 250) + '$');
}