/*
  * Оставить уникальные элементы массива

  * Пусть arr – массив строк.

  * Напишите функцию unique(arr), которая возвращает массив,
  * содержащий только уникальные элементы arr.

  * Например:

    function unique(arr) {

    }

    let strings = ["кришна", "кришна", "харе", "харе",
      "харе", "харе", "кришна", "кришна", ":-O"
    ];

    alert( unique(strings) ); // кришна, харе, :-O
*/

function unique(items) {
  const uniqueItems = [];

  for (let item of items) {
    if (!uniqueItems.includes(item)) {
      uniqueItems.push(item);
    }
  }

  return uniqueItems;
}

const strings = ["кришна", "кришна", "харе", "харе",
"харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); // кришна, харе, :-O
