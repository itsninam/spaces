import React from "react";
import Navigation from "../components/Navigation";

function LandingPage() {
  return (
    <header>
      <Navigation />

      <h1>Spaces is an architecture studio based in Toronto, Canada</h1>
      <div className="header-image-container">
        <img src={require("../assets/header.jpg")} alt="" />
      </div>
    </header>
  );
}

export default LandingPage;
