/* ================================   1. Fibonacci Sequence    ================================*/
const fib = (n) => {
  if (n > 0) {
    const arr = [1, 1];
    for (let i = 0; i < n - 2; i++) {
      arr.push(arr[i] + arr[i + 1]);
    }
    return arr[n - 1];
  } else {
    return "error:try again with count number";
  }
};

console.log("1.) Fibonacci Sequence ", fib(1), fib(3), fib(12));

/* ================================      2. Array shift        ================================*/
const shift = (arr, direction, n) => {
  for (let i = 0; i < n; i++) {
    if (direction === "left") {
      arr.unshift(arr.pop());
    } else if (direction === "right") {
      arr.push(arr.shift());
    } else return "the direction have to be either 'left' or 'right' ";
  }
  return arr;
};

console.log(
  "2.) Array shift ",
  shift(["john", "jane", "sarah", "alex"], "left", 2),
  shift([1, 2, 3, 4, 5], "right", 3)
);

/* ================================      3. Array shift        ================================*/
const secondMax = (arr) => {
  if (arr.length > 0) {
    newArr = arr.sort((a, b) => a - b);
    for (i = newArr.length - 1; i >= 0; i--) {
      if (newArr[newArr.length - 1] > newArr[i]) {
        return newArr[i];
      } else {
        return newArr[newArr.length - 1];
      }
    }
  } else {
    return "error!";
  }
};
console.log(
  secondMax([2, 3, 4, 5]),
  secondMax([9, 2, 21, 21]),
  secondMax([4, 4, 4, 4]),
  secondMax([4123]),
  secondMax([])
);

/* ================================      4. FizzBuzz...But        ================================*/
const fizzBuzz = (n) => {
  return result =
    n % 3===0 && n % 5 === 0
      ? "FizzBuzz"
      : n % 5 === 0
      ? "Buzz"
      : n % 3 === 0
      ? "fizz"
      : "somthing went wrong";
};

console.log(fizzBuzz(21),fizzBuzz(18),fizzBuzz(45))
