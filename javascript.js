let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));

let output = "";
for (let i = 1; i <= answer; i++) {
    output = "";
    output += i % 3 === 0 ? "Fizz" : "";
    output += i % 5 === 0 ? "Buzz" : "";

    if (output.length > 0) {
        console.log(output);
    }
    else {
        console.log(i);
    }
}
