let array = [12, 11, 13, 5, 6];
/**
 * Insertion sort
 */

function insertionSort(array) {
  let j, current;
  for (let index = 1; index < array.length; index++) {
    j = index - 1;
    current = array[index];
    while (j >= 0 && array[j] > current) {
      array[j + 1] = array[j];
      j = j - 1;
    }
    array[j + 1] = current;
  }
  return array;
}

console.log(insertionSort(array));
