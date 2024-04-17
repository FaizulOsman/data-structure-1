/* 

Condition for Binary Search 
=> The Array Should Have To In Ascending Order 

*/

/* Given a sorted array of 'n' elements and a target element 't', find the index of 't' in the array. Return -1 if the target element is not found. */

// arr = [-5, 2, 4, 6, 10], t=10 => should return 4
// arr = [-5, 2, 4, 6, 10], t=6 => should return 3
// arr = [-5, 2, 4, 6, 10], t=20 => should return -1

/* ******* Iterative solution for binary search ******* */
const arr = [-5, 2, 4, 6, 10];
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) {
      return middleIndex;
    }
    if (arr[middleIndex] < target) {
      leftIndex = middleIndex + 1;
    } else {
      rightIndex = middleIndex - 1;
    }
  }
  return -1;
}
console.log(binarySearch(arr, 10));
console.log(binarySearch(arr, 6));
console.log(binarySearch(arr, 20));

/* ******* Recursive solution for binary search ******* */
function recursiveBinarySearch(arr, target) {
  return search(arr, target, 0, arr.length - 1);
}

function search(arr, target, leftIndex, rightIndex) {
  if (leftIndex > rightIndex) {
    return -1;
  }

  let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
  if (target === arr[middleIndex]) {
    return middleIndex;
  }

  if (target > arr[middleIndex]) {
    return search(arr, target, middleIndex + 1, rightIndex);
  } else {
    return search(arr, target, leftIndex, middleIndex - 1);
  }
}
console.log(recursiveBinarySearch(arr, 10));
console.log(recursiveBinarySearch(arr, 6));
console.log(recursiveBinarySearch(arr, 20));
