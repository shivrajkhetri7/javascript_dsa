let array = [20, 30, 45, 35, 61, 74, 65, 95, 15, 35, 24, 26, 28, 29, 51, 36];

/**
 * @Query insert element at specific position
 */

let position = 5;
let newElement = 100;

const arrayInsertion = (array, position, newElement) => {
  for (let index = array.length - 1; index >= 0; index--) {
    if (index >= position) {
      array[index + 1] = array[index];
      if (index == position) {
        array[index] = newElement;
      }
    }
  }

  return array;
};

console.log(arrayInsertion(array, position, newElement));
