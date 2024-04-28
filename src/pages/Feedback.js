import React from "react";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import ContentContainer from "../components/ContentContainer";
import FlexContainer from "../components/FlexContainer";
import ImageBanner from "../components/ImageBanner";
import arrow from "../assets/arrow.svg";

function Feedback() {
  return (
    <section className="feedback">
      <ContentContainer>
        <Header text="Words from our clients" />
        <div className="container">
          <Paragraph text="Spaces were an incredible team of passionate creatives, who truly transformed our space into a beautiful sanctuary." />
          <FlexContainer>
            <img
              className="profile-img"
              src={require("../assets/image10.jpg")}
              alt="customer smiling"
            />
            <div className="name-container">
              <h3>Jaime Jorge</h3>
              <p>
                Founder, <span>Rentea</span>
              </p>
            </div>
            <img src={arrow} alt="right arrow" />
          </FlexContainer>
        </div>
      </ContentContainer>
      <ImageBanner
        className="feedback"
        src={require("../assets/image9.jpg")}
        alt="Lounge area with modern chairs and couch"
      />
    </section>
  );
}

export default Feedback;
