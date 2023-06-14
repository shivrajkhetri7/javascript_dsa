/**
 * Palindrome
 * level / SOS/
 */

function palidromeFunction(string) {
  let reverece_string = string.split("").reverse().join("");
  if (reverece_string !== string) {
    return false;
  }
  return true;
}

console.log(palidromeFunction("level"));

/**
 * DSA
 */

function dsaPalindrome(str) {
  const stringArray = str.split("");
  let start = 0;
  let end = stringArray.length - 1;
  let result = true;
  for (let index = 0; index < stringArray.length; index++) {
    if (stringArray[start] !== stringArray[end]) {
      result = false;
      break;
    }
    while (start < end) {
      start++;
      end--;
    }
  }
  return result;
}

console.log(dsaPalindrome("level"));
