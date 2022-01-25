"use strict";

const getData = () => {
  return fetch("db.json")
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      throw new Error(error);
    });
};

const sendData = (data) => {
  fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "POST",
    body: JSON.stringify(data),
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
  })
    .then(() => console.log("data is sent"))
    .catch((err) => console.log(err));
};

getData()
  .then((data) => sendData(data))
  .catch((error) => console.log(error));
