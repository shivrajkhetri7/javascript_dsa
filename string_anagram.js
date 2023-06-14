/**
 * All the character same in two string is called anagram
 * @example HEART => EARTH , LISTEN => SILENT
 */

function anafgramFunction(Str1, Str2) {
  if (Str1.length !== Str2.length) {
    return false;
  }
  const Object = {};
  for (ch of Str1) {
    Object[ch] = (Object[ch] || 0) + 1;
  }

  for (ch of Str2) {
    if (!Object[ch]) {
      return false;
    }
    Object[ch]--;
  }
  return true;
}

console.log(anafgramFunction("HEART", "EARTH"));
