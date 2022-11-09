import "./styles.css";

import React, { useState } from "react";

import { GuessButton } from "./GuessButton";
import { Input } from "./Input";
import { validateGuess } from "./game";

export default function App() {
  const [guess, setGuess] = useState();
  const onClick = () => {
    validateGuess(guess);
  };
  const updateInput = (event) => {
    setGuess(event.target.value);
  };

  return (
    <div className="App" style={styles.container}>
      <h3>
        A simplified version of the game{" "}
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.nytimes.com/games/wordle/index.html"
        >
          wordle
        </a>
      </h3>
      <Input onChange={updateInput} />
      <GuessButton onClick={onClick} />
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center"
  }
};
