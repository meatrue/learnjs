/*
  *  Класс расширяет объект?

  *  Как мы уже знаем, все объекты наследуют от Object.prototype
  *  и имеют доступ к «общим» методам объекта, например hasOwnProperty.
  *  Но что если мы явно напишем "class Rabbit extends Object"
  *  – тогда результат будет отличаться от обычного "class Rabbit"?
  *  Ниже пример кода с таким наследованием (почему он не работает? исправьте его):
*/

class Rabbit extends Object {
  __Proto__ = Object.__Proto__;

  constructor(name) {
    super();
    this.name = name;
  }
}

const rabbit = new Rabbit("Rab");

// метод hasOwnProperty от Object.prototype
console.log( rabbit.hasOwnProperty('name') ); // true
