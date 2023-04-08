// Mortgage Calculator
//- Calculate the monthly payments of a fixed term mortgage over given Nth terms at a given interest rate.
// Also figure out how long it will take the user to pay back the loan.For added complexity,
// add an option for users to select the compounding interval(Monthly, Weekly, Daily, Continually).

let totalMortgage = parseInt(prompt("Please enter total amount of mortgage(without comma or dot): "));
let mortgageTime = parseInt(prompt("Please enter mortgage time in months: "));
let interestRate = parseFloat(prompt("Please enter yearly interest rate: "));
let typeOfLoan = prompt("Type of loan(continually, compley, left blank for basic): ")

function calculateMonthlyPay(x) {
    let rawMonthlyBill = totalMortgage / mortgageTime;
    let monthlyInterest = Math.pow((1 + interestRate), (1 / 4)) - 1;
    if (x == "continually") {
        return totalMortgage + (totalMortgage * Math.log(1 + interestRate));
    }
    else if (x == "complex") {
        return rawMonthlyBill + (rawMonthlyBill * monthlyInterest);
    }
    else {
        return rawMonthlyBill * (interestRate / 12);
    }

}

console.log(calculateMonthlyPay(typeOfLoan.toLowerCase()));