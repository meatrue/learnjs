/*
  * Проверка на спам

  * Напишите функцию checkSpam(str), возвращающую true,
  * если str содержит 'viagra' или 'XXX', а иначе false.

  * Функция должна быть нечувствительна к регистру:

    checkSpam('buy ViAgRA now') == true
    checkSpam('free xxxxx') == true
    checkSpam("innocent rabbit") == false
*/

const SPAM_WORD_1 = 'viagra';
const SPAM_WORD_2 = 'xxx';

function checkSpam(text) {
  const lowerCasedText = text.toLowerCase();

  return lowerCasedText.includes(SPAM_WORD_1) || lowerCasedText.includes(SPAM_WORD_2);
}

console.log(checkSpam('buy ViAgRA now'));
console.log(checkSpam('free xxxxx'));
console.log(checkSpam('innocent rabbit'));
console.log(checkSpam());
