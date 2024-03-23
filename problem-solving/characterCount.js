/* ##############################################################
************************ Character Count ************************
############################################################## */
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
