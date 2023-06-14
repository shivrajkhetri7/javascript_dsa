const array = [20, 32, 41, 15, 2, 19, 87, 120, 63, 67, 95, 24];

/**
 * Linear search
 */

let item = 120;
let position = undefined;

function linearSearch(item) {
  for (let index = 0; index < array.length; index++) {
    if (array[index] == item) {
      position = index;
    }
  }
  return position;
}

console.log(linearSearch(item));
