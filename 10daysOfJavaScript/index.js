let name = "dogu";
let age = 10;
let boolean = false;
let surname = undefined;
let color = null;

//let name = "Mosh";
//let age = 30;
let person = {
    name: "Mosh",
    age: 30
};

// Dot Notation (Bit more better for newbies)
person.name = "John";
console.log(person.name);

// Bracket Notation
person["name"] = "Mary";
console.log(person["name"]);

// Arrays

let selectedColors = []; // empty square brackets called "array literal"
let colorsToChose = ["red", "blue"];
colorsToChose[2] = 1; // edit or add to array
console.log(colorsToChose);

// Functions

function greet(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}

greet("Josh", "Kimilo");
greet("Mary", "Gerard");

// Types of Functions

// Performing a task
function greet(name, lastName) {
    console.log("Hello " + name + " " + lastName);
}

// Calculating a value
function square(number) {
    return number * number;
}

let number = square(4);
console.log(number);

console.log(square(5));