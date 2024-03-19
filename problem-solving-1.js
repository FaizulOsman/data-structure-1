/* ********* Finding highest and lowest number from the array ********* */
let temperature = [-2, 4, 45, 23, -4, "error", -6, -8, 12, 34];
function getHigherAndLowerTemperature(arr) {
  let higher = arr[0];
  let lower = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] !== "number") continue;

    if (arr[i] > higher) {
      higher = arr[i];
    }
    if (arr[i] < lower) {
      lower = arr[i];
    }
  }

  console.log(higher, lower);
}
getHigherAndLowerTemperature(temperature);

/* ********* Character count ********* */
function charCount(str) {
  const charList = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i].toLowerCase();
    if (charList[char] > 0) {
      charList[char]++;
    } else {
      charList[char] = 1;
    }
  }
  return charList;
}
console.log(charCount("Hello World"));
