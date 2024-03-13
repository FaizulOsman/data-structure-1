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

/*
    Constant don't matter
    O(2n) => O(n)
    O(100) => O(1)
    O(15n^2) => O(n^2)
*/

/*
    Smaller terms don't matter
    O(n + 10) => O(n)
    O(100n + 50) => O(n)
    O(n^2 + 5n + 8) => O(n^2)
*/

/*
    Big - O Complexity Chart

    O(1)        =   Amazing
    O(log n)    =   Good
    O(n)        =   Fair
    O(n log n)  =   Ban
    O(n^2)      =   Terrible
    O(2^n)      =   Terrible
    O(n!)       =   Terrible

*/
