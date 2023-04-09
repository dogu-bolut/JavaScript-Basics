//Change Return Program
//- The user enters a cost and then the amount of money given.
//- The program will figure out the change and the number of quarters, dimes, nickels, pennies needed for the change.

function changeReturn(cost, amountGiven) {
    const change = amountGiven - cost;
    const denominations = [0.25, 0.1, 0.05, 0.01]; // quarters, dimes, nickels, pennies
    const result = {};

    // calculate number of each denomination needed for change
    for (let i = 0; i < denominations.length; i++) {
        const denomination = denominations[i];
        const count = Math.floor(change / denomination);
        result[denomination] = count;
        change -= count * denomination;
    }

    return result;
}

// Example usage
const cost = 12.99;
const amountGiven = 20;
const result = changeReturn(cost, amountGiven);

console.log(`Quarters: ${result[0.25]}`);
console.log(`Dimes: ${result[0.1]}`);
console.log(`Nickels: ${result[0.05]}`);
console.log(`Pennies: ${result[0.01]}`);