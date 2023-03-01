/*
  * Две функции - один объект

  * Возможно ли создать функции A и B, чтобы new A() == new B()?

    function A() { ... }
    function B() { ... }

    let a = new A();
    let b = new B();

    alert( a == b ); // true

  * Если да – приведите пример вашего кода.
*/

const user = {
  name: 'John',
  isAdmin: true
};

function A() {
  return user;
}

function B() {
  return user;
}

const a = new A();
const b = new B();

console.log(a === b);
