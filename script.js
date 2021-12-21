"use strict";
const workingHard = function (variable) {
  if (typeof variable !== "string") {
    return "В качестве аргумента передана не строка.";
  }

  let variable1 = variable.trim();
  if (variable1.length <= 30) {
    return variable1;
  }

  return variable1.substring(0, 30) + "...";
};

// const numInput = workingHard(123);
// console.log(numInput);

const strInput = workingHard(" Hello beautiful people of this earth  ");
console.log(strInput);
