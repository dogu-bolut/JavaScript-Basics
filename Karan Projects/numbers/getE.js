// Find e to the Nth Digit
//- Just like the previous problem, but with e instead of PI. 
//- Enter a number and have the program generate e up to that many decimal places.
//- Keep a limit to how far the program will go.

let inputForE = prompt("Please enter number for length of decimal E: ");
let e = Math.E;
console.log(e.toFixed(inputForE).slice(2, inputForE + 2));