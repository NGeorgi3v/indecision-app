"use strict";

var user = {
  name: "John Doe",
  age: 26,
  location: "New York"
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Name: ",
    user.name
  ),
  React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  React.createElement(
    "p",
    null,
    "Location: ",
    user.location
  )
);
var appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
