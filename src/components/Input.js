import React from "react";

function Input({ type, label, htmlFor, onChange, value, name, className }) {
  return (
    <>
      <label htmlFor={htmlFor} className={className}>
        {label}
      </label>
      <input
        type={type}
        id={htmlFor}
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      />
    </>
  );
}

export default Input;
