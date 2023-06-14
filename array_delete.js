let array = [20, 30, 45, 35, 61, 74, 65, 95, 15, 35, 24, 26, 28, 29, 51, 36];
let position = 2;

function arrayNumdeletion(array, position) {
  for (let index = position; index < array.length - 1; index++) {
    array[index] = array[index + 1];
  }
  array.length = array.length - 1;
  return array;
}

console.log(arrayNumdeletion(array, position));

/**
 * Array predefined method to delete item
 */

array.splice(2, 1);
console.log(array);
