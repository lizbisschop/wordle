import { words } from "./words";
import "./styles.css";

//Running the game on your own machine
//brew install nvm
// mkdir ~/.nvm
// add to ~/.zshrc:
//  export NVM_DIR="$HOME/.nvm"
// [ -s "/Users/lbisscho/.brew/opt/nvm/nvm.sh" ] && \. "/Users/lbisscho/.brew/opt/nvm/nvm.sh"  # This loads nvm
// [ -s "/Users/lbisscho/.brew/opt/nvm/etc/bash_completion.d/nvm" ] && \. "/Users/lbisscho/.brew/opt/nvm/etc/bash_completion.d/nvm"  # This loads nvm bash_completion
// nvm install v12.22.9
// npm install
// npm audit fix
// npm run start

const answer = "codam";

export const validateGuess = (guess) => {
  console.clear();
  if (!guess) {
    console.log("Guess cannot be empty");
    return;
  } else if (guess.length < 5) {
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
    if (guess[i] === answer[i]) {
      console.log("[" + guess[i] + "] is in the right spot");
    } else if (answer.includes(guess[i])) {
      console.log("[" + guess[i] + "] exists but is not in the right spot");
    } else {
      console.log("[" + guess[i] + "] is not in this word");
    }
  }
};

