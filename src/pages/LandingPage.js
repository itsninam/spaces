import React from "react";
import ImageBanner from "../components/ImageBanner";

function LandingPage() {
  return (
    <header>
      <h1>
        <span>Spaces is an</span> architecture studio based in Toronto, Canada
      </h1>
      <ImageBanner
        className="header"
        src={require("../assets/header.jpg")}
        alt="Living room with modern furniture and sunlight peeking through tall windows"
      />
    </header>
  );
}

export default LandingPage;
