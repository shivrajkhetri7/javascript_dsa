let array = [20, 12, 53, 3];

function selectionSort(array) {
  let mid = undefined;
  for (let index = 0; index < array.length; index++) {
    mid = index;
    for (let j = index + 1; j < array.length; j++) {
      if (array[mid] > array[j]) {
        mid = j;
      }
    }
    let temp = array[mid];
    array[mid] = array[index];
    array[index] = temp;
  }
  return array;
}

console.log(selectionSort(array));
