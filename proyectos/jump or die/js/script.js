const player = document.getElementById("player");
const obstacle = document.getElementById("obstacle");
const gameOverText = document.getElementById("game-over");

document.body.addEventListener("keydown", (e) => {
    if (e.code === "Space" || e.code === "ArrouUp") {
        jump();
    } else if (!gameOverText.classList.contains("hidden") && (e.code === "Enter")) {
        restartGame();
    }
});

document.body.addEventListener("touchstart", jump);
function jump() {
    if (!player.classList.contains("jump")) {
        player.classList.add("jump");

        setTimeout(() => {
            player.classList.remove("jump");
        }, 800);
    }

}

let checkCollision = setInterval(collisionLogic, 10);

function collisionLogic() {
    const playerRect = player.getBoundingClientRect();
    const obstacleRect = obstacle.getBoundingClientRect();

    if (
        playerRect.right > obstacleRect.left &&
        playerRect.left < obstacleRect.right &&
        playerRect.bottom > obstacleRect.top &&
        playerRect.top < obstacleRect.bottom
    ) {
        obstacle.style.animation = "none";
        obstacle.style.right = obstacleRect.right + "px";
        gameOverText.classList.remove("hidden");
    }
}

function restartGame() {
    gameOverText.classList.add("hidden");
    obstacle.style.animation = "none";
    void obstacle.offsetWidth;
    obstacle.style.animation = "moveObstacle 2s linear infinite";
    checkCollision = setInterval(collisionLogic, 10);
}