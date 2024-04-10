import React from "react";

function Input({ type, label, htmlFor }) {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <input type={type} id={htmlFor} name={htmlFor} />
    </>
  );
}

export default Input;
