const user = {
  name: "John Doe",
  age: 26,
  location: "New York",
};

const getLocation = (location) => {
  if (!location) return;

  return <p>Location: {location}</p>;
};

const template = (
  <div>
    <h1>Name: {user.name ? user.name : "Anonymous"}</h1>
    {user.age && user.age >= 18 && <p>Age: {user.age}</p>}
    {getLocation(user.location)}
  </div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template, appRoot);
