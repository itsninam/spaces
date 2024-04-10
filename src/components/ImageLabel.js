import React from "react";

function ImageLabel({ image, text }) {
  return (
    <div className="image-label-container">
      <img src={image} alt={text} />
      <span>{text}</span>
    </div>
  );
}

export default ImageLabel;
