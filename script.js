"use strict";
// lesson13 TO DO list

const todoControl = document.querySelector(".todo-control");
const headerInput = document.querySelector(".header-input");
const todoList = document.querySelector(".todo-list");
const todoCompleted = document.querySelector(".todo-completed");

const render = function () {
  todoList.innerHTML = "";
  todoCompleted.innerHTML = "";

  const storageArr = localStorage.getItem("toDoData");
  const toDoData = storageArr ? JSON.parse(storageArr) : [];

  toDoData.forEach(function (item, index) {
    const li = document.createElement("li");

    li.classList.add("todo-item");
    li.innerHTML =
      '<span class="text-todo">' +
      item.text +
      "</span>" +
      '<div class="todo-buttons">' +
      ' <button class="todo-remove"></button>' +
      '<button class="todo-complete"></button>' +
      "</div>";

    if (item.completed) {
      todoCompleted.append(li);
    } else {
      todoList.append(li);
    }

    li.querySelector(".todo-complete").addEventListener("click", function () {
      item.completed = !item.completed;
      localStorage.setItem("toDoData", JSON.stringify(toDoData));
      render();
    });

    li.querySelector(".todo-remove").addEventListener("click", function () {
      const toDoData = JSON.parse(localStorage.getItem("toDoData"));
      toDoData.splice(index, 1);
      localStorage.setItem("toDoData", JSON.stringify(toDoData));

      render();
    });
  });
};

todoControl.addEventListener("submit", function (event) {
  event.preventDefault();

  const storageArr = localStorage.getItem("toDoData");
  const toDoData = storageArr ? JSON.parse(storageArr) : [];
  localStorage.setItem("toDoData", JSON.stringify(toDoData));

  if (headerInput.value.trim() === "") {
    return;
  }
  const newToDo = {
    text: headerInput.value,
    completed: false,
  };

  toDoData.push(newToDo);

  localStorage.setItem("toDoData", JSON.stringify(toDoData));

  headerInput.value = "";

  render();
});

render();
