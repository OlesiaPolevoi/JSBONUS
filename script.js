"use strict";

let usersNum;

function generateRandomNumber(min, max) {
  let randomNum = Math.ceil(Math.random() * (max - min + 1) + min);
  console.log(randomNum);

  function two() {
    usersNum = +prompt("Guess a number from 1 - 100");
    console.log(usersNum == null);

    if (usersNum == null) {
      alert("The game is over");
      return;
    }

    if (isNaN(parseFloat(usersNum)) || usersNum === "" || usersNum == 0) {
      alert("You should enter a number from 1 - 100 only");
      two();
    }

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
    }
  }
  two();
}

generateRandomNumber(1, 100);
