// Find Cost of Tile to Cover W x H Floor
//- Calculate the total cost of tile it would take to cover a floor plan of width and height, using a cost entered by the user.

let cost = parseInt(prompt("Please enter cost for each square: "));
let width = parseInt(prompt("Please enter total width: "));
let height = parseInt(prompt("Please enter total height: "));

let getCost = function (sqFtCost, floorWidth, floorHeight) {

    return "The total cost is $" + sqFtCost * floorWidth * floorHeight + " for " + floorWidth * floorHeight + " square feet";
};

console.log(getCost(cost, width, height));