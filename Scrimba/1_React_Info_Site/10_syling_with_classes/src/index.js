import React from "react";
import ReactDOM from "react-dom";
import styles from "./styles.css";

function Header() {
  return (
    <header>
      <nav>
        <img src={require("./logo192.png")} width="40px" alt="react-logo" />
        <ul className="nav-items">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
          <h1>React Introductory Challenge Page</h1>
        </ul>
      </nav>
    </header>
  );
}

function Footer() {
  return (
    <footer>
      <small>© 2022 Chamba Development. All rights reserved.</small>
    </footer>
  );
}

function MainContent() {
  return (
    <div>
      <h2>Fun facts about React</h2>
      <ul>
        <li>Was first released in 2013</li>
        <li>Originally created by Jordan Walke</li>
        <li>Has well over 100K stars on GitHub</li>
        <li>Maintained by Facebook</li>
        <li>Powers thousands of enterprise apps including mobile apps</li>
      </ul>

      <h2>Reasons I'm excited to learn React</h2>
      <ol>
        <li>It's a popular library</li>
        <li>I can get a better job with it</li>
        <li>I always love to learn new technologies</li>
        <li>A beter job means more experience and money</li>
      </ol>
    </div>
  );
}

function ReactPage() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

ReactDOM.render(<ReactPage />, document.getElementById("root"));
