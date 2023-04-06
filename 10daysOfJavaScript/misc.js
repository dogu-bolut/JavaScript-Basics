// Anonymous Functions

document.addEventListener("click", function () {
    alert("Anonymous Function");
});

// Arrow Functions

document.addEventListener("click", () => {
    alert("Arrow Function");
});

document.addEventListener("click", () => alert("Even Cleaner"));
// Arrow Function can be use without curly brackets if all function in one line

let myNumbers = [10, 500, 2000];
let doubledNumbers = myNumbers.map((x) => x * 2); // Arrow function does not need return to typed, its implied automatically

// Function Hoisting

cool(); // We are able to call a function above the function in traditional type of function, if we try other methods it wont work for them(anonymous, arrow)
function cool() {
    console.log("Hoisted function");
}

// Template Literals

let myName = "Dogu";
console.log(`Hello my name is ${myName} and the sky is blue.`); // easy way to use variable inside text(text should be in backticks not regular quotes``)