/* ********* Finding highest and lowest number from the array ********* */
let temperature = [-2, 4, 45, 23, -4, "error", -6, -8, 12, 34];
function getHigherAndLowerTemperature(arr) {
  let higher = arr[0];
  let lower = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === "number") {
      if (arr[i] > higher) {
        higher = arr[i];
      }
      if (arr[i] < lower) {
        lower = arr[i];
      }
    }
  }
  console.log(higher, lower);
}
getHigherAndLowerTemperature(temperature);
