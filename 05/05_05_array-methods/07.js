/*
  * Трансформировать в массив имён

  * У вас есть массив объектов user, и в каждом из них есть user.name.
  * Напишите код, который преобразует их в массив имён.

  * Например:

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let users = [ vasya, petya, masha ];

    let names = //... ваш код

    alert( names ); // Вася, Петя, Маша
*/

function getUsersNamesArray(users) {
  return users.map((user) => user.name);
}

const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 28 };

const users = [ vasya, petya, masha ];

const names = getUsersNamesArray(users);

console.log(names); // Вася, Петя, Маша
