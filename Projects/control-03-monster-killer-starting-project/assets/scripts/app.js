const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;


let chosenMaxLife = 100;
let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;

adjustHealthBars(chosenMaxLife);

function attackHandler() {
    const damage = dealMonsterDamage(ATTACK_VALUE);
    currentMonsterHealth -= damage;
    const monsterDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth -= monsterDamage;
    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert("You Won!");
    } else if (currentPlayerHealth  <= 0 && currentMonsterHealth > 0) {
        alert("You Lost!");
    } else if (currentPlayerHealth <= 0 && currentMonsterHealth <= 0) {
        alert("Draw!");
    }
}

attackBtn.addEventListener("click", attackHandler);