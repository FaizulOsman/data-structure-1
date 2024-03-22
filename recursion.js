/* ##########################################################
************************* Recursion *************************
########################################################## */
let sum = 0;
function sumOfNumber(n) {
  sum += n;
  n--;
  if (n > 0) {
    sumOfNumber(n);
  }
  return sum;
}
// Time Complexity = O(n)
console.log(sumOfNumber(10));

/* ****************** Make it simple ****************** */
function sumOfNumber2(n) {
  if (n < 0) return 0;

  return n + sumOfNumber2(n - 1);
}
// Time Complexity = O(n)
console.log(sumOfNumber2(10));

/* ****************** Sum of Array using Recursion ****************** */
function sumOfArray(arr) {
  if (arr.length === 0) return 0;

  let rest = arr.slice(1);
  return arr[0] + sumOfArray(rest);
}
// Time Complexity = O(n^2)
// Space Complexity = O(n)
console.log(sumOfArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));
