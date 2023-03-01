/*
  * Скопировать и отсортировать массив

  * У нас есть массив строк arr. Нужно получить отсортированную копию, но оставить arr неизменённым.

  * Создайте функцию copySorted(arr), которая будет возвращать такую копию.

    let arr = ["HTML", "JavaScript", "CSS"];

    let sorted = copySorted(arr);

    alert( sorted ); // CSS, HTML, JavaScript
    alert( arr ); // HTML, JavaScript, CSS (без изменений)
*/

function copySorted(array) {
  return array.slice().sort();
}

const array = ["HTML", "JavaScript", "CSS"];

const sorted = copySorted(array);

console.log(sorted); // CSS, HTML, JavaScript
console.log(array); // HTML, JavaScript, CSS (без изменений)
