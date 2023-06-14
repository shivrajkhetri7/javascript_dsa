let array = [20, 30, 45, 35, 61, 74, 65, 95, 15, 35, 24, 26, 28, 29, 51, 36];

let searchingsItemIndex = 61;

function searchIndex(array, searchIndex) {
  let i = undefined;
  for (let index = 0; index < array.length; index++) {
    if (array[index] == searchIndex) {
      i = index;
      break;
    }
  }
  return i;
}

console.log(searchIndex(array, searchingsItemIndex));

/**
 * @Array search index predefined method
 */

console.log(array.indexOf(searchingsItemIndex));
