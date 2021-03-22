// #4 Фильтрация массива
const mixedArray = [3, 13, 74, 14, 66, 15, 22, 4];

const isEven = numbers => {
  return numbers % 2 === 0;
}

const filterArray = ( arrayToFilter, filterFn ) => {
  const filteredArray = [];

  arrayToFilter.forEach(num => {
    if (filterFn(num)) {
      filteredArray.push(num);
    }
  })
  return filteredArray;
};

console.log('#4 Фильтрация массива: ', filterArray(mixedArray, isEven));