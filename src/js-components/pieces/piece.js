"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
const game_1 = require("../game");
const addMoveHistory_1 = require("../addMoveHistory");
const translateFunc_1 = require("../translateFunc");
class Piece {
    constructor(color, positionX, positionY) {
        this.symbol = ''; //<-- domyślnie ustawiłem puste, bo każda figura ma inny symbol
        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;
        this.possibleMovesIDs = this.showPossibleMoves();
        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`); //<-- parentSquare przechowuje diva, w którym obecnie znajduje się figura
        this.moveTimeArray = [];
        Piece.movesHistory = [];
        this.lastMove = '';
        this.moves = [];
    }
    setOnBoard(pX, pY) {
        //w pierwszych dwóch linijkach usuwamy figurę z obecnego miejsca, następnie ustawiamy w nowym
        this.parentSquare.innerHTML = "";
        this.parentSquare.classList.remove('pieceInside');
        const img = document.createElement('img');
        img.classList.add('image');
        img.classList.add(`${this.color}`.toLowerCase());
        img.setAttribute('src', this.symbol);
        this.updatePosition(pX, pY);
        this.parentSquare.appendChild(img);
        const imgContainer = img.parentElement;
        imgContainer.classList.add('pieceInside');
        game_1.Game.changeTurn();
        //Game.changeTimerTurn();
        game_1.Game.endOfTime();
    }
    updatePosition(pX, pY) {
        this.positionX = pX;
        this.positionY = pY;
        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`);
    }
    removeClassActive() {
        let elems = document.querySelectorAll('.active');
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('active');
            if (elems[i].classList.contains('en-pass')) {
                elems[i].classList.remove('en-pass');
            }
        }
    }
    // HISTORIA RUCHÓW
    history(square) {
        const fromPositionX = this.getPositionX();
        const fromPositionY = this.getPositionY().toString();
        const toPositionX = `${(square).id.charAt(0)}`;
        const toPositionY = `${parseInt((square).id.charAt(2))}`;
        Piece.movesHistory.push([fromPositionX, fromPositionY, toPositionX, toPositionY]);
        this.moves.push([fromPositionX, fromPositionY, toPositionX, toPositionY]);
    }
    //OPIS RUCHÓW
    historyNotation() {
        let name;
        let movedTo;
        let movedFrom;
        let timeStampWhite = document.querySelector('#timer-white')?.innerHTML;
        let timeStampBlack = document.querySelector('#timer-black')?.innerHTML;
        const time = game_1.Game.round % 2 === 0 ? timeStampWhite : timeStampBlack;
        let beatedPiece = Piece.beated.pop();
        const movesHistoryClone = Piece.movesHistory.slice();
        const createNotation = movesHistoryClone.pop();
        if (typeof createNotation === 'undefined')
            return;
        if (typeof createNotation[2] === 'undefined')
            return;
        if (typeof createNotation[0] === 'undefined')
            return;
        if (!time)
            return;
        //CZAS WYKONANIA RUCHU
        this.moveTimeArray.push(time);
        if (document.documentElement.lang === 'pl') {
            movedFrom = 'poruszył/a się z pola';
            movedTo = 'na pole';
            name = translateFunc_1.getName(this.constructor.name);
            //RUCHY
            const descriptive = `${name} ${movedFrom} ${createNotation[0]}-${createNotation[1]} ${movedTo} ${createNotation[2]}-${createNotation[3]}`;
            this.lastMove = descriptive;
            //NOTACJA DLA BICIA
            if (beatedPiece) {
                const descriptive = `${translateFunc_1.getName(beatedPiece.color)} ${translateFunc_1.getName(beatedPiece.constructor.name).toLowerCase()} został zbity przez ${translateFunc_1.getName(this.color).toLowerCase()} ${name.toLowerCase()}`;
                this.lastMove = descriptive;
            }
            addMoveHistory_1.addMoveHistory(this.lastMove, `${time} ${translateFunc_1.getName(this.color)}`);
            //EN VERSION
        }
        else if (document.documentElement.lang === 'en') {
            movedFrom = 'moved from';
            movedTo = 'to';
            name = this.constructor.name;
            //RUCHY
            const descriptive = `${name} ${movedFrom} ${createNotation[0]}-${createNotation[1]} ${movedTo} ${createNotation[2]}-${createNotation[3]}`;
            this.lastMove = descriptive;
            //BICIE
            if (beatedPiece) {
                const descriptive = `${beatedPiece.color} ${beatedPiece.constructor.name.toLowerCase()} was beaten by ${this.color.toLowerCase()} ${name.toLowerCase()}`;
                this.lastMove = descriptive;
            }
            addMoveHistory_1.addMoveHistory(this.lastMove, `${time} ${this.color}`);
        }
    }
    //COFANIE RUCHÓW
    reverseLastMove(color) {
        const lastMove = this.moves;
        if (this.moveTimeArray.length === 0) {
            return;
        }
        ;
        if (lastMove.length === 0) {
            return;
        }
        ;
        const popLastMove = lastMove.pop();
        this.removeClassActive();
        if (popLastMove) {
            const positionX = popLastMove[0];
            const positionY = popLastMove[1];
            if (positionX && positionY) {
                this.setOnBoard(positionX.toUpperCase(), parseInt(positionY));
                color === 'white' ? this.reverseTimeWhite() : this.reverseTimeBlack();
            }
        }
    }
    static retLast() {
        const black = game_1.Game.getBlacks();
        const white = game_1.Game.getWhites();
        const last = game_1.Game.beated.pop();
        const color = last?.color;
        console.log(last.positionX, last.positionY, last);
        if (!last) {
            return;
        }
        ;
        if (color === 'black') {
            console.log(color, 1);
            last.setOnBoard(last.positionX, last.positionY);
            black.push(last);
            return;
        }
        else {
            console.log(color, 3);
            last.setOnBoard(last.positionX, last.positionY);
            white.push(last);
            return;
        }
    }
    reverseTimeWhite() {
        if (this.moveTimeArray.length === 0) {
            return;
        }
        ;
        const time = this.moveTimeArray.pop();
        if (!time) {
            return;
        }
        ;
        game_1.Game.getWhiteTimer().setTimer(time);
        const timerWhite = document.querySelector('#timer-white');
        timerWhite.innerHTML = time;
    }
    reverseTimeBlack() {
        if (this.moveTimeArray.length === 0) {
            return;
        }
        ;
        const time = this.moveTimeArray.pop();
        if (!time) {
            return;
        }
        ;
        game_1.Game.getBlackTimer().setTimer(time);
        const timerBlack = document.querySelector('#timer-black');
        timerBlack.innerHTML = time;
    }
    getPositionX() {
        return this.positionX;
    }
    getPositionY() {
        return this.positionY;
    }
    getColor() {
        return this.color;
    }
    defendKing(possibleMoves) {
        const initialX = this.positionX;
        const initialY = this.positionY;
        const king = this.color === 'white' ? game_1.Game.getWhiteKing() : game_1.Game.getBlackKing();
        const defendingIDs = [];
        possibleMoves.forEach(move => {
            const posX = move.charAt(0);
            const posY = parseFloat(move.charAt(2));
            if (document.querySelector(`#${move}`).innerHTML === '') {
                this.setOnBoard(posX, posY);
                game_1.Game.changeTurn();
                if (!king.isChecked())
                    defendingIDs.push(move);
            }
            else {
                let originalPiece;
                if (this.color === 'white') {
                    for (let p of game_1.Game.getBlacks()) {
                        if (p.getPositionX() === posX && p.getPositionY() === posY) {
                            originalPiece = p;
                            break;
                        }
                    }
                }
                else {
                    for (let p of game_1.Game.getWhites()) {
                        if (p.getPositionX() === posX && p.getPositionY() === posY) {
                            originalPiece = p;
                            break;
                        }
                    }
                }
                if (king.isChecked()) {
                    if (king.isKingCheckedByThisPiece(originalPiece)) {
                        console.log(123);
                        defendingIDs.push(`${originalPiece.getPositionX()}-${originalPiece.getPositionY()}`);
                    }
                }
                else {
                    defendingIDs.push(`${originalPiece.getPositionX()}-${originalPiece.getPositionY()}`);
                }
            }
        });
        this.setOnBoard(initialX, initialY);
        game_1.Game.changeTurn();
        return defendingIDs;
    }
}
exports.Piece = Piece;
Piece.beated = [];
