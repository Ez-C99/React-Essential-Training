import React from "react";
import AirBnBLogo from "../images/airbnb-logo.png";

export default function Navbar() {
  return (
    <nav>
      <img src={AirBnBLogo} alt="airbnb-logo" className="nav--logo" />
    </nav>
  );
}
