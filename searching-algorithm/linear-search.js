/* Write a function take an array and a value. Find the value from the array and return the index of where find the value */
function linearSearch(array, value) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return i;
    }
  }
  return -1;
}
console.log(linearSearch([4, 2, 6, 8, 2, 8, 5, 3, 9, 0], 5));

/* Find Odd Numbers from the array */
function findOddNumbers(array) {
  let result = [];
  for (let i = 0; i < array.length; i++) {
    if (array[i] % 2 !== 0) {
      result.push(array[i]);
    }
  }
  return result;
}
console.log(findOddNumbers([4, 2, 6, 8, 2, 8, 5, 3, 9, 0]));
