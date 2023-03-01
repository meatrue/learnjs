/*
  * Фильтрация уникальных элементов массива

  * Допустим, у нас есть массив arr.

  * Создайте функцию unique(arr), которая вернёт массив уникальных, не повторяющихся значений массива arr.

  * Например:

    function unique(arr) {

    }

    let values = ["Hare", "Krishna", "Hare", "Krishna",
      "Krishna", "Krishna", "Hare", "Hare", ":-O"
    ];

    alert( unique(values) ); // Hare,Krishna,:-O

  * P.S. Здесь мы используем строки, но значения могут быть любого типа.

  * P.P.S. Используйте Set для хранения уникальных значений.
*/

function unique(array) {
  return Array.from(new Set(array));
}

const values = ["Hare", "Krishna", "Hare", "Krishna",
"Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); // Hare,Krishna,:-O
