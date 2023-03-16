/*
  *  Вывод односвязного списка

  *  Допустим, у нас есть односвязный список:

    let list = {
      value: 1,
      next: {
        value: 2,
        next: {
          value: 3,
          next: {
            value: 4,
            next: null
          }
        }
      }
    };

  *  Напишите функцию printList(list), которая выводит элементы списка по одному.

  *  Сделайте два варианта решения: используя цикл и через рекурсию.
*/

// Рекурсия
function printListRecursion(list) {
  console.log(list.value);

  if (list.next) {
    printListRecursion(list.next);
  }
};

const list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};

printListRecursion(list);

// Цикл
function printList(list) {
  let item = list;

  while (item) {
    console.log(item.value);
    item = item.next;
  }
}

printList(list);
