/*
  *  Подсчёт количества свойств объекта

  *  Напишите функцию count(obj), которая возвращает количество свойств объекта:

    let user = {
      name: 'John',
      age: 30
    };

    alert( count(user) ); // 2

  *  Постарайтесь сделать код как можно короче.

  *  P.S. Игнорируйте символьные свойства, подсчитывайте только «обычные».
*/

const count = obj => Object.keys(obj).length;

const user = {
  name: 'John',
  age: 30,
  isAdmin: false
};

console.log(count(user)); // 2

