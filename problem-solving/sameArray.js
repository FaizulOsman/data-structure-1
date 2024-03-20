/* ********* Checking - Square of the first array is equal to the second array ********* */
function same(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const currentIndex = arr2.indexOf(arr1[i] ** 2);

    arr2.splice(currentIndex, 1);
  }
  return true;
}
// Time Complexity = O(n^2)
console.log(same([2, 3, 5], [9, 4, 25]));

/* ********* Faster way ********* */
function sameFast(arr1, arr2) {
  if (arr1.length != arr2.length) {
    return false;
  }

  let sequenceCounter1 = {};
  let sequenceCounter2 = {};

  for (let val of arr1) {
    sequenceCounter1[val] = sequenceCounter1[val] + 1 || 1;
  }
  for (let val of arr2) {
    sequenceCounter2[val] = sequenceCounter2[val] + 1 || 1;
  }

  for (let key in sequenceCounter1) {
    if (!(key ** 2) in sequenceCounter2) {
      return false;
    }

    if (sequenceCounter1[key] !== sequenceCounter2[key ** 2]) {
      return false;
    }
  }
  return true;
}
// Time Complexity = O(n)
console.log(sameFast([2, 3, 5], [9, 4, 25]));
