import React from "react";

export default class AddOption extends React.Component {
  state = {
    error: undefined,
  };

  handleAddOption = (event) => {
    event.preventDefault();

    const optionElement = event.target.elements.option;
    if (!optionElement) return;

    const optionValue = optionElement.value.trim();
    const error = this.props.handleAddOption(optionValue);

    this.setState(() => ({ error }));

    if (error) return;
    optionElement.value = "";
  };

  render() {
    return (
      <form className="add-option" onSubmit={this.handleAddOption}>
        {this.state.error && (
          <p className="add-option__error">{this.state.error}</p>
        )}

        <div className="add-option__actions">
          <input
            className="add-option__input"
            type="text"
            name="option"
            id="option"
          />

          <button className="button" type="submit">
            Add option
          </button>
        </div>
      </form>
    );
  }
}
