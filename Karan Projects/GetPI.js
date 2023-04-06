// Find PI to the Nth Digit
//- Enter a number and have the program generate PI up to that many decimal places. Keep a limit to how far the program will go.

let inputForPI = prompt("Please enter valid number: ");
let PI = 22 / 7;
console.log(PI.toFixed(inputForPI).slice(2, inputForPI + 2));