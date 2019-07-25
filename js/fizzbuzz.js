

for (i = 1; i <= 30; i++) {
    var three = i % 3 == 0;
    var five = i % 5 == 0;
    console.log(three ? five ? "FizzBuzz" : "Fizz" : five ? "Buzz" : i);
  }