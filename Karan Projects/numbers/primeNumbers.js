// Next Prime Number
//- Have the program find prime numbers until the user chooses to stop asking for the next one.

let getNextPrimeNumber = (function () {

    function isPrime(n) {
        let i;

        for (i = 2; i <= Math.sqrt(n); i++) {
            if (n % i === 0) {
                return false;
            }
        }
        return true;
    }

    let currentPrimeNumber = 2;

    return function () {
        while (!isPrime(currentPrimeNumber)) {
            currentPrimeNumber++;
        }

        return currentPrimeNumber++;
    };
}());

let showNextNumber = true;

while (showNextNumber) {
    let doYouWant = prompt("Do you want to see next prime number: Y/N");
    if (doYouWant == "y" || doYouWant == "Y") {
        console.log(getNextPrimeNumber());
    }
    else if (doYouWant == "n" || doYouWant == "N") {
        showNextNumber = false;
        console.log("You unsubscribe prime numbers");
    }
    else {
        console.log("You typed unexpected");
    }
}