import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";

function About() {
  return (
    <section id="about" className="about">
      <div className="flex-container">
        <div className="about-content">
          <Header text="Our Practice" />
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum
          </p>
          <Button text="Send message"></Button>
        </div>
        <div className="about-image-container">
          <img
            src={require("../assets/image2.jpg")}
            alt="Kitchen with white counters, wooden chairs, and black hanging lamps"
          />
          <img
            src={require("../assets/image1.jpg")}
            alt="Kitchen with white counters, wooden chairs, and black hanging lamps"
          />
        </div>
      </div>
    </section>
  );
}

export default About;
