// Scope is the biggest source of confusion regarding variables
// Context is the biggest source of confusion regarding objects

// SCOPE
function printName() {
    let name = "Dogu"; // variable that created in function can only be called in the function 
    console.log(name);
}

printName();

let who = "Josh";

function innerCheckFirstFunction() {
    let who = "Brad";
    if (2 + 2 == 4) {
        let who = "Mary" // if code not commented output will be mary(proof of variables look inner first) 
        console.log("inside the if statement", who);
    }
    console.log("inside the function", who);
}

innerCheckFirstFunction();
console.log("inside the global scope", who); // same labelled variable in function do not overwrite global variable

// Mutate(Change) variable value

let myName = "Dogukan";

function changer() {
    myName = "Dogu";
}

changer();
console.log(myName);

// CONTEXT

let john = {
    firstName: "John",
    lastName: "Doe",
    driveCar() {
        function nestedFunction() {
            console.log(this);
        }
        nestedFunction();  // this pointing towards global because there is no object and dot infront of it
        console.log(this.firstName + " " + this.lastName + " is driving a car.");
    }
}
john.driveCar(); // this pointing towards john because john object is the CALLER of this function

function breathe() {
    console.log(this.firstName + " " + this.lastName + " is breathing.");
}

breathe.call(john); // argument of call function is treated as 'this' in breathe function