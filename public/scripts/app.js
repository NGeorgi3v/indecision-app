"use strict";

var user = {
  name: "John Doe",
  age: 26,
  location: "New York"
};

var getLocation = function getLocation(location) {
  if (!location) return;

  return React.createElement(
    "p",
    null,
    "Location: ",
    location
  );
};

var template = React.createElement(
  "div",
  null,
  React.createElement(
    "h1",
    null,
    "Name: ",
    user.name ? user.name : "Anonymous"
  ),
  user.age && user.age >= 18 && React.createElement(
    "p",
    null,
    "Age: ",
    user.age
  ),
  getLocation(user.location)
);

var appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
