import React from "react";
import ReactDOM from "react-dom";

/**
Challenge: 

Part 1: Create a page of your own using a custom Page component

It should return an ordered list with the reasons why you're
excited to be learning React :)

Render your list to the page

Part 2: 
  - Add a `header` element with a nested `nav` element. Inside the `nav`,
    include a `img` element with the image of the React logo inside
    (src="./react-logo.png") and make sure to set the width to something
    more manageable so it doesn't take up the whole screen
  - Add an `h1` with some text describing the page. (E.g. "Reasons
    I'm excited to learn React"). Place it above the ordered list.
  - Add a `footer` after the list that says: 
      "© 20xx <last name here> development. All rights reserved."
 */

function ReactFacts() {
  return (
    <div>
      <header>
        <nav>
          <img src={require("./logo192.png")} width="40px" alt="react-logo" />
          <h1>React Introductory Challenge Page</h1>
        </nav>
      </header>
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
      <footer>
        <small>© 2022 Chamba Development. All rights reserved.</small>
      </footer>
    </div>
  );
}

ReactDOM.render(<ReactFacts />, document.getElementById("root"));
