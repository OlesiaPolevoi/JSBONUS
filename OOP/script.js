"use strict";

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElem = function (str) {
    if (str[0] === ".") {
      const newDiv = document.createElement("div");
      console.log(newDiv);
      newDiv.classList.add(str.slice(1));
    }
    if (str[0] === "#") {
      const newParagraph = document.createElement("p");
      console.log(newParagraph);
      newParagraph.setAttribute("id", str.slice(1));
    }
  };
};

let elem1 = new DomElement(".block");

console.log(elem1);

elem1.createElem(".block");

elem1.style.cssText = "color: red; font-size: 20px;";
console.log(elem1);

///* <p id="elem" style="background: red;"></p> */
// let elem = document.querySelector("#elem");
// elem.style.cssText = "color: red; font-size: 20px;";

// let div = document.createElement("div");
// div.className = "alert";
// div.innerHTML = "<strong>Всем привет!</strong> Вы прочитали важное сообщение.";
// elem.classList.add/remove("class") – добавить/удалить класс.

// содержит метод, который создает элемент на странице в зависимости от условия:
// - если строка selector начинается с точки, создаем div с классом
// - если строка selector начинается с решетки # то создаем параграф с id
// пример:если передана строка '.block', то функция конструктор создает элемент с class="block"
// если передана строка '#best', то функция конструктор создает элемент с id =best"
