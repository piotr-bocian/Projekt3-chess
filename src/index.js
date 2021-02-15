import { Game } from './js-components/game';
import { timeHistory } from './js-components/timeHistoryContainer';
import { Timer } from './js-components/timer';
import logo from './js-components/starting_page/logo';
import menuContainer from './js-components/starting_page/menuContainer';
import endResult from './js-components/end-page/endListener';
import lang from './js-components/starting_page/lang';

document.querySelectorAll('.board-container div').forEach((element) => {
  element.addEventListener('click', selectPiece);
});

document.body.appendChild(lang());

document.querySelector('.eng').addEventListener('click', () => {
  document.documentElement.lang = 'en';
  localStorage.setItem('lang', 'en');
  document.location.reload();
  console.log('ang');
});

document.querySelector('.pl').addEventListener('click', () => {
  document.documentElement.lang = 'pl';
  localStorage.setItem('lang', 'pl');
  document.location.reload();
  console.log('pl');
});

if (localStorage) {
  document.documentElement.lang = localStorage.getItem('lang');
} else {
  document.documentElement.lang = "pl";
}

// load start window
document.body.appendChild(logo());
document.body.appendChild(menuContainer());

// time
var gameTime = document.querySelector('.rs-range');
var time = document.querySelector('.rs-range').value / 2;
gameTime.onchange = function (event) {
  time = document.querySelector('.rs-range').value / 2;
};
// firstPlayer
var player1 = document.getElementById("player1-input");
var player1Name = player1.placeholder;
player1.onchange = function(event){
  player1Name = player1.value;
}
// secondPlayer
var player2 = document.getElementById("player2-input");
var player2Name = player2.placeholder;
player2.onchange = function(event){
  player2Name = player2.value;
}

//stalemate mode
let P1 = document.getElementsByClassName("menuCheckList")[0];
let P2 = P1.getElementsByTagName("label")[0];
let P3 = P2.getElementsByTagName("span")[0];
let P33 = P2.getElementsByTagName("input")[0];

let P4 = document.getElementsByClassName("menuCheckList")[0];
let P5 = P4.getElementsByTagName("label")[1];
let P6 = P5.getElementsByTagName("span")[0];
let P66 = P5.getElementsByTagName("input")[0];

var target = P3.innerHTML;

P3.onclick = function(event) {
  target = P3.innerHTML;
};

P6.onclick = function(event) {
  target = P6.innerHTML;
};

P33.onclick = function(event) {
  target = P3.innerHTML;
};

P66.onclick = function(event) {
  target = P6.innerHTML;
};

// end test button
// const testButton = document.querySelector('.testEnd');
// testButton.addEventListener('click', () => {
//   let endModalResult = new endResult('USER1', 'USER2', 'Mateusz', 'czas');
//   endModalResult.showResult();
// });

// start the game after click button
const startButton = document.querySelector('.start-button');
startButton.addEventListener('click', () => {
  // hide start box after start the game
  let logoElement = document.querySelector('.logo');
  let menuContainer = document.querySelector('.menuContainer');
  let bodyContainer = document.getElementsByTagName('body');
  bodyContainer[0].classList.remove('body-start-page');
  logoElement.classList.add('display-none');
  menuContainer.remove();

  // new Game
  const game = new Game(time, player1Name, player2Name, target);
  Game.getWhiteTimer().start();
  //document.body.appendChild(game.timeHistory.timeHistoryContainer());
  //var TimerTry = new Timer(60, 'timer-white');
  //var TimerTry1 = new Timer(60, 'timer-black');

  // TEST:
  // if (true) {
  //   TimerTry.start();
  // }
  // let el = document.getElementById('timer-black');
  // if (true) {
  //   TimerTry1.start();
  // }
  document.querySelectorAll('.board-container div').forEach((element) => {
    element.addEventListener('click', selectPiece);
  });
  function selectPiece(e) {
    if (e.target.parentElement.classList.contains('pieceInside'))
      game.startMove(e.target.parentElement);
  }

  document.querySelector('.undo-button').addEventListener('click', () => {
    if(Game.moveCounter === true){
      Game.reverseMove();
      Game.moveCounter = false;
    }
  });

  document.querySelector('.exit-button').addEventListener('click', () => {
    location.reload();
  });
  
});

// document.querySelector('.eng')?.addEventListener('click', () => {
//   document.documentElement.lang = 'en';
// });
// document.querySelector('.pl').addEventListener('click', () => {
//   document.documentElement.lang = 'pl';
// });
