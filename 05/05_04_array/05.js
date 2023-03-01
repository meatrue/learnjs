/*
  * Подмассив наибольшей суммы

  * На входе массив чисел, например: arr = [1, -2, 3, 4, -9, 6].
  * Задача: найти непрерывный подмассив в arr, сумма элементов в котором максимальна.
  * Функция getMaxSubSum(arr) должна возвращать эту сумму.

  * Например:
    getMaxSubSum([-1, 2, 3, -9]) == 5 (сумма выделенных элементов)
    getMaxSubSum([2, -1, 2, 3, -9]) == 6
    getMaxSubSum([-1, 2, 3, -9, 11]) == 11
    getMaxSubSum([-2, -1, 1, 2]) == 3
    getMaxSubSum([100, -9, 2, -3, 5]) == 100
    getMaxSubSum([1, 2, 3]) == 6 (берём все)

  * Если все элементы отрицательные – ничего не берём(подмассив пустой) и сумма равна «0»:

    getMaxSubSum([-1, -2, -3]) = 0
*/

function getMaxSubSum(items) {
  let maxSum = 0;

  for (let i = 0; i < items.length; i++) {
    let sum = 0;

    for (let j = i; j < items.length; j++ ) {
      sum += items[j];
      maxSum = Math.max(sum, maxSum);
    }
  }

  return maxSum;
};

console.log(getMaxSubSum([-1, 2, 3, -9]));
console.log(getMaxSubSum([2, -1, 2, 3, -9]));
console.log(getMaxSubSum([-1, 2, 3, -9, 11]));
console.log(getMaxSubSum([-2, -1, 1, 2]));
console.log(getMaxSubSum([100, -9, 2, -3, 5]));
console.log(getMaxSubSum([1, 2, 3]));

function getMaxSubSumFast(items) {
  let maxSum = 0;
  let sum = 0;

  for (let item of items) {
    sum += item;

    if (sum < 0) {
      sum = 0;
    }

    maxSum = Math.max(maxSum, sum);
  }

  return maxSum;
};

console.log(getMaxSubSumFast([-1, 2, 3, -9]));
console.log(getMaxSubSumFast([2, -1, 2, 3, -9]));
console.log(getMaxSubSumFast([-1, 2, 3, -9, 11]));
console.log(getMaxSubSumFast([-2, -1, 1, 2]));
console.log(getMaxSubSumFast([100, -9, 2, -3, 5]));
console.log(getMaxSubSumFast([1, 2, 3]));

