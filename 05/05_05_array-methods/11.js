/*
  * Получить средний возраст

  * Напишите функцию getAverageAge(users),
  * которая принимает массив объектов со свойством age и возвращает средний возраст.

  * Формула вычисления среднего арифметического значения: (age1 + age2 + ... + ageN) / N.

  * Например:

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 29 };

    let arr = [ vasya, petya, masha ];

    alert( getAverageAge(arr) ); // (25 + 30 + 29) / 3 = 28
*/

function getAverageAge(users) {
  const usersCount = users.length;
  const totalAge = users.reduce((totalAge, user) => totalAge + user.age, 0);

  return totalAge / usersCount;
}

const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 29 };

const array = [ vasya, petya, masha ];

console.log( getAverageAge(array) ); // (25 + 30 + 29) / 3 = 28
