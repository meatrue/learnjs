/*
  *  Операции с массивами

  *  Произведём 5 операций с массивом.

  *    -  Создайте массив styles с элементами «Джаз» и «Блюз».
  *    -  Добавьте «Рок-н-ролл» в конец.
  *    -  Замените значение в середине на «Классика».
  *       Ваш код для поиска значения в середине должен работать для массивов с любой длиной.
  *    -  Удалите первый элемент массива и покажите его.
  *    -  Вставьте Рэп и Регги в начало массива.

  *  Массив по ходу выполнения операций:

  *  Джаз, Блюз
  *  Джаз, Блюз, Рок-н-ролл
  *  Джаз, Классика, Рок-н-ролл
  *  Классика, Рок-н-ролл
  *  Рэп, Регги, Классика, Рок-н-ролл
*/

const replaceMiddleArrayItem = (array, newItem) => {
  const middleIndex = Math.trunc((array.length - 1) / 2);
  array[middleIndex] = newItem;
};


const styles = ['Джаз', 'Блюз'];
console.log(styles);

styles.push('Рок-н-ролл');
console.log(styles);

replaceMiddleArrayItem(styles, 'Классика');
console.log(styles);

console.log(styles.shift());

styles.unshift('Рэп', 'Рэгги');
console.log(styles);
