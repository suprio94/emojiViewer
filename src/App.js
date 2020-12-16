import React, { useState } from "react";
import "./styles.css";

export default function App() {
  const emojiLibrary = {
    "😉": "winking",
    "😊": "Smiling",
    "😒": "Unamused",
    "😐": "Neutral",
    "😩": "Weary",
    "☹️": "Frowning"
  };

  var emojis = Object.keys(emojiLibrary);

  var [meaning, setMeaning] = useState("");
  function emojiHandler(event) {
    var userInput = event.target.value;
    var meaning = emojiLibrary[userInput];
    // console.log(meaning);
    if (meaning === undefined) {
      meaning = "This emoji is not in our database";
    }
    setMeaning(meaning);
  }
  function ClickHandler(emoji) {
    var meaning = emojiLibrary[emoji];
    setMeaning(meaning);
  }
  return (
    <div className="App">
      <h1>iiiinside outtttt</h1>
      <input onChange={emojiHandler}></input>
      <div>{meaning}</div>
      <h2>emojis we know</h2>
      {emojis.map(function (emoji) {
        return (
          <span
            onClick={() => ClickHandler(emoji)}
            style={{ fontSize: "2rem", padding: "0.5rem", cursor: "pointer" }}
            key={emoji}
          >
            {emoji}
          </span>
        );
      })}
    </div>
  );
}
