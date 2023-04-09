// Mortgage Calculator
//- Calculate the monthly payments of a fixed term mortgage over given Nth terms at a given interest rate.
//- Also figure out how long it will take the user to pay back the loan.For added complexity,
//- add an option for users to select the compounding interval(Monthly, Weekly, Daily, Continually).

function mortgageCalculator(principal, term, rate, compoundingInterval) {
    const n = term * compoundingInterval; // number of compounding periods
    const r = rate / compoundingInterval / 100; // monthly interest rate
    const payment =
        (principal * r * Math.pow(1 + r, n)) / (Math.pow(1 + r, n) - 1); // monthly payment

    // calculate total payments and total interest paid
    let totalPayments = payment * n;
    let totalInterest = totalPayments - principal;

    // format output
    const formatter = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 2,
    });

    return {
        payment: formatter.format(payment),
        totalPayments: formatter.format(totalPayments),
        totalInterest: formatter.format(totalInterest),
        term: term,
    };
}

// Example usage
const principal = 100000;
const term = 10;
const rate = 1.33;
const compoundingInterval = 1; // monthly compounding

const result = mortgageCalculator(
    principal,
    term,
    rate,
    compoundingInterval
);

console.log(`Monthly payment: ${result.payment}`);
console.log(`Total payments: ${result.totalPayments}`);
console.log(`Total interest paid: ${result.totalInterest}`);
console.log(`Loan term: ${result.term} years`);