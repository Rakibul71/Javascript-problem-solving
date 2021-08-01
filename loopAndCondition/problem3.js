// fizzbuzz interview problem
//divisible by 3=> Fizz
//divisible by 5=> FizzBuzz
//Not divisible by 3 and 5=> input
//Not a Number=> 'Not a number'

const output = fizzBuzz(false);
console.log(output);

function fizzBuzz(num) {
  if (typeof num !== "number") return "not a number ";
  if (num % 3 === 0 && num % 5 === 0) return "FizzBuzz";
  if (num % 3 !== 0 || num % 5 !== 0) return num;
  if (num % 3 === 0) return "Fizz";
  if (num % 5 === 0) return "Buzz";
  else return "not a number";
}

// console.log("hello");
