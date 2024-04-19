import React from "react";

function ImageBanner({ className, src, alt }) {
  return (
    <div className={`image-banner ${className}`}>
      <img src={src} alt={alt} />
    </div>
  );
}

export default ImageBanner;
