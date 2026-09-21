 export class FizzBuzz {

     generate(n = 105) {
    for (let i = 1; i <= n; i++) {
      let output = "";

      if (i % 3 === 0) output += "Fizz";
      if (i % 5 === 0) output += "Buzz";
      if (i % 7 === 0) output += "Woof";

      console.log(output || i);
    }
  }
}