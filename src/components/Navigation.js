import React from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import { useForm } from "../contexts/FormContext";

function Navigation() {
  const { navigationRef } = useForm();
  return (
    <nav ref={navigationRef}>
      <a href="/">Spaces</a>

      <ul>
        <li>
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
    </nav>
  );
}

export default Navigation;
