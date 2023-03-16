/*
  *  Установка и уменьшение значения счётчика

  *  Измените код makeCounter() так,
  *  чтобы счётчик мог уменьшать и устанавливать значение:

      *  counter() должен возвращать следующее значение (как и раньше).
      *  counter.set(value) должен устанавливать счётчику значение value.
      *  counter.decrease() должен уменьшать значение счётчика на 1.

  *  P.S. Для того, чтобы сохранить текущее значение счётчика,
  *  можно воспользоваться как замыканием, так и свойством функции.
  *  Или сделать два варианта решения: и так, и так.
*/

// С использованием замыкания
function makeCounter1() {
  let count = 0;

  return function counter() {
    counter.decrease = () => --count;

    counter.set = (value) => {
      count = value
    };

    return ++count;
  };
}

// Без замыкания
function makeCounter() {
  const counterFunction = function counter() {
    counter.decrease = () => --counter.count;

    counter.set = (value) => {
      counter.count = value
    };

    return ++counter.count;
  };

  counterFunction.count = 0;

  return counterFunction;
}

const counter = makeCounter();
console.log(counter());
console.log(counter());
console.log(counter());
counter.set(10);
console.log(counter.decrease());
console.log(counter.decrease());
console.log(counter.decrease());
