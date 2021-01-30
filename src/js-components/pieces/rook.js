"use strict";
"use stricte";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Rook = void 0;
const piece_1 = require("./piece");
const game_1 = require("../game");
//wieża
class Rook extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Rook.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        this.removeClassActive();
        const arrayOfX = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H'];
        // const indexOfX:number = arrayOfX.indexOf(this.getPositionX());
        const rookLineX = this.getPositionX();
        const rookLineY = this.getPositionY();
        for (let i = -1; i <= 8; i++) {
            const squareY = document.querySelector(`#${rookLineX}-${i}`);
            if (squareY != null)
                squareY.classList.add('active');
            arrayOfX.map((letter) => {
                const squareX = document.querySelector(`#${letter}-${rookLineY}`);
                if (squareX != null)
                    squareX.classList.add('active');
            });
        }
        const squares = document.querySelectorAll('.board-container div');
        squares.forEach(square => {
            square.addEventListener('click', (e) => {
                let pickedFigure = e.currentTarget;
                const x = game_1.Game.lastChosen.getPositionX();
                const y = game_1.Game.lastChosen.getPositionY();
                if (!(square.classList.contains('pieceInside')) && square.classList.contains('active') && this.getPositionX() === x && this.getPositionY() === y) {
                    this.setOnBoard(square.id.charAt(0), parseInt(square.id.charAt(2)));
                    squares.forEach(square => square.classList.remove('active'));
                }
            });
        });
    }
    removeClassActive() {
        let elems = document.querySelectorAll('.active');
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('active');
        }
    }
}
exports.Rook = Rook;
