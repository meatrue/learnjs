/*
  *  Покажите день недели

  *  Напишите функцию getWeekDay(date), показывающую день недели в коротком формате:
  *  «ПН», «ВТ», «СР», «ЧТ», «ПТ», «СБ», «ВС».

  *  Например:

    let date = new Date(2012, 0, 3);  // 3 января 2012 года
    alert( getWeekDay(date) );        // нужно вывести "ВТ"
*/

function getWeekDay(date) {
  const weekDays = ['ВС', 'ПН', 'ВТ', 'СР', 'ЧТ', 'ПТ', 'СБ'];

  return weekDays[date.getDay()];
}

const date = new Date(2012, 0, 3);  // 3 января 2012 года
console.log(getWeekDay(date));        // нужно вывести "ВТ"
