import React from "react";
import LinkedInButton from "../images/LinkedInButton.png";

export default function Main() {
  return (
    <main>
      <h1 className="name">Ezra Chamba</h1>
      <h2 className="title">Technology Discover Graduate</h2>
      <a href="mailto: ezra.chamba@vodafone.com" className="email">
        ezra.chamba@vodafone.com
      </a>
      <button className="button">
        <img
          src={LinkedInButton}
          href="https://linkedin.com"
          alt="linkedin buttom"
          className="button"
        ></img>
      </button>
      <h3 className="text--heading">About</h3>
      <p className="text--content">Text about me here</p>
      <h3 className="text--heading">Interests</h3>
      <p className="text--content">Text about my interests here</p>
    </main>
  );
}
