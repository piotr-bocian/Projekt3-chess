import {Game} from "./js-components/game";

const game = new Game();

document.querySelectorAll('.light').forEach(element => {
    element.addEventListener('click', selectPiece)
});
document.querySelectorAll('.dark').forEach(element => {
    element.addEventListener('click', selectPiece)
});

function selectPiece(e){
    if(e.target.parentElement.classList.contains('pieceInside')) {
        game.startMove(e.target.parentElement);
        // document.querySelectorAll('img').forEach(element => {
        //     element.removeEventListener('click', selectPiece);
        // });
    }
}