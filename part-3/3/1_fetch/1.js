/*
  *  Получите данные о пользователях GitHub

  *  Создайте асинхронную функцию getUsers(names),
  *  которая получает на вход массив логинов пользователей GitHub,
  *  запрашивает у GitHub информацию о них и возвращает массив объектов-пользователей.

  *  Важные детали:

      *  На каждого пользователя должен приходиться один запрос fetch.
      *  Запросы не должны ожидать завершения друг друга. Надо, чтобы данные приходили как можно быстрее.
      *  Если какой-то запрос завершается ошибкой или оказалось,
      *  что данных о запрашиваемом пользователе нет, то функция должна
      *  возвращать null в массиве результатов.
*/

const SERVER_URL = 'https://api.github.com/users/';

async function getUsers(names) {
  const users = [];

  names.forEach((name) => {
    const request = SERVER_URL + name;
    getData(
      request,
      (result) => users.push(result)
    );
  });

  const results = await Promise.all(users);
  return results;
}

async function getData(request, onGetResult) {
  try {
    const response = await fetch(request);

    if (!response.ok) {
      throw new Error();
    }

    const result = await response.json();
    onGetResult(result);
  } catch (err) {
    onGetResult(null);
  }
}
