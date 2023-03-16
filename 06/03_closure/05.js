/*
Фильтрация с помощью функции

  *  Сделайте набор «готовых к употреблению» фильтров:
      *  inBetween(a, b) – между a и b (включительно).
      *  inArray([...]) – находится в данном массиве.

  *  Они должны использоваться таким образом:
      *  arr.filter(inBetween(3,6)) – выбирает только значения между 3 и 6 (включительно).
      *  arr.filter(inArray([1,2,3])) – выбирает только элементы, совпадающие с одним из элементов массива

  *  Например:

    let arr = [1, 2, 3, 4, 5, 6, 7];
    alert( arr.filter(inBetween(3, 6)) ); // 3,4,5,6
    alert( arr.filter(inArray([1, 2, 10])) ); // 1,2
*/

function inBetween(value1, value2) {
  return (value) => (value1 <= value) && (value <= value2);
}

function inArray(array) {
  return (value) => array.includes(value);
}

const array = [1, 2, 3, 4, 5, 6, 7];

console.log(array.filter(inBetween(3, 6)));
console.log(array.filter(inArray([1, 2, 10])));
