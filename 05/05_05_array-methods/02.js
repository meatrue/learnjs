/*
  * Фильтрация по диапазону

  * Напишите функцию filterRange(arr, a, b), которая принимает массив arr,
  * ищет элементы со значениями больше или равными a и меньше или равными b
  * и возвращает результат в виде массива.

  * Функция должна возвращать новый массив и не изменять исходный.

  * Например:

    let arr = [5, 3, 8, 1];

    let filtered = filterRange(arr, 1, 4);

    alert( filtered ); // 3,1 (совпадающие значения)

    alert( arr ); // 5,3,8,1 (без изменений)
*/

function filterRange(array, minValue, maxValue) {
  return array.filter((item) => item >= minValue && item <= maxValue);
}

const array = [5, 3, 8, 1];

const filtered = filterRange(array, 1, 4);

console.log(filtered);
console.log(array);
