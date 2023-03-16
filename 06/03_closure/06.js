/*
  *  Сортировать по полю

  *  У нас есть массив объектов, который нужно отсортировать:

    let users = [
      { name: "John", age: 20, surname: "Johnson" },
      { name: "Pete", age: 18, surname: "Peterson" },
      { name: "Ann", age: 19, surname: "Hathaway" }
    ];

  *  Напишите функцию byField, которая может быть использована для этого следующим образом:

    users.sort(byField('name'));
    users.sort(byField('age'));
*/

function byField(fieldName) {
  return (object1, object2) => {
    if(object1[fieldName] > object2[fieldName]) return 1;

    if(object1[fieldName] < object2[fieldName]) return -1;

    if(object1[fieldName] === object2[fieldName]) return 0;
  };
}

const users = [
  { name: "John", age: 20, surname: "Johnson" },
  { name: "Pete", age: 18, surname: "Peterson" },
  { name: "Ann", age: 19, surname: "Hathaway" }
];

users.sort(byField('name'));
console.log(users);
users.sort(byField('age'));
console.log(users);
