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

playRound();

/* 
Understading of a problem

I need to write a programm which will play rock-paper-scissors with a user.
User starts a game and the round of a game starts.  User chooses rock-paper-scissors. After the action is taken computer repsonds with
rock-paper-scissors. After that comp evaluates the result and shows it to user. The evaluation and win is when paper beats rock, rock beats scissors, scissor beats 
paper. In case of equality it is tie. Game plays 5 rounds. Comp counts the resulst for each player: win - 1 point in other cases it is 0.
after 5 rounds comp shows the message who is winner and give a choice to a player if he wants to exit the game or play again.


Plan
User interface is prompt

Input:
1. User starts a game in prompt
2. User choose rock paper or scissors in each round in prompt
3. User Chooses if he wants to a new 5 round or exit a program

Output:
1. the message who won a round
2. the message who won a game

Pseudocode

Comp asks if user wants to start a game
    IF he does not stop the program
    If he wants start a game with 5 rounds in it
    Initialize compScore and userScore
    Loop from 1 to 5 
        start a new round
        decalre a winner of a round
        message who won a round
        add up score to wiiner in case of a win
    Decalre a winner of a game
    Ask user if wants to continue
    If he wants start a ew game
    if he doest end up a game.

*/
