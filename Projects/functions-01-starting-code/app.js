const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";
const RESULT_DRAW = "DRAW";
const RESULT_PLAYER_WIN = "PLAYER WINS";
const RESULT_COMPUTER_WIN = "COMPUTER WINS";

let gameisRunning = false;

const startGameBtn = document.getElementById("start-game-btn");

const getPlayerChoice = function () {
  const selection = prompt("Rock, Paper or Scissors?", "").toUpperCase();
  if (selection != ROCK && selection != SCISSORS && selection != PAPER) {
    alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
    return DEFAULT_USER_CHOICE;
  }
  return;
};

const getComputerChoice = function () {
  arr = [ROCK, PAPER, SCISSORS];
  const selection = arr[Math.ceil(Math.random() * 3) - 1];

  return `${selection}`;
};

const determineWinner = (cChoice, pChoice) =>
  cChoice == pChoice
    ? RESULT_DRAW
    : (cChoice === ROCK && pChoice === PAPER) ||
      (cChoice === PAPER && pChoice === SCISSORS) ||
      (cChoice === SCISSORS && pChoice === ROCK)
    ? RESULT_PLAYER_WIN
    : RESULT_COMPUTER_WIN;


startGameBtn.addEventListener("click", function () {
  if (gameisRunning) {
    return;
  }

  gameisRunning = true;
  console.log("Game is starting...");
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  const winner = determineWinner(computerSelection, playerSelection);
  let message = `You picked ${playerSelection}, computer picked ${computerSelection}`
  if (winner === RESULT_DRAW) {
    message = message + " || Draw"
  } else if (winner === RESULT_PLAYER_WIN) {
    message = message + " || You won!"
  } else {
    message = message + " || You lost!"
  }
  alert(message);
  gameisRunning = false;
});
