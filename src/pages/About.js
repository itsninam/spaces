import React from "react";
import Header from "../components/Header";
import Button from "../components/Button";
import Paragraph from "../components/Paragraph";
import FlexContainer from "../components/FlexContainer";
import ContentContainer from "../components/ContentContainer";

function About() {
  return (
    <section id="about" className="about">
      <FlexContainer>
        <ContentContainer>
          <Header text="Our Practice" />
          <Paragraph
            text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum"
          />
          <Button text="Send message"></Button>
        </ContentContainer>
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
      </FlexContainer>
    </section>
  );
}

export default About;
