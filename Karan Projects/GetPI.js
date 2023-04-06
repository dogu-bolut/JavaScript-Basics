// Find PI to the Nth Digit
//- Enter a number and have the program generate PI up to that many decimal places. Keep a limit to how far the program will go.

let inputForPI = prompt("Please enter number for length of decimal PI: ");
let PI = Math.PI;
console.log(PI.toFixed(inputForPI).slice(2, inputForPI + 2));