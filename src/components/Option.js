import React from "react";

const Option = (props) => (
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

export default Option;
