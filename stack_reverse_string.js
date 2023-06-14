let string = "Shivraj";
let array_string = string.split("");
let currentIndex = array_string.length;
let Stack = [];

function push(item, index) {
  return (Stack[index] = item);
}

function pop() {
  let item = Stack[currentIndex - 1];
  currentIndex -= 1;
  return item;
}

function reverseString(array_string) {
  let rev = [];
  for (let index = 0; index < array_string.length; index++) {
    push(array_string[index], index);
  }

  for (let index = 0; index < array_string.length; index++) {
    rev[index] = pop();
  }
  return rev;
}

console.log(reverseString(array_string).join(""));
