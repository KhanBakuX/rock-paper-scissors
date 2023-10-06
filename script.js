const getComputerChoice = () => {
  randomNum = Math.floor(Math.random() * 100) % 3;
  if (randomNum === 0) return "paper";
  else if (randomNum === 1) return "rock";
  else return "scissors";
};

/*const getPlayerChoice = () => {
  while (true) {
    let playerChoice = prompt("Enter your choice").toLowerCase();
    if (
      playerChoice === "paper" ||
      playerChoice === "rock" ||
      playerChoice === "scissors"
    )
      return playerChoice;
    console.log("your input is not rock or paper or scissors");
  }
};*/

const playRound = () => {
  const playerChoice = event.target.textContent;
  const computerChoice = getComputerChoice();
  let resultMessageString = "";
  if (playerChoice === computerChoice) {
    resultMessageString = `It's tie! Your choice is ${playerChoice} and computer choice is ${computerChoice}`;
    playerScore++;
    computerScore++;
    playerGameScore.textContent = `Player score: ${playerScore}`;
    computerGameScore.textContent = `Computer score: ${computerScore}`;
    resultMessage.textContent = resultMessageString;
  }
  if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    resultMessageString = `You win! ${playerChoice} beats ${computerChoice}`;
    resultMessage.textContent = resultMessageString;
    playerScore++;
    playerGameScore.textContent = `Player score: ${playerScore}`;
    computerGameScore.textContent = `Computer score: ${computerScore}`;
  } else {
    resultMessageString = `You lose!  ${computerChoice} beats ${playerChoice}`;
    resultMessage.textContent = resultMessageString;
    computerScore++;
    playerGameScore.textContent = `Player score: ${playerScore}`;
    computerGameScore.textContent = `Computer score: ${computerScore}`;
  }
  if (playerScore === 5 || computerScore === 5) checkWinner();
};

function checkWinner() {
  if (playerScore === computerScore)
    resultMessage.textContent = "The game ended up with a tie";
  else if (playerScore > computerScore)
    resultMessage.textContent =
      "Player wins the game, press any button to start a new game";
  else
    resultMessage.textContent =
      "Computer wins the game, press any button to start a new game";
  playerScore = 0;
  computerScore = 0;
}

/*const game = () => {
  console.log("The game started! You have 5 rounds to win a computer");

  let playerScore = 0;
  let computerScore = 0;

  for (let i = 0; i < 5; i++) {
    let roundWinner = playRound();
    if (roundWinner === "computer") ++computerScore;
    if (roundWinner === "player") ++playerScore;
  }

  if (computerScore > playerScore)
    console.log(
      `You have lost the game! Your score is ${playerScore} and computer score is ${computerScore}`
    );
  else if (computerScore < playerScore)
    console.log(
      `You have won the game! Your score is ${playerScore} and computer score is ${computerScore}`
    );
  else
    console.log(
      `It's a tie! Your score is ${playerScore} and computer score is ${computerScore}`
    );
};

game();
*/
let playerScore = 0;
let computerScore = 0;
const playerGameScore = document.querySelector("#player-score");
const computerGameScore = document.querySelector("#computer-score");
const resultMessage = document.querySelector("#result-message");

const buttons = document.querySelectorAll("button");
buttons.forEach((button) => button.addEventListener("click", playRound));
