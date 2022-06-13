import React from "react";
import ReactDOM from "react-dom";

const page = (
  <div>
    <img src={require("./logo192.png")} width="40px" alt="react-logo" />
    <h1>Fun facts about React</h1>
    <ul>
      <li>Was first released in 2013</li>
      <li>Originally created by Jordan Walke</li>
      <li>Has well over 100K stars on GitHub</li>
      <li>Maintained by Facebook</li>
      <li>Powers thousands of enterprise apps including mobile apps</li>
    </ul>
  </div>
);

ReactDOM.render(page, document.getElementById("root"));
