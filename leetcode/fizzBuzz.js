var fizzBuzz = function (n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    if (i % 3 == 0 && i % 5 != 0) {
      array.push("Fizz");
      continue;
    }
    if (i % 3 != 0 && i % 5 == 0) {
      array.push("Buzz");
      continue;
    }
    if (i % 3 == 0 && i % 5 == 0) {
      array.push("FizzBuzz");
      continue;
    }
    stri = i.toString();
    array.push(stri);
  }
  return array;
};
// console.log("fizzBuzz", fizzBuzz(15));
