"use strict";
//lesson02

const num = 266219;
const numToString = num.toString();
// console.log(numToString);
const stringToArray = numToString.split("");
// console.log(stringToArray);

const arrayToNumberArray = stringToArray.map(Number);
// console.log(arrayToNumberArray);
let result = 1;
// console.log(result);
for (let i = 0; i < arrayToNumberArray.length; i++) {
  result = result * arrayToNumberArray[i];
}
console.log(result);
const resultTo3rdPower = result ** 3;
console.log(resultTo3rdPower);
const resultToString = resultTo3rdPower.toString();
console.log(resultToString.slice(0, 2));
