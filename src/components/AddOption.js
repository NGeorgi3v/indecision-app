import React from "react";

export default class AddOption extends React.Component {
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
