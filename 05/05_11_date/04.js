/*
  *  Какой день месяца был много дней назад?

  *  Создайте функцию getDateAgo(date, days), возвращающую число,
  *  которое было days дней назад от даты date.

  *  К примеру, если сегодня двадцатое число, то getDateAgo(new Date(), 1)
  *  вернёт девятнадцатое и getDateAgo(new Date(), 2) – восемнадцатое.

  *  Функция должна надёжно работать при значении days=365 и больших значениях:

    let date = new Date(2015, 0, 2);

    alert( getDateAgo(date, 1) ); // 1, (1 Jan 2015)
    alert( getDateAgo(date, 2) ); // 31, (31 Dec 2014)
    alert( getDateAgo(date, 365) ); // 2, (2 Jan 2014)

  *  P.S. Функция не должна изменять переданный ей объект date.
*/

const HOURS_IN_DAY = 24;
const MINUTES_IN_HOUR = 60;
const SECONDS_IN_MINUTE = 60;
const MILLISECONDS_IN_SECOND = 1000;

function getDateAgo(date, days) {
  const millisecondsInDate = date.getTime();
  const millisecondsLeft = getMillisecondsFromDays(days);
  const dateAgo = new Date(millisecondsInDate - millisecondsLeft);

  return dateAgo.getDate();
}

function getMillisecondsFromDays(days) {
  return days * HOURS_IN_DAY * MINUTES_IN_HOUR * SECONDS_IN_MINUTE * MILLISECONDS_IN_SECOND;
}

const date = new Date(2015, 0, 2);

console.log(getDateAgo(date, 1)); // 1, (1 Jan 2015)
console.log(getDateAgo(date, 2)); // 31, (31 Dec 2014)
console.log(getDateAgo(date, 365)); // 2, (2 Jan 2014)
