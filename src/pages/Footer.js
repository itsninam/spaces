import React from "react";
import FlexContainer from "../components/FlexContainer";
import Navigation from "../components/Navigation";
import footerMenuItems from "../data/footerMenuItems";

function Footer() {
  return (
    <footer>
      <FlexContainer>
        <h4>Spaces</h4>
        <Navigation menuItems={footerMenuItems} className="bottom-nav">
          <p>Menu</p>
        </Navigation>
      </FlexContainer>
    </footer>
  );
}

export default Footer;
