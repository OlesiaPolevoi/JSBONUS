"use strict";
// lesson03
// 1). Переменная lang может принимать 2 значения: 'ru' 'en'.
// Написать условия при котором в зависимости от значения lang будут выводится дни недели на русском или английском языке.

//  a) через if
const lang = prompt("What is your language?", "ru/eng");

if (lang == "ru") {
  console.log("дни недели");
} else if (lang == "eng") {
  console.log("weekdays");
} else {
  prompt("Something went wrong");
}

//  b) через switch-case
let lang1 = prompt("What is your language?", "ru/eng");

switch (lang1) {
  case (lang1 = "ru"):
    console.log("дни недели");
    break;
  case (lang1 = "eng"):
    console.log("weekdays");
    break;
  default:
    prompt("Something went wrong");
}

//  c) через многомерный массив без ифов и switch
const lang2 = prompt("What is your language?", "ru/eng");

const obj = {
  ru: "дни недели",
  eng: "weekdays",
};

console.log(obj[lang2]);

// 2). У нас есть переменная namePerson. Если значение этой переменной “Артем” то вывести в консоль “директор”, если значение “Александр” то вывести в консоль “преподаватель”, с любым другим значением вывести в консоль “студент”
//  Решить задачу с помощью нескольких тернарных операторов, без использования if или switch

const personName = prompt("Введите имя", "Артем, Александр").trim();

let result =
  personName == "Артем"
    ? "директор"
    : personName == "Александр"
    ? "преподаватель"
    : "студент";

console.log(result);
