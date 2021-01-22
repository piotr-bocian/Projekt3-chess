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
        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`); //<-- parentSquare przechowuje diva, w którym obecnie znajduje się figura
    }
    setOnBoard(pX, pY) {
        this.parentSquare.innerHTML = '';
        this.updatePosition(pX, pY);
        this.parentSquare.appendChild(document.createTextNode(this.symbol));
    }
    updatePosition(pX, pY) {
        this.positionX = pX;
        this.positionY = pY;
        this.parentSquare = document.getElementById(`${this.positionX}-${this.positionY}`);
    }
}
exports.Piece = Piece;
