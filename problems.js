/**
 * @Query find the even number from array make Double and find the length
 */

const array = [10, 12, 13, 15, 16, 17, 21, 22, 44, 56];

function eventFind(array) {
  // finding even number
  const evenArray = array.filter((item) => {
    if (item % 2 == 0) return item;
  });
  return evenArray.length;
}

console.log(eventFind(array));
