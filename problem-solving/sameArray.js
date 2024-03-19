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
console.log(same([2, 3, 5], [9, 4, 25]));
