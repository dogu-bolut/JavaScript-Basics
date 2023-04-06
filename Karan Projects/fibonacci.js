// Fibonacci Sequence
//- Enter a number and have the program generate the Fibonacci sequence to that number or to the Nth number.

let inpurForFibonacci = prompt("Please enter lenght of fibonacci numbers: ");
let series = new Array(inpurForFibonacci);

series.fill(0);
series[0] = parseInt(prompt("Please enter a valid number for first fibonacci number(default=1): ")); // use parseInt because prompt take string
series[1] = parseInt(prompt("Please enter a valid number for second fibonacci number(default=2): "));

if (isNaN(series[0])) { // assign default fibonacci number if user left blank
    series[0] = 1;
}
if (isNaN(series[1])) {
    series[1] = 2;
}

let i = 2;
while (i < inpurForFibonacci) {
    series[i] = series[i - 1] + series[i - 2];
    i++;
}

console.log(series);