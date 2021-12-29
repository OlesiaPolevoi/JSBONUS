"use strict";

const DomElement = function (selector, height, width, bg, fontSize) {
  this.selector = selector;
  this.height = height;
  this.width = width;
  this.bg = bg;
  this.fontSize = fontSize;

  this.createElem = function () {
    if (this.selector[0] === ".") {
      const newDiv = document.createElement("div");
      newDiv.classList.add(this.selector.slice(1));
      const cssText = `height: ${this.height}px;width: ${this.width}px;background-color: ${this.bg}`;
      newDiv.style.cssText = cssText;
      return newDiv;
    }
    if (this.selector[0] === "#") {
      const newParagraph = document.createElement("p");
      newParagraph.setAttribute("id", this.selector.slice(1));
      const cssTextFont = `font-size: ${this.fontSize}px`;
      console.log(cssTextFont);
      newParagraph.style.cssText = cssTextFont;
      return newParagraph;
    }
  };
  this.addText = function (text) {
    const elem = document.querySelector(this.selector);
    elem.innerHTML = text;
  };
};

let elem1 = new DomElement("#best", 100, 200, "red", 36);

const bodyElem = document.querySelector("body");

bodyElem.append(elem1.createElem());

elem1.addText("some text");
