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

/* ********* Make it simple ********* */
function sumOfNumber2(n) {
  if (n < 0) return 0;

  return n + sumOfNumber2(n - 1);
}
console.log(sumOfNumber2(10));
