/*
  *  Сумма с произвольным количеством скобок

  *  Напишите функцию sum, которая бы работала следующим образом:

    sum(1)(2) == 3; // 1 + 2
    sum(1)(2)(3) == 6; // 1 + 2 + 3
    sum(5)(-1)(2) == 6
    sum(6)(-1)(-2)(-3) == 0
    sum(0)(1)(2)(3)(4)(5) == 15

  *  P.S. Подсказка: возможно вам стоит сделать
  *  особый метод преобразования в примитив для функции.
*/

function sum(number1) {
  const counter = (number2) => {
    counter.sum += number2;
    return counter;
  }

  counter.sum = number1;

  counter.toString = () => counter.sum;

  return counter;
}

console.log(sum(1)(2) == 3);
console.log(sum(5)(-1)(2) == 6);
console.log(sum(6)(-1)(-2)(-3) == 0);
console.log(sum(0)(1)(2)(3)(4)(5) == 15);
