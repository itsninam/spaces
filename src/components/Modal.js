import React, { forwardRef } from "react";
import Button from "./Button";

const Modal = forwardRef(({ heading, message, buttonText, onClick }, ref) => {
  return (
    <div className="modal-overlay" ref={ref}>
      <div className="modal-content">
        <h2>{heading}</h2>
        <p>{message}</p>
        <Button text={buttonText} onClick={onClick} />
      </div>
    </div>
  );
});

export default Modal;
