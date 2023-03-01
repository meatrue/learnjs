/*
  * Отсортировать пользователей по возрасту

  * Напишите функцию sortByAge(users), которая принимает массив объектов со свойством age и сортирует их по нему.

  * Например:

    let vasya = { name: "Вася", age: 25 };
    let petya = { name: "Петя", age: 30 };
    let masha = { name: "Маша", age: 28 };

    let arr = [ vasya, petya, masha ];

    sortByAge(arr);

    // теперь: [vasya, masha, petya]
    alert(arr[0].name); // Вася
    alert(arr[1].name); // Маша
    alert(arr[2].name); // Петя
*/

function sortByAge(users) {
  return users.sort((user1, user2) => user1.age - user2.age);
}

const vasya = { name: "Вася", age: 25 };
const petya = { name: "Петя", age: 30 };
const masha = { name: "Маша", age: 28 };

const arr = [ vasya, petya, masha ];

sortByAge(arr);

console.log(arr);
