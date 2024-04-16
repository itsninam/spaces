import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useForm } from "../contexts/FormContext";

function Navigation() {
  const { navigationRef, isVisible, setIsVisible } = useForm();
  return (
    <nav ref={navigationRef}>
      <a href="/">Spaces</a>

      <ul className={!isVisible ? "" : "mobile-menu"}>
        <li onClick={() => setIsVisible(false)}>
          <HashLink to="/#about">About</HashLink>
        </li>
        <li>
          <a href="/">Services</a>
        </li>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <Link to="contact">Contact</Link>
        </li>
      </ul>
      <button onClick={() => setIsVisible(!isVisible)}>
        <span class="material-symbols-outlined">
          {isVisible ? "close" : "menu"}
        </span>
      </button>
    </nav>
  );
}

export default Navigation;
