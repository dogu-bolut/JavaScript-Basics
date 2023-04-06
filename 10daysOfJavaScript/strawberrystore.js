// if 

let strawberryCount = 2;

if (strawberryCount >= 10) {
    document.write("Congrats!");
} else {
    document.write("Sorry, we don't ship orders that small.<br>");
}

// while

let cranberryCount = 0;
while (cranberryCount <= 50) {
    document.writeln("There are " + cranberryCount + " cranberries.<br>");
    cranberryCount++;
}

// high-order function(A- Accepts a function as an argument, B- Returns a function) C- Some built-in js high-order functions 
// A
document.addEventListener("click", ourFunction);

function ourFunction() {
    alert("clicked!!");
}

// B
function createMultiplier(multiplier) {
    return function (x) {
        return x * multiplier;
    }
}

let doubleMe = createMultiplier(2);
let tripleMe = createMultiplier(3);
let quadrupleMe = createMultiplier(4);

document.writeln(doubleMe(10));
document.writeln(tripleMe(4));
document.writeln(quadrupleMe(2));

// C
let myColors = ["red", "orange", "yellow"];

myColors.push("green");
myColors.forEach(saySomethingNice);

function saySomethingNice(color) {
    document.write("<br>The color " + color + " is a great color.");
}

myColors.map();
myColors.filter();