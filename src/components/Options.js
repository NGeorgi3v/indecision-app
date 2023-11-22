import React from "react";
import Option from "./Option";

const Options = (props) => (
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

export default Options;
