let array = [
  20, 30, 45, 39, 61, 74, 65, 65, 95, 15, 35, 24, 26, 28, 29, 51, 36,
];

/**
 * Array Sorting
 */

function arraySortig(array) {
  for (let index = 0; index < array.length; index++) {
    for (let j = 0; j < array.length; j++) {
      if (array[j] >= array[j + 1]) {
        let temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

// console.log(arraySortig(array));

/**
 * javascript predefined function
 */

let array_one = [
  20, 30, 45, 39, 61, 74, 65, 65, 95, 15, 35, 24, 26, 28, 29, 51, 36,
];

array_one.sort((a, b) => a - b);
console.log(array_one);
