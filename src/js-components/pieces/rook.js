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
        const checkYAxis = () => {
            // top
            console.log(rookLineX, rookLineY);
            for (let i = rookLineY + 1; i <= 8; i++) {
                let squareY = document.querySelector(`#${rookLineX}-${i}`);
                if (!squareY?.classList.contains('pieceInside')) {
                    if (squareY != null)
                        squareY.classList.add('active');
                }
                else {
                    break;
                }
            }
            // bot
            for (let i = rookLineY - 1; i > 0; i--) {
                let squareY = document.querySelector(`#${rookLineX}-${i}`);
                if (!squareY?.classList.contains('pieceInside')) {
                    if (squareY != null)
                        squareY.classList.add('active');
                }
                else {
                    break;
                }
            }
        };
        const checkXAxis = () => {
            // right
            const clickedElementIndex = arrayOfX.indexOf(rookLineX);
            for (let i = clickedElementIndex; i <= 8; i++) {
                let squareY = document.querySelector(`#${arrayOfX[i + 1]}-${rookLineY}`);
                if (!squareY?.classList.contains('pieceInside')) {
                    if (squareY != null)
                        squareY.classList.add('active');
                }
                else {
                    break;
                }
            }
            // left
            for (let i = clickedElementIndex; i > 0; i--) {
                let squareY = document.querySelector(`#${arrayOfX[i - 1]}-${rookLineY}`);
                if (!squareY?.classList.contains('pieceInside')) {
                    if (squareY != null)
                        squareY.classList.add('active');
                }
                else {
                    break;
                }
            }
        };
        checkYAxis();
        checkXAxis();
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
