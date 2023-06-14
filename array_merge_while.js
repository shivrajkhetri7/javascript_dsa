/**
 * Merge two array using while loop
 * @description applicable only sorted array
 */

const array_one = [10, 12, 13, 17, 19, 20, 24, 26];
const array_two = [11, 16, 21, 23];
const resultantArray = [];
let array_one_index = 0;
let array_two_index = 0;
let result_array_index = 0;

while (
  array_one_index < array_one.length &&
  array_two_index < array_two.length
) {
  if (array_one[array_one_index] < array_two[array_two_index]) {
    resultantArray[result_array_index] = array_one[array_one_index];
    array_one_index++;
  } else {
    resultantArray[result_array_index] = array_two[array_two_index];
    array_two_index++;
  }
  result_array_index++;
}

while (array_one_index < array_one.length) {
  resultantArray[result_array_index] = array_one[array_one_index];
  array_one_index++;
  result_array_index++;
}

console.log(resultantArray);
