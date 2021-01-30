import {Board} from "./js-components/board";
import {fillBoard} from "./js-components/fillBoard";
import {Game} from "./js-components/game"

// const gameBoard = new Board();
// gameBoard.drawBoard();
// fillBoard();

const game = new Game();

document.querySelectorAll('.board-container div').forEach(element => {
    element.addEventListener('click', selectPiece)
});

function selectPiece(e){
    if(e.target.parentElement.classList.contains('pieceInside'))
        game.startMove(e.target.parentElement);
}