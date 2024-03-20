/* ********* Recursion ********* */
let sum = 0;
function sumOfNumber(n) {
  sum += n;
  n--;
  if (n > 0) {
    sumOfNumber(n);
  }
  return sum;
}
console.log(sumOfNumber(10));
