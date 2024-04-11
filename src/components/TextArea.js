import React from "react";

function TextArea({ label, htmlFor, value, onChange, name, className }) {
  return (
    <>
      <label htmlFor={htmlFor} className={className}>
        {label}
      </label>
      <textarea
        id={htmlFor}
        rows="7"
        cols="50"
        name={name}
        value={value}
        onChange={onChange}
        className={className}
      ></textarea>
    </>
  );
}

export default TextArea;
