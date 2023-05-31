const sum = (sum1, sum2) => sum1 + sum2;
const PI = 3.14;
class someMathObject {
  constructor() {
    console.log('object created');
  }
}
/*
module.exports.sum = sum;
module.exports.PI = PI;
module.exports.someMathObject = someMathObject;
*/
module.exports = { sum: sum, PI: PI, someMathObject: someMathObject };