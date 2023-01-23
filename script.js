const game = document.getElementById("game");
const startButton = document.getElementById("start-button");

startButton.addEventListener("click", startGame);

function startGame() {
  startButton.style.display = "none";
  
  //create game objects
  const player = createGameObject("player", 50, 50);
  game.appendChild(player);
  
  const enemy = createGameObject("enemy", 100, 100);
  game.appendChild(enemy);
  
  //add event listeners for player movement
  document.addEventListener("keydown", movePlayer);
  
  function movePlayer(event) {
    switch (event.keyCode) {
      case 37: //left arrow
        player.style.left = player.offsetLeft - 10 + "px";
        break;
      case 38: //up arrow
        player.style.top = player.offsetTop - 10 + "px";
        break;
      case 39: //right arrow
        player.style.left = player.offsetLeft + 10 + "px";
        break;
      case 40: //down arrow
        player.style.top = player.offsetTop + 10 + "px";
        break;
    }
  }
  
  function createGameObject(className, x, y) {
    const gameObject = document.createElement("div");
    gameObject.classList.add(className);
    gameObject.style.left = x + "px";
    gameObject.style.top = y + "px";
    return gameObject;
  }
}
