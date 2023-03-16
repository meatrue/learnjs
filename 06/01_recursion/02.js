/*
Вычислить факториал

Написать функцию factorial(n), которая возвращает n!, используя рекурсию.

alert( factorial(5) ); // 120
*/

function factorial(number) {
  return number === 1 ? 1 : number * factorial(number - 1);
}

console.log(factorial(5));

