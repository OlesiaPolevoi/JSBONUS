"use strict";

let usersNum;
console.log(usersNum);

function generateRandomNumber(min, max) {
  let randomNum = Math.ceil(Math.random() * (max - min + 1) + min);
  console.log(console.log(randomNum));

  function two() {
    usersNum = +prompt("Guess a number from 1 - 100");
    console.log(usersNum);

    if (usersNum > randomNum) {
      alert("The number you are guessing is smaller");
      two();
    }
    if (usersNum < randomNum) {
      alert("The number you are guessing is bigger");
      two();
    }
    if (usersNum === randomNum) {
      alert("Congratulations! You've won!");
      return;
    }
  }
  two();
}

generateRandomNumber(1, 100);
