const user = {
  name: "John Doe",
  age: 26,
  location: "New York",
};

const template = (
  <div>
    <h1>Name: {user.name}</h1>
    <p>Age: {user.age}</p>
    <p>Location: {user.location}</p>
  </div>
);
const appRoot = document.getElementById("app");

ReactDOM.render(template, appRoot);
