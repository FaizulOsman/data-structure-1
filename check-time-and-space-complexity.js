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

/* ****************** Checking Space Complexity ****************** */

/* ******** O(1) ******** */
function sum(arr) {
  let total = 0;
  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  }
  return total; // It returns only one number
}
console.log(sum([1, 2, 3, 4, 5]));

/* ******** O(n) ******** */
function double(arr) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    newArr.push(arr[i] * 2);
  }
  return newArr; // It returns an array with n times number
}
console.log(double([1, 2, 3, 4, 5]));

/* ******** O(log n) ******** */
function logN(n) {
  while (n > 1) {
    console.log(n);
    n /= 2;
  }
  console.log("Done");
}
logN(8);

/* ******** Recursive - O(log n) ******** */
function anotherLogN(n) {
  while (n <= 1) {
    console.log("Done");
    return;
  }
  console.log(n);
  anotherLogN(n / 2);
}
anotherLogN(8);

/* ****************** Checking Space Complexity at a time ****************** */
function uniqueName(arr) {
  let uniqueName = [];
  for (let i = 0; i < arr.length; i++) {
    // n times
    let ele = arr[i];
    if (!uniqueName.includes(ele)) {
      // n times
      uniqueName.push(ele);
    }
  }
  return uniqueName; // n space
}
// Time complexity = n^2
// Space complexity = n
const newArr = ["a", "b", "c", "d", "e", "a", "c"];
console.log(uniqueName(newArr));

/*
******************************************
Object.keys() = O(n)
Object.values() = O(n)
Object.entries() = O(n)
Object.hasOwnProperty() = O(1)
******************************************
*/
