let array = [20, 30, 45, 35, 61, 74, 65, 95, 15, 35, 24, 26, 28, 29, 51, 36];

/**
 * reversing the array
 */

function reversArray(array, start, end) {
  if (start <= end) {
    let temp = array[start];
    array[start] = array[end];
    array[end] = temp;
    reversArray(array, start + 1, end - 1);
  }
  return array;
}

console.log(reversArray(array, 0, array.length - 1));
