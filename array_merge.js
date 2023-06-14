let array_one = [
  20, 30, 45, 35, 61, 74, 65, 95, 15, 35, 24, 26, 28, 29, 51, 36,
];

let array_two = [19, 23, 27, 33];

/**
 * Manual DSA merge two array
 */

function arrayMerge(array_one, array_two) {
  let resultantarray = [];

  for (let index = 0; index < array_one.length; index++) {
    resultantarray[index] = array_one[index];
  }

  for (let index = 0; index < array_two.length; index++) {
    resultantarray[array_one.length + index] = array_two[index];
  }

  return resultantarray;
}

console.log(arrayMerge(array_one, array_two));
