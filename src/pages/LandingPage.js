import React from "react";

function LandingPage() {
  return (
    <header>
      <h1>
        <span>Spaces is an</span> architecture studio based in Toronto, Canada
      </h1>
      <div className="header-image-container">
        <img src={require("../assets/header.jpg")} alt="" />
      </div>
    </header>
  );
}

export default LandingPage;
