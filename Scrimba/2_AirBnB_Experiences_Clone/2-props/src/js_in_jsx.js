import React from "react";
import ReactDOM from "react-dom";

function NameAndTime() {
  const firstName = "Ezra";
  const lastName = "Chamba";
  const date = new Date();
  const hours = date.getHours();
  let timeOfDay;

  if (hours < 12) {
    timeOfDay = "morning";
  } else if (hours >= 12 && hours < 17) {
    timeOfDay = "afternoon";
  } else if (hours >= 17 && hours < 21) {
    timeOfDay = "evening";
  } else {
    timeOfDay = "night";
  }

  return (
    <div>
      <h1>
        Hi {firstName} {lastName} !
      </h1>
      <p>The time of day is {timeOfDay}</p>
    </div>
  );
}

// ReactDOM.render(<App />, document.getElementById("root"));
