/*
  *  Сколько секунд осталось до завтра?

  *  Создайте функцию getSecondsToTomorrow(),
  *  возвращающую количество секунд до завтрашней даты.

  *  Например, если сейчас 23:00, то:

    getSecondsToTomorrow() == 3600

  *  P.S. Функция должна работать в любой день,
  *  т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

const MILLISECONDS_IN_SECOND = 1000;

function getSecondsToTomorrow() {
  const now = new Date();

  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);

  return Math.round((tomorrow - now) / MILLISECONDS_IN_SECOND);
}

console.log(getSecondsToTomorrow());
