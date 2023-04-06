document.title = "Google";
document.body.style.backgroundColor = "lightblue";

function greet(name, favColor) {
    alert("Hey, welcome " + name + " and your favorite color is " + favColor + ".");
}

greet("Jane", "blue");

function tripleMe(number) {
    return number * 3;
}

let myFavoriteNumber = tripleMe(12);
alert(myFavoriteNumber);


// OBJECTS

let cat = {
    name: "Fluffy", // these called properties
    age: 4,
    foods: { // an object can be child of an object
        favorite: "Tuna",
        leastFavorite: "Oranges"
    },
    eyeColor: "Hazel",
    meow() { // if object contains a function like meow here its called method instead of function!!
        alert("Meooowww!!");
    }
};

cat.meow();
alert(cat.foods.favorite);

document.addEventListener("click", clickFunction);

function clickFunction() {
    alert("You clicked!")
}

// ARRAYS

let myFavoriteNumbers = [7, 5, 4, 8];
myFavoriteNumbers.push(10); // adding new item end of an array
console.log(myFavoriteNumbers);

let myWords = ["I'm", "dedicate", "to", "a", "learning"];
myWords.splice(3, 1); // lets us remove a particular item of an array
console.log(myWords);

let myPets = [{ name: "Barksalot", species: "Dog" }, { name: "Meowsalot", species: "Cat" }]; // arrays can contain objects
console.log(myPets[1].species);


let myNumber = 4.25;
console.log(myNumber.toFixed()); // (round floating number)proof of everything treated as objects in javascrip(Object-Oriented Language)