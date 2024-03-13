/* ****************** Big O Notation ****************** */

/* ******** (Big O(n)) - n comes from n+2 ******** */
function sumOfAllNormalWay(n) {
  let sum = 0; // it will run 1 times
  for (let i = 0; i <= n; i++) {
    sum += i; // it will run n times
  }
  return sum; // it will run 1 times
}
console.log(sumOfAllNormalWay(1000000000));

/* ******** (Big O(1)) - it only 1 time ******** */
function sumOfAllFasterWay(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumOfAllFasterWay(1000000000));

/* ******** (Big O(n^2)) - 2 n for 2 loop  ******** */
function multipleArr(n) {
  for (let i = 0; i <= n; i++) {
    for (let j = 0; j <= n; j++) {
      console.log(i, j);
    }
  }
}
multipleArr(2);
