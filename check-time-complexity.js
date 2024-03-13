/* ****************** Checking Time Complexity ****************** */

/* ******** Normal Way (1.243549s) ******** */
function sumOfAllNormalWay(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum += i;
  }
  return sum;
}
let time1 = performance.now();
console.log(sumOfAllNormalWay(1000000000));
let time2 = performance.now();

console.log(`Execution time: ${(time2 - time1) / 1000}`);

/* ******** Fast Way (0.005096s) ******** */
function sumOfAllFasterWay(n) {
  return (n * (n + 1)) / 2;
}

let time3 = performance.now();
console.log(sumOfAllFasterWay(1000000000));
let time4 = performance.now();

console.log(`Execution time: ${(time4 - time3) / 1000}`);
