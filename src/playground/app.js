class IndecisionApp extends React.Component {
  constructor(props) {
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleDeleteOption = this.handleDeleteOption.bind(this);
    this.handlePick = this.handlePick.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: [],
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.options.length !== this.state.options.length) {
      const json = JSON.stringify(this.state.options);
      localStorage.setItem("options", json);
    }
  }

  componentDidMount() {
    try {
      const json = localStorage.getItem("options");
      const options = JSON.parse(json);
      if (!options) return new Error("Invalid data!");

      this.setState(() => ({ options }));
    } catch (error) {
      console.error(error);
    }
  }

  handleDeleteOptions() {
    this.setState(() => ({ options: [] }));
  }

  handlePick() {
    const optionIndex = Math.floor(Math.random() * this.state.options.length);
    alert(this.state.options[optionIndex]);
  }

  handleAddOption(option) {
    if (!option) {
      return "Enter valid value to add item";
    } else if (this.state.options.indexOf(option) > -1) {
      return "This option already exists";
    }

    this.setState((prevState) => ({
      options: prevState.options.concat(option),
    }));
  }

  handleDeleteOption(option) {
    this.setState((prevState) => ({
      options: prevState.options.filter(
        (stateOption) => stateOption !== option
      ),
    }));
  }

  render() {
    const subtitle = "Put your life in the hands of a computer!";

    return (
      <div>
        <Header subtitle={subtitle} />
        <Action
          hasOptions={this.state.options.length > 0}
          handlePick={this.handlePick}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOption={this.handleDeleteOption}
        />
        <AddOption handleAddOption={this.handleAddOption} />
      </div>
    );
  }
}

const Header = (props) => {
  return (
    <div>
      <h1>{props.title}</h1>

      {props.subtitle && <h2>{props.subtitle}</h2>}
    </div>
  );
};

Header.defaultProps = {
  title: "Indecision",
};

const Action = (props) => {
  return (
    <div>
      <button disabled={!props.hasOptions} onClick={props.handlePick}>
        What should I do?
      </button>
    </div>
  );
};

const Options = (props) => {
  return (
    <div>
      <button onClick={props.handleDeleteOptions}>Remove All</button>

      {props.options.length > 0 ? (
        props.options.map((option, i) => (
          <Option
            key={i}
            optionValue={option}
            handleDeleteOption={props.handleDeleteOption}
          />
        ))
      ) : (
        <p>Please add an option to get started!</p>
      )}
    </div>
  );
};

const Option = (props) => {
  return (
    <div>
      {props.optionValue} &nbsp;
      <button
        onClick={(e) => {
          props.handleDeleteOption(props.optionValue);
        }}
      >
        Remove
      </button>
    </div>
  );
};

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined,
    };
  }

  handleAddOption(event) {
    event.preventDefault();

    const optionElement = event.target.elements.option;
    if (!optionElement) return;

    const optionValue = optionElement.value.trim();
    const error = this.props.handleAddOption(optionValue);

    this.setState(() => ({ error }));

    if (error) return;
    optionElement.value = "";
  }

  render() {
    return (
      <form onSubmit={this.handleAddOption}>
        {this.state.error && <p>{this.state.error}</p>}

        <input type="text" name="option" id="option" />

        <button type="submit">Add option</button>
      </form>
    );
  }
}

ReactDOM.render(<IndecisionApp />, document.getElementById("app"));
