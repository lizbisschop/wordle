import { words } from "./words";
import "./styles.css";

const answer = "codam";

export const validateGuess = (guess) => {
  console.clear();
  if (guess.length < 5) {
    console.log("Not enough letters!");
    return;
  } else if (guess.length > 5) {
    console.log("Too many letters!");
    return;
  } else if (guess === answer) {
    console.log("This is the right answer!! Congrats!!");
    return;
  }
  for (let i = 0; i < words.length; i++) {
    if (guess === words[i]) break;
    if (i === words.length - 1) {
      console.log("Input is not part of the words list");
      return;
    }
  }
  for (let i = 0; i < guess.length; i++) {
    if (
      answer.search(guess[i]) === guess.search(guess[i]) &&
      i === answer.search(guess[i])
    ) {
      console.log("[" + guess[i] + "] is in the right spot");
    } else if (answer.search(guess[i]) > -1) {
      console.log("[" + guess[i] + "] exists but is not in the right spot");
    } else if (answer.search(guess[i]) === -1)
      console.log("[" + guess[i] + "] is not in this word");
  }
};
