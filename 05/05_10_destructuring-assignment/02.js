/*
  *  Максимальная зарплата

  *  У нас есть объект salaries с зарплатами:

    let salaries = {
      "John": 100,
      "Pete": 300,
      "Mary": 250
    };

  *  Создайте функцию topSalary(salaries), которая возвращает имя самого высокооплачиваемого сотрудника.

      *  Если объект salaries пустой, то нужно вернуть null.
      *  Если несколько высокооплачиваемых сотрудников, можно вернуть любого из них.

  *  P.S. Используйте Object.entries и деструктурирование, чтобы перебрать пары ключ/значение.
*/

function topSalary(salaries) {
  const salaryEntries = Object.entries(salaries);
  salaryEntries.sort(([employee1, salary1], [employee2, salary2]) => salary1 - salary2);

  return salaryEntries.length ? salaryEntries.at(-1)[0] : null;
}

const salaries = {
  "John": 900,
  "Pete": 300,
  "Mary": 250,
  "Ann": 500,
  "Jerry": 450
};

console.log(topSalary(salaries));
