/*
  * Сделать первый символ заглавным

  * Напишите функцию ucFirst(str), возвращающую строку str с заглавным первым символом.
  * Например:

    ucFirst("вася") == "Вася";
*/

function ucFirst(word) {
  if (!word) {
    return '';
  }

  return word[0].toUpperCase() + word.slice(1);
}

console.log(ucFirst("вася"));
