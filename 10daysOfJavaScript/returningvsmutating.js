let pets = [
    { name: "Meowsalot", species: "cat", age: 2 },
    { name: "Barkalot", species: "dog", age: 3 },
    { name: "Purrsloud", species: "cat", age: 8 }
];

// mutate original array
pets.push({ name: "Puppster", species: "dog", age: 1 });
console.log(pets);

// value of push method is returning
console.log(pets.push({ name: "Finnster", species: "human", age: 23 }));

// Map Method
let petNames = pets.map(nameOnly);

function nameOnly(item) {
    return item.name; //instead of using pets.name we use parameter.name because its feature of map
}

console.log(petNames);

// Filter Method
let dogs = pets.filter(onlyDogs);

function onlyDogs(item) {
    return item.species == "dog";
}

function onlyBabies(item) {
    return item.age < 3;
}

// A-ha moment 
let babyDogNames = pets.filter(onlyDogs).filter(onlyBabies).map(nameOnly); // All arrays can be use methods even not been save into a variable 
console.log(babyDogNames);