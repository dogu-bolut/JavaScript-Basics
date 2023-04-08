// Prime Factorization
//- Have the user enter a number and find all Prime Factors (if there are any) and display them.

let numberToFactorize = prompt("Please enter a number to Factorize: ");

let factors = [];
for (let i = 1; i <= numberToFactorize; i++) {
    if (numberToFactorize % i == 0) { // check if number is a factor
        factors.push(i);
    }
}

console.log(`Prime Factors of given number is ${factors}`);