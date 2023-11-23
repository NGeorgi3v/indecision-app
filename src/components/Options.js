import React from "react";
import Option from "./Option";

const Options = (props) => (
  <div>
    <div className="widget__header">
      <h3 className="widget__title">Your Options</h3>

      <button
        className="button button--link"
        onClick={props.handleDeleteOptions}
      >
        Remove All
      </button>
    </div>

    {props.options.length > 0 ? (
      props.options.map((option, index) => (
        <Option
          key={index}
          count={index + 1}
          optionValue={option}
          handleDeleteOption={props.handleDeleteOption}
        />
      ))
    ) : (
      <p className="widget__message">Please add an option to get started!</p>
    )}
  </div>
);

export default Options;
