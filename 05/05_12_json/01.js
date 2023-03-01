/*
  *  Преобразуйте объект в JSON, а затем обратно в обычный объект

  *  Преобразуйте user в JSON, затем прочитайте этот JSON в другую переменную.

    let user = {
      name: "Василий Иванович",
      age: 35
    };
*/

const user = {
  name: "Василий Иванович",
  age: 35
};

const newUser = JSON.parse(JSON.stringify(user));
console.log(newUser);
