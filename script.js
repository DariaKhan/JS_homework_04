/*
Задание 1
Необходимо с помощью цикла for вывести следующие 11 строк в консоль:
0 – это ноль
1 – нечетное число
2 – четное число
3 – нечетное число
…
10 – четное число
*/

for (let i = 0; i <=10; i++) {
    if (i == 0) {
        console.log(i + ' - это ноль');
    } else if (i % 2 == 0) {
        console.log(i + ' - четное число');
    } else {
        console.log(i + ' - нечетное число');
    }
}
/*
Задание 2
Дан массив [1, 2, 3, 4, 5, 6, 7]
Сделайте из этого массива следующий [1, 2, 3, 6, 7]
*/
let arr = [1, 2, 3, 4, 5, 6, 7];
arr.splice(3, 2);
console.log(arr);
/*
Задание 3
Используя Math.random() вам необходимо генерировать цифры от 0 до 9, и создать массив состоящий из 5 таких элементов
1. Рассчитать сумму элементов этого массива
2. Найти минимальное число
3. Найти есть ли в этом массиве число 3
*/

let arraySecond = [];
for (let i = 0; i < 5; i++) {
    arraySecond[i] = Math.floor(Math.random() * 10);
}
console.log(arraySecond);

let sum = 0;
let minNumber = arraySecond[0];
for (let i = 0; i < arraySecond.length; i++) {
    sum += arraySecond[i];
    if (arraySecond[i] < minNumber) {
        minNumber = arraySecond[i];
    }
}
console.log('Сумма элементов массива равна ' + sum);
console.log('Минимальное число в массиве равно ' + minNumber);

if (arraySecond.includes(3)) {
    console.log('В массиве есть число 3');
} else {
    console.log('В массиве нет числа 3');
}
/*
Необязательное задание. *
Необходимо вывести горку в консоль (используя цикл for), как показано на рисунке, только у вашей горки должно быть 20 рядов, а не 5:

x
xx
xxx
xxxx
xxxxx
*/

for (let i = 0; i < 20; i++) {
    console.log('x'.repeat(i));
}

