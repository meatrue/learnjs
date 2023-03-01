/*
  * Перемешайте массив

  * Напишите функцию shuffle(array),
  * которая перемешивает (переупорядочивает случайным образом) элементы массива.

  * Многократные прогоны через shuffle могут привести к разным последовательностям элементов. Например:

    let arr = [1, 2, 3];

    shuffle(arr);
    // arr = [3, 2, 1]

    shuffle(arr);
    // arr = [2, 1, 3]

    shuffle(arr);
    // arr = [3, 1, 2]
    // ...

  * Все последовательности элементов должны иметь одинаковую вероятность.
  * Например, [1,2,3] может быть переупорядочено как [1,2,3] или [1,3,2], или [3,1,2] и т.д.,
  * с равной вероятностью каждого случая.
*/

function shuffle(elements) {
  const elementsCount = elements.length;
  const shuffledElements = [];

  while (shuffledElements.length < elementsCount) {
    const randomIndex = getRandomInteger(0, elementsCount - 1);

    if (!shuffledElements.includes(elements[randomIndex])) {
      shuffledElements.push(elements[randomIndex]);
    }
  }

  return shuffledElements;
}

function getRandomInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

const array = [1, 2, 3];

console.log(shuffle(array));
console.log(shuffle(array));
console.log(shuffle(array));
console.log(shuffle(array));
