console.log("Salve");

const game= new Game();
const startBtn= document.getElementById("start")

startBtn.addEventListener("click", () =>{
    game.generateBoard();
    console.log(game.board);
    startBtn.classList.toggle("show");
    startBtn.classList.toggle("hidden");
    game.generateMinesCoord();
    console.log(game.minesCoord);
    game.positioningMines();
    console.log(game.board);
})


