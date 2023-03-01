/*
  * Отфильтруйте анаграммы

  * Анаграммы – это слова, у которых те же буквы в том же количестве, но они располагаются в другом порядке.

  * Например:

    nap - pan
    ear - are - era
    cheaters - hectares - teachers

  * Напишите функцию aclean(arr), которая возвращает массив слов, очищенный от анаграмм.

  * Например:

    let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

    alert( aclean(arr) ); // "nap,teachers,ear" или "PAN,cheaters,era"

  * Из каждой группы анаграмм должно остаться только одно слово, не важно какое.
*/

function aclean(words) {
  const wordsMap = new Map();

  words.forEach((word) => {
    const wordLetters = word.toLowerCase().split('').sort().join('');
    wordsMap.set(wordLetters, word);
  });

 return Array.from(wordsMap.values());
}


const arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr));
