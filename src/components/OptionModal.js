import React from "react";
import Modal from "react-modal";

const OptionModal = (props) => (
  <Modal
    isOpen={!!props.selectedOption}
    ariaHideApp={false}
    contentLabel="Selected Option"
    onRequestClose={props.handleClearSelectedOption}
    closeTimeoutMS={400}
    className="modal"
  >
    <h3 className="modal__title">Selected option</h3>

    {props.selectedOption && (
      <p className="modal__body">{props.selectedOption}</p>
    )}

    <button className="button" onClick={props.handleClearSelectedOption}>
      Okay
    </button>
  </Modal>
);

export default OptionModal;
