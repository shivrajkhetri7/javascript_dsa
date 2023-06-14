const string = "Hello shivraj hope you are doing well";

/**
 * @Query find the maximum number of occurance
 */

function stringCharfind(string) {
  let Object = {};
  for (ch of string) {
    if (ch != " ") {
      Object[ch] = (Object[ch] || 0) + 1;
    }
  }
  return Object;
}

console.log(stringCharfind(string));
