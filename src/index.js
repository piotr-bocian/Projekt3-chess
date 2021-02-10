import { Board } from './js-components/board';
import { fillBoard } from './js-components/fillBoard';
import { Game } from './js-components/game';
import timeHistoryContainer from './js-components/timeHistoryContainer';
import Timer from './js-components/timer';
// import addMoveHistory from './js-components/addMoveHistory';

const game = new Game();

document.querySelectorAll('.light').forEach((element) => {
  element.addEventListener('click', selectPiece);
});
document.querySelectorAll('.dark').forEach((element) => {
  element.addEventListener('click', selectPiece);
});

function selectPiece(e) {
  if (e.target.parentElement.classList.contains('pieceInside'))
    game.startMove(e.target.parentElement);
}
//COFANIE RUCHÓW
document.querySelector('.btn')?.addEventListener('click', ()=>{
  game.reverseMove();
})
document.querySelector('.en')?.addEventListener('click', ()=>{
  document.documentElement.lang = 'en'
})
document.querySelector('.pl')?.addEventListener('click', ()=>{
  document.documentElement.lang = 'pl'
})


document.body.appendChild(timeHistoryContainer());
var TimerTry = new Timer(1, 'timer-white');
var TimerTry1 = new Timer(1, 'timer-black');

// TEST:
if (true) {TimerTry.start()};
let el = document.getElementById('timer-black');
if (true) {TimerTry1.start()};

