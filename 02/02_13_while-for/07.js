// Вывести простые числа

// Напишите код, который выводит все простые числа из интервала от 2 до n.
// P.S. Код также должен легко модифицироваться для любых других интервалов.

const FIRST_NUMBER = 2;
const LAST_NUMBER = 10;

outer:
for (let i = FIRST_NUMBER; i <= LAST_NUMBER; i++) {
  for (let j = FIRST_NUMBER; j < i; j++) {
    if (i % j === 0) {
      continue outer;
    }
  }

  console.log(i);
}

