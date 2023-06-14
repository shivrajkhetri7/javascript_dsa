/**
 * recursion is nothing but calling function or calling it self its called recursion
 */

/***
 * Normal example
 */

function recursionfunction(count) {
  console.log(count);
  if (count < 10) {
    recursionfunction(count + 1);
  }
}
let data = 5;
// console.log(recursionfunction(data));

/**
 * Factorial
 */

function factorialFunction(number) {
  if (number == 0) {
    return 1;
  }
  return number * factorialFunction(number - 1);
}

let number = 10;
// console.log(`Factorial of ${number} : ${factorialFunction(number)}`);

/**
 * Indirect recursion
 */

let totalAmount = 100;
let totalApple = 0;

function buyApple(totalAmount) {
  if (totalAmount > 0) {
    byMore(totalAmount - 10);
  }
}

function byMore(totalAmount) {
  totalApple++;
  buyApple(totalAmount);
  return `total number of apple bout ${totalApple}`;
}

console.log(byMore(totalAmount));
