/*
  *  Вывод односвязного списка в обратном порядке
  *  Выведите односвязный список из предыдущего задания обратном порядке.
  *  Сделайте два решения: с использованием цикла и через рекурсию.
*/

// Рекурсия
function printListRecursion(list) {
  if (list.next) {
    printListRecursion(list.next);
  }

  console.log(list.value);
}

//Цикл
function printList(list) {
  let item = list;
  const items = [];

  while (item) {
    items.push(item.value);
    item = item.next;
  }

  for (let i = items.length - 1; i >= 0; i--) {
    console.log(items[i]);
  }
}

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
printList(list);
