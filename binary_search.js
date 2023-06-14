/**
 * Binary search
 */

const array = [2, 12, 15, 19, 21, 23, 64];
const searchItem = 23;

function binarySearch(array, searchItem) {
  let start = 0;
  let end = array.length - 1;
  let position = undefined;
  while (start <= end) {
    let MID = Math.floor((start + end) / 2);
    if (searchItem == array[MID]) {
      position = MID;
      break;
    } else if (array[MID] < searchItem) {
      start = MID + 1;
    } else {
      end = MID - 1;
    }
  }

  return position;
}

console.log(binarySearch(array, searchItem));
