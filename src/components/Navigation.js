import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useForm } from "../contexts/FormContext";
import menuItems from "../data/menuItems";

function Navigation() {
  const { navigationRef, isMobileMenuOpen, setIsMobileMenuOpen } = useForm();
  return (
    <nav ref={navigationRef}>
      <a href="/">Spaces</a>

      <ul className={!isMobileMenuOpen ? "" : "mobile-menu"}>
        {menuItems.map((menuItem) => {
          return (
            <li onClick={() => setIsMobileMenuOpen(false)}>
              {menuItem.directLink && (
                <HashLink to={menuItem.menuItemLink}>
                  {menuItem.menuItemLabel}
                </HashLink>
              )}
              {!menuItem.directLink && (
                <Link to={menuItem.menuItemLink}>{menuItem.menuItemLabel}</Link>
              )}
            </li>
          );
        })}
      </ul>
      <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
        <span class="material-symbols-outlined">
          {isMobileMenuOpen ? "close" : "menu"}
        </span>
      </button>
    </nav>
  );
}

export default Navigation;
