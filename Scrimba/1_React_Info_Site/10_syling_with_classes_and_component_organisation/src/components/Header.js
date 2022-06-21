import React from "react";
import reactLogo from "../images/logo192.png";

function Header() {
  return (
    <header>
      <nav className={"nav"}>
        <img className="logo" src={reactLogo} alt="react-logo" />
        <h1>React Intro Challenge Page</h1>
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
