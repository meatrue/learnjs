/*
  * Умножаем все числовые свойства на 2

  * Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

  * Например:
  * до вызова функции
    let menu = {
      width: 200,
      height: 300,
      title: "My menu"
    };

    multiplyNumeric(menu);

  * после вызова функции
    menu = {
      width: 400,
      height: 600,
      title: "My menu"
    };

  * multiplyNumeric не нужно ничего возвращать. Следует напрямую изменять объект.
*/

function multiplyNumeric(object) {
  const multiplier = 2;

  for (let key in object) {
    if (typeof(object[key]) === 'number') {
      object[key] *= multiplier;
    }
  }
}

const menu = {
  width: 200,
  height: 300,
  title: "My menu"
};

console.log(menu);

multiplyNumeric(menu);

console.log(menu);

