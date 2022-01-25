"use strict";

const getData = () => {
  return new Promise((resolve, reject) => {
    fetch("db.json")
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

const sendData = (data) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  });
};

getData().then((data) => sendData(data));
