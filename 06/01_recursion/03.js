/*
  *  Числа Фибоначчи

  *  Напишите функцию fib(n) которая возвращает n-е число Фибоначчи.

  *  Пример работы:

    function fib(n) { ваш код }

    alert(fib(3)); // 2
    alert(fib(7)); // 13
    alert(fib(77)); // 5527939700884757
*/


// Решение с рекурсией.
function fibRecursion(n) {
  return (n === 1 || n === 2) ? 1 : fibRecursion(n-1) + fibRecursion(n-2);
}

console.log(fibRecursion(77));

// Решение без рекурсии
function fib(n) {
  if (n === 1 || n === 2) {
    return 1;
  }

  let number1 = 1;
  let number2 = 1;
  let result = 0;

  for (let i = 3; i <= n; i++) {
    result = number1 + number2;
    number1 = number2;
    number2 = result;
  }

  return result;
};

console.log(fib(77));
