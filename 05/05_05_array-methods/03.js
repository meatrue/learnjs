/*
  * Фильтрация по диапазону "на месте"

  * Напишите функцию filterRangeInPlace(arr, a, b),
  * которая принимает массив arr и удаляет из него все значения кроме тех,
  * которые находятся между a и b. То есть, проверка имеет вид a ≤ arr[i] ≤ b.

  * Функция должна изменять принимаемый массив и ничего не возвращать.

  * Например:

    let arr = [5, 3, 8, 1];

    filterRangeInPlace(arr, 1, 4); // удалены числа вне диапазона 1..4

    alert( arr ); // [3, 1]
*/

function filterRangeInPlace(items, minValue, maxValue) {
  for (let i = 0; i < items.length; i++) {
    const itemValue = items[i];

    if (itemValue < minValue || itemValue > maxValue) {
      items.splice(i, 1);
      i--;
    }
  }
}

const array = [5, 3, 8, 1];

filterRangeInPlace(array, 1, 4); // удалены числа вне диапазона 1..4

console.log( array ); // [3, 1]
