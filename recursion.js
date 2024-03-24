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

/* ###############################################################
****************** Sum of Array using Recursion ******************
############################################################### */
const input = new Array(7000).fill(1);

function sumOfArraySlow(arr) {
  if (arr.length === 0) return 0;

  let rest = arr.slice(1);
  return arr[0] + sumOfArraySlow(rest);
}
// Time Complexity = O(n^2)
// Space Complexity = O(n)
console.log(sumOfArraySlow(input));

/* ****************** Make it simple ****************** */
function sumOfArrayFast(arr) {
  return sumOfArrayHelper(arr, 0);
}
function sumOfArrayHelper(arr, index) {
  if (arr.length === index) return 0;

  return arr[index] + sumOfArrayHelper(arr, index + 1);
}
// Time Complexity = O(n)
// Space Complexity = O(n)
console.log(sumOfArrayFast(input));

const start = Date.now();
console.log(sumOfArraySlow(input));
const end = Date.now();
console.log(`Time elapsed for slow function: ${end - start} ms`);

const now = Date.now();
console.log(sumOfArrayFast(input));
const finish = Date.now();
console.log(`Time elapsed for fast function: ${finish - now} ms`);
