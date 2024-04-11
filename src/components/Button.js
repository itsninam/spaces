import React from "react";

function Button({ text, type, onClick }) {
  return (
    <button type={type} onClick={onClick} className="btn">
      {text}
    </button>
  );
}

export default Button;
