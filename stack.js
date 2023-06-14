/**
 * Stack is nothing but linear data Structure
 * @description mainly we are perform  push and pop operation over the stack
 * stack follows last in first out Approach
 */

let array = [];
let currentIndex = array.length;
let max = 6;
function push(item) {
  if (currentIndex >= max) {
    console.log("Stack is full");
  }
  array[currentIndex] = item;
  currentIndex += 1;
}

function pop() {
  if (currentIndex > 0) {
    array.length = currentIndex - 1;
    currentIndex = currentIndex - 1;
  } else {
    console.log("Stack is empty");
  }
}

push(20);
push(21);
push(22);
push(23);
push(24);
push(25);

console.log(array);

pop();
pop();
pop();
pop();

console.log(array);
