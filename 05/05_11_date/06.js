/*
  *  Сколько сегодня прошло секунд?

  *  Напишите функцию getSecondsToday(),
  *  возвращающую количество секунд с начала сегодняшнего дня.

  *  Например, если сейчас 10:00, и не было перехода на зимнее/летнее время, то:

    getSecondsToday() == 36000 // (3600 * 10)

  *  Функция должна работать в любой день,
  *  т.е. в ней не должно быть конкретного значения сегодняшней даты.
*/

const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;

function getSecondsToday() {
  const now = new Date();
  const secondsLeft = now.getHours() * MINUTES_IN_HOUR * SECONDS_IN_MINUTE
  +  now.getMinutes() * SECONDS_IN_MINUTE + now.getSeconds();

  return secondsLeft;
}

console.log(getSecondsToday());
