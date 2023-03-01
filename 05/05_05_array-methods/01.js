/*
  * Переведите текст вида border-left-width в borderLeftWidth

  * Напишите функцию camelize(str),
  * которая преобразует строки вида «my-short-string» в «myShortString».
  * Дефисы удаляются, а все слова после них получают заглавную букву.

  * Примеры:

    camelize("background-color") == 'backgroundColor';
    camelize("list-style-image") == 'listStyleImage';
    camelize("-webkit-transition") == 'WebkitTransition';

  * P.S. Подсказка: используйте split, чтобы разбить строку на массив символов,
  * потом переделайте всё как нужно и методом join соедините обратно.
*/


const SEPARATOR = '-';

function camelize(str) {
  return str
    .split(SEPARATOR)
    .map((word, index) => index === 0 ? word : capitalizeFirstLetter(word))
    .join('');
}

function capitalizeFirstLetter(text) {
  return text[0].toUpperCase() + text.slice(1)
}

console.log(camelize("background-color"));
console.log(camelize("list-style-image"));
console.log(camelize("-webkit-transition"));
