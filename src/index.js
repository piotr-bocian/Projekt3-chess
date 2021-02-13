import {Game} from "./js-components/game"

const game = new Game(60); // trzeba podstawić wartość pobraną z range

document.querySelectorAll('.board-container div').forEach(element => {
    element.addEventListener('click', selectPiece)
});

function selectPiece(e) {
  if (e.target.parentElement.classList.contains('pieceInside'))
    game.startMove(e.target.parentElement);
}
//COFANIE RUCHÓW
document.querySelector('.undo-button').addEventListener('click', () => {
  game.reverseMove();
});
// document.querySelector('.en')?.addEventListener('click', () => {
//   document.documentElement.lang = 'en';
// });
// document.querySelector('.pl').addEventListener('click', () => {
//   document.documentElement.lang = 'pl';
// });
