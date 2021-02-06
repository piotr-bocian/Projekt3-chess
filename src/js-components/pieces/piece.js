"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Piece = void 0;
class Piece {
    //zastanawiam się czy nie zrobić tych wszystkich właściwości private...
    constructor(color, positionX, positionY) {
        this.symbol = ''; //<-- domyślnie ustawiłem puste, bo każda figura ma inny symbol
        this.color = color;
        this.positionX = positionX;
        this.positionY = positionY;
        this.movesHistory = [];
        this.lastMove = '';
        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`); //<-- parentSquare przechowuje diva, w którym obecnie znajduje się figura
    }
    setOnBoard(pX, pY) {
        this.parentSquare.innerHTML = '';
        this.parentSquare.classList.remove('pieceInside');
        const img = document.createElement('img');
        img.classList.add(`${this.color}`);
        img.setAttribute('src', this.symbol);
        this.updatePosition(pX, pY);
        this.parentSquare.appendChild(img);
        const imgContainer = img.parentElement;
        imgContainer.classList.add('pieceInside');
    }
    updatePosition(pX, pY) {
        this.positionX = pX;
        this.positionY = pY;
        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`);
    }
    //HISTORIA RUCHÓW
    history(square) {
        const fromPositionX = this.getPositionX();
        const fromPositionY = this.getPositionY().toString();
        const toPositionX = `${(square).id.charAt(0)}`;
        const toPositionY = `${parseInt((square).id.charAt(2))}`;
        this.movesHistory.push([fromPositionX, fromPositionY, toPositionX, toPositionY]);
    }
    historyNotation() {
        const movesHistoryClone = this.movesHistory.slice();
        const createNotation = movesHistoryClone.pop();
        if (typeof createNotation === 'undefined')
            return;
        if (typeof createNotation[2] === 'undefined')
            return;
        if (typeof createNotation[0] === 'undefined')
            return;
        const descriptive = `${this.color} ${this.constructor.name} moved from ${createNotation[0]}-${createNotation[1]} to ${createNotation[2]}-${createNotation[3]}`;
        const longAlgebraicNotation = `${this.constructor.name[0]}${createNotation[0].toLowerCase()}${createNotation[1]}-${createNotation[2].toLowerCase()}${createNotation[3]}`;
        this.lastMove = descriptive;
        // this.lastMove = longAlgebraicNotation;
        console.log(this.lastMove);
    }
    //COFANIE RUCHÓW
    reverseMove() {
        //tablica ce wszystkimi ruchami pozostaje, działamy na kopii
        const lastMove = this.movesHistory.slice();
        document.querySelector('.btn')?.addEventListener('click', () => {
            this.removeClassActive();
            if (lastMove.length === 0) {
                return;
            }
            ;
            const popLastMove = lastMove.pop();
            this.movesHistory.length = lastMove.length;
            if (popLastMove) {
                console.log(popLastMove);
                const positionX = popLastMove[0];
                const positionY = popLastMove[1];
                if (positionX && positionY) {
                    this.setOnBoard(positionX.toUpperCase(), parseInt(positionY));
                }
            }
            else {
                return;
            }
        });
    }
    removeClassActive() {
        let elems = [...document.querySelectorAll('.active')];
        for (let i = 0; i < elems.length; i++) {
            elems[i]?.classList.remove('active');
        }
    }
    getPositionX() {
        return this.positionX;
    }
    getPositionY() {
        return this.positionY;
    }
}
exports.Piece = Piece;
