/*
  * Сортировать в порядке по убыванию

    let arr = [5, 2, 1, -10, 8];

    // ... ваш код для сортировки по убыванию

    alert( arr ); // 8, 5, 2, 1, -10
*/

function sortReduce(items) {
  return items.sort((item1, item2) => item2 - item1);
}

let array = [5, 2, 1, -10, 8];

console.log(sortReduce(array)); // 8, 5, 2, 1, -10
