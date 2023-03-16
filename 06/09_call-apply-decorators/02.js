/*
  *  Задерживающий декоратор

  *  Создайте декоратор delay(f, ms),
  *  который задерживает каждый вызов f на ms миллисекунд.
  *  Например:

    function f(x) {
      alert(x);
    }

    // создаём обёртки
    let f1000 = delay(f, 1000);
    let f1500 = delay(f, 1500);

    f1000("test"); // показывает "test" после 1000 мс
    f1500("test"); // показывает "test" после 1500 мс

  *  Другими словами, delay(f, ms) возвращает вариант f с «задержкой на ms мс».
*/

function delay(f, ms) {
  return function() {
    setTimeout(() => f.apply(this, arguments), ms);
  }
}

function f(a, b) {
  console.log(a + b);
}

// создаём обёртки
let f1000 = delay(f, 1000);
let f3000 = delay(f, 3000);

f1000(5, 8);
f3000(1, 14);
