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
        this.possibleMovesIds = [];
        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`); //<-- parentSquare przechowuje diva, w którym obecnie znajduje się figura
    }
    setOnBoard(pX, pY) {
        this.parentSquare.innerHTML = "";
        this.parentSquare.classList.remove('pieceInside');
        const img = document.createElement('img');
        img.classList.add('image');
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
    removeClassActive() {
        let elems = document.querySelectorAll('.active');
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('active');
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
