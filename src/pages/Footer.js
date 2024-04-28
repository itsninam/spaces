import React from "react";
import FlexContainer from "../components/FlexContainer";
import Navigation from "../components/Navigation";
import footerMenuItems from "../data/footerMenuItems";
import projectMenuItems from "../data/projectsMenuItems";
import followMenuItems from "../data/followMenuItems";
import ContactInfo from "../components/ContactInfo";

function Footer() {
  return (
    <footer>
      <FlexContainer>
        <ContactInfo />
        <Navigation menuItems={footerMenuItems} className="bottom-nav">
          <p>Menu</p>
        </Navigation>
        <Navigation menuItems={projectMenuItems} className="bottom-nav">
          <p>Projects</p>
        </Navigation>
        <Navigation menuItems={followMenuItems} className="bottom-nav">
          <p>Follow</p>
        </Navigation>
      </FlexContainer>
    </footer>
  );
}

export default Footer;
