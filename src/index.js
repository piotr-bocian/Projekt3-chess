import {Game} from "./js-components/game"


const game = new Game();

document.querySelectorAll('.board-container div').forEach(element => {
    element.addEventListener('click', selectPiece)
});

function selectPiece(e){
    if(e.target.parentElement.classList.contains('pieceInside'))
        game.startMove(e.target.parentElement);
}