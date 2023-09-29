const getComputerChoice = () => {
  randomNum = Math.floor(Math.random() * 100) % 3;
  if (randomNum === 0) return "paper";
  else if (randomNum === 1) return "rock";
  else return "scissors";
};

const getPlayerChoice = () => {
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
};

const playRound = () => {
  const playerChoice = getPlayerChoice();
  const computerChoice = getComputerChoice();
  if (playerChoice === computerChoice) {
    console.log(
      `It's tie! Your choice is ${playerChoice} and computer choice is ${computerChoice}`
    );
    return "tie";
  }
  if (
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${playerChoice} beats ${computerChoice}`);
    return "player";
  } else {
    console.log(`You lose!  ${computerChoice} beats ${playerChoice}`);
    return "computer";
  }
};

const game = () => {
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
