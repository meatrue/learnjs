/*
  *  Форматирование относительной даты

  *  Напишите функцию formatDate(date),
  *  форматирующую date по следующему принципу:

      *  Если спустя date прошло менее 1 секунды, вывести "прямо сейчас".
      *  В противном случае, если с date прошло меньше 1 минуты, вывести "n сек. назад".
      *  В противном случае, если меньше часа, вывести "m мин. назад".
      *  В противном случае, полная дата в формате "DD.MM.YY HH:mm".
      *  А именно: "день.месяц.год часы:минуты", всё в виде двух цифр, т.е. 31.12.16 10:00.

  *  Например:

    alert( formatDate(new Date(new Date - 1)) ); // "прямо сейчас"

    alert( formatDate(new Date(new Date - 30 * 1000)) ); // "30 сек. назад"

    alert( formatDate(new Date(new Date - 5 * 60 * 1000)) ); // "5 мин. назад"

    // вчерашняя дата вроде 31.12.2016, 20:00
    alert( formatDate(new Date(new Date - 86400 * 1000)) );
*/

const MILISECONDS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;

function formatDate(date) {
  const now = new Date();
  const difference = now - date;

  if (difference < MILISECONDS_IN_SECOND) {
    return 'прямо сейчас';
  }

  const minute = MILISECONDS_IN_SECOND * SECONDS_IN_MINUTE;

  if (difference < minute) {
    return `${getSecondsFromMiliseconds(difference)} сек. назад`;
  }

  const hour =  MILISECONDS_IN_SECOND * SECONDS_IN_MINUTE * MINUTES_IN_HOUR;

  if (difference < hour) {
    return `${getMinutesFromMiliseconds(now - date)} мин. назад`;
  }

  return getFullFormattedDate(date);
}

function getSecondsFromMiliseconds(miliseconds) {
  return Math.round(miliseconds / MILISECONDS_IN_SECOND);
}

function getMinutesFromMiliseconds(miliseconds) {
  return Math.round(miliseconds / MILISECONDS_IN_SECOND / SECONDS_IN_MINUTE);
}

function getFullFormattedDate(date) {
  const paddedDay = addLeadngZero(String(date.getDate()));
  const paddedMonth = addLeadngZero(String(date.getMonth() + 1));
  const paddedYear = addLeadngZero(String(date.getFullYear()).slice(2));
  const paddedHours = addLeadngZero(String(date.getHours()));
  const paddedMinutes = addLeadngZero(String(date.getMinutes()));

  const formattedDateStrig = `${paddedDay}.${paddedMonth}.${paddedYear} ${paddedHours}:${paddedMinutes}`;

  return formattedDateStrig;
}

function addLeadngZero(string) {
  return string.length < 2 ? `0${string}` : string;
}

console.log(formatDate(new Date(new Date - 1))); // "прямо сейчас"

console.log(formatDate(new Date(new Date - 30 * 1000))); // "30 сек. назад"

console.log(formatDate(new Date(new Date - 5 * 60 * 1000))); // "5 мин. назад"

// вчерашняя дата вроде 31.12.2016, 20:00
console.log(formatDate(new Date(new Date - 86400 * 1000)));
