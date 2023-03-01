/*
  Создайте функцию конструктор Calculator, которая создаёт «расширяемые» объекты калькулятора.

  Задание состоит из двух частей.

      * Во-первых, реализуйте метод calculate(str),
      * который принимает строку типа "1 + 2" в формате «ЧИСЛО оператор ЧИСЛО»
      * (разделено пробелами) и возвращает результат. Метод должен понимать плюс + и минус -.

  Пример использования:

      let calc = new Calculator;
      alert( calc.calculate("3 + 7") ); // 10

  Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
  Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

  Например, давайте добавим умножение *, деление / и возведение в степень **:

      let powerCalc = new Calculator;
      powerCalc.addMethod("*", (a, b) => a * b);
      powerCalc.addMethod("/", (a, b) => a / b);
      powerCalc.addMethod("**", (a, b) => a ** b);

      let result = powerCalc.calculate("2 ** 3");
      alert( result ); // 8

      Для этой задачи не нужны скобки или сложные выражения.
      Числа и оператор разделены ровно одним пробелом.
      Не лишним будет добавить обработку ошибок.
*/


// Затем добавьте метод addMethod(name, func), который добавляет в калькулятор новые операции.
// Он принимает оператор name и функцию с двумя аргументами func(a,b), которая описывает его.

// Например, давайте добавим умножение *, деление / и возведение в степень **:

//     let powerCalc = new Calculator;
//     powerCalc.addMethod("*", (a, b) => a * b);
//     powerCalc.addMethod("/", (a, b) => a / b);
//     powerCalc.addMethod("**", (a, b) => a ** b);

//     let result = powerCalc.calculate("2 ** 3");
//     alert( result ); // 8


const SEPARATOR = ' ';
const ERROR = {
  expressionIsEmpty: 'Математическое выражение отсутствует',
  expressionIsIncorrect: 'Введено некорректное выражение',
  operationIsNotSupported: 'Данная операция не поддерживается'
};

function Calculator() {
  this['+'] = function(number1, number2) {
    return number1 + number2;
  };

  this['-'] = function(number1, number2) {
    return number1 - number2;
  };

  this.calculate = function(string) {
    if (!string) {
      return ERROR.expressionIsEmpty;
    }

    const operationItems = string.trim().split(SEPARATOR);

    if (operationItems.length !== 3) {
      return ERROR.expressionIsIncorrect;
    }

    const operator = operationItems[1];
    const number1 = operationItems[0];
    const number2 = operationItems[2];

    if (!isFinite(number1) || !isFinite(number2)) {
      return ERROR.expressionIsIncorrect;
    }

    if (!this[operator] || typeof(this[operator]) !== 'function') {
      return ERROR.operationIsNotSupported;
    }

    return this[operator](Number(number1), Number(number2));
  };

  this.addMethod = function(name, func) {
    if (name && func) {
      this[name] = func;
    }
  }
}

const calculator = new Calculator();
console.log(calculator.calculate('4 + 13'));

const powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

const result = powerCalc.calculate("2 * 3");
console.log(result); // 8
