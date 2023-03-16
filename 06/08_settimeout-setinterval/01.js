/*
  *  Вывод каждую секунду

  *  Напишите функцию printNumbers(from, to),
  *  которая выводит число каждую секунду, начиная от from и заканчивая to.

  *  Сделайте два варианта решения.

  *      Используя setInterval.
  *      Используя рекурсивный setTimeout.
*/

//setInterval
function printNumbers1(from, to) {
  let count = from;

  const timerId = setInterval(() => {
    console.log(count);

    if (count === to) {
      clearInterval(timerId);
    }

    count++;
  }, 1000);
}


// setTimeout
function printNumbers2(from, to) {
  let count = from;

  setTimeout(function printNumber() {
    console.log(count);

    if (count < to) {
      count++;
      setTimeout(printNumber, 1000);
    }
  }, 1000);
}

//printNumbers2(5, 10);

printNumbers1(5, 10);
