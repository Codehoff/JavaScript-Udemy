const startGameBtn = document.getElementById('start-game-btn');

function startGame() {
    console.log("Game starting")
}

const person = {
    greet: function greet() {
        console.log("Hello There");
    }
};

startGameBtn.addEventListener("click", startGame);