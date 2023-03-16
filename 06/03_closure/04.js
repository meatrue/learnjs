/*
  *  Сумма с помощью замыканий

  *  Напишите функцию sum, которая работает таким образом: sum(a)(b) = a+b.

  *  Например:

    sum(1)(2) = 3
    sum(5)(-1) = 4
*/

function sum(number1) {
  return (number2) => number1 + number2;
}

console.log(sum(1)(2));
console.log(sum(5)(-1));
