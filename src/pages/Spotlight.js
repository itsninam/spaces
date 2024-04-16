import React from "react";
import ImageLabel from "../components/ImageLabel";
import Header from "../components/Header";
import Paragraph from "../components/Paragraph";
import FlexContainer from "../components/FlexContainer";
import ContentContainer from "../components/ContentContainer";

function Spotlight() {
  return (
    <section id="spotlight" className="spotlight">
      <ContentContainer>
        <Header text="Spotlight" />
        <Paragraph
          text=" Manifestation spirit guides quartz, Reiki practitioner stones oracle
        peace healer goddess sage charms."
        />
      </ContentContainer>

      <FlexContainer>
        <ImageLabel
          image={require("../assets/image3.jpg")}
          text="Elouise Avenue"
        />
        <ImageLabel
          image={require("../assets/image4.jpg")}
          text="Grant Residence"
        />
      </FlexContainer>
      <FlexContainer>
        <ImageLabel image={require("../assets/image5.jpg")} text="Basil Lab" />
        <ImageLabel
          image={require("../assets/image6.jpg")}
          text="Jo Residence"
        />
        <ImageLabel image={require("../assets/image7.jpg")} text="Rentea" />
      </FlexContainer>
    </section>
  );
}

export default Spotlight;
