const ROCK = "ROCK";
const PAPER = "PAPER";
const SCISSORS = "SCISSORS";
const DEFAULT_USER_CHOICE = "ROCK";

let gameisRunning = false;

const startGameBtn = document.getElementById('start-game-btn');

const getPlayerChoice = function() {
    const selection = prompt("Rock, Paper or Scissors?", "").toUpperCase();
    if (
        selection != ROCK && 
        selection != SCISSORS && 
        selection != PAPER
    ){
        alert(`Invalid choice! We chose ${DEFAULT_USER_CHOICE} for you!`);
        return DEFAULT_USER_CHOICE;
    }
    return selection;
};

startGameBtn.addEventListener("click", function() {
    if (gameisRunning) {
        return;
    }

    gameisRunning = true,
    console.log("Game is starting...");
    const playerSelection = getPlayerChoice();
    console.log(playerSelection);
});