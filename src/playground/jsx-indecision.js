const app = {
  title: "Indecision App",
  subtitle: "Put your life in the hands of a computer!",
  options: [],
};

const onSubmit = (event) => {
  event.preventDefault();

  const optionElement = event.target.elements.option;
  if (!optionElement.value) return;

  app.options.push(optionElement.value);
  optionElement.value = "";
  renderApp();
};

const onRemoveAll = () => {
  app.options = [];
  renderApp();
};

const onMakeDecision = () => {
  const randomNum = Math.floor(Math.random() * app.options.length);
  const option = app.options[randomNum];
  alert(option);
};

const renderApp = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>

      {app.subtitle && <p>{app.subtitle}</p>}

      <div>
        {app.options && app.options.length > 0 ? (
          <span>
            <p>Options ({app.options.length}):</p>

            <ol>
              {app.options.map((option, i) => {
                return <li key={i}>{option}</li>;
              })}
            </ol>
          </span>
        ) : (
          <p>{app.options.length} options </p>
        )}
      </div>

      <button disabled={app.options.length === 0} onClick={onMakeDecision}>
        What should I do?
      </button>
      <button onClick={onRemoveAll}>Remove all options</button>

      <form onSubmit={onSubmit}>
        <input type="text" name="option" />
        <button>Submit</button>
      </form>
    </div>
  );
  ReactDOM.render(template, appRoot);
};

const appRoot = document.getElementById("app");
renderApp();
