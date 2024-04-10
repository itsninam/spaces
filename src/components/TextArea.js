import React from "react";

function TextArea({ label, htmlFor }) {
  return (
    <>
      <label htmlFor={htmlFor}>{label}</label>
      <textarea id={htmlFor} name={htmlFor} rows="8" cols="50"></textarea>
    </>
  );
}

export default TextArea;
