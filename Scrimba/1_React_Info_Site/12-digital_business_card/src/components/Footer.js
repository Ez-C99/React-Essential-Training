import React from "react";
import TwitterIcon from "../images/TwitterIcon.png";
import FacebookIcon from "../images/FacebookIcon.png";
import InstagramIcon from "../images/InstagramIcon.png";
import GitHubIcon from "../images/GitHubIcon.png";

export default function Footer() {
  return (
    <footer className="footer">
      <button>
        <img
          src={TwitterIcon}
          className="icon"
          alt="Twitter"
          href="https://twitter.com"
        ></img>
      </button>
      <button>
        <img
          src={FacebookIcon}
          className="icon"
          alt="Facebook"
          href="https://facebook.com"
        ></img>
      </button>
      <button>
        <img
          src={InstagramIcon}
          className="icon"
          alt="Instagram"
          href="https://instagram.com"
        ></img>
      </button>
      <button>
        <img
          src={GitHubIcon}
          className="icon"
          alt="GitHub"
          href="https://github.com"
        ></img>
      </button>
    </footer>
  );
}
