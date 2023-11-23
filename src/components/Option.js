import React from "react";

const Option = (props) => (
  <div className="option">
    <p className="option__text">
      {props.count}. {props.optionValue}
    </p>

    <button
      className="button button--link"
      onClick={(e) => {
        props.handleDeleteOption(props.optionValue);
      }}
    >
      Remove
    </button>
  </div>
);

export default Option;
