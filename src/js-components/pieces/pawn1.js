"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const piece_1 = require("./piece");
//pion
class Pawn extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Pawn.png`;
        this.positionY1 = 0;
        this.siblingSquare = document.getElementById(`${this.positionX}-${this.positionY1}`);
        this.setOnBoard(this.positionX, this.positionY);
        this.parentSquare.addEventListener('click', this.showPossibleMoves);
    }
    showPossibleMoves() {
        //kod odpowiadający za pokazanie możliwych ruchów
        if (this.color === 'white') {
            this.positionY1 = this.positionY + 1;
            this.siblingSquare = document.getElementById(`${this.positionX}-${this.positionY1}`);
            console.log(this.siblingSquare);
            if (this.siblingSquare.classList.contains('pieceInside')) {
                console.log('no possible moves!');
                return;
            }
            if (this.positionY === 2) {
                for (let i = 2; i < 4; i++) {
                    document.getElementById(`${this.positionX}-${i}`).classList.add('active');
                }
            }
            else {
                this.siblingSquare.classList.add('active');
            }
        }
        if (this.color === 'black') {
            this.positionY1 = this.positionY - 1;
            if (this.siblingSquare.classList.contains('pieceInside')) {
                console.log('no possible moves!');
                return;
            }
            if (this.positionY === 7) {
                for (let i = 7; i > 5; i--) {
                    document.getElementById(`${this.positionX}-${i}`).classList.add('active');
                }
            }
            else {
                this.siblingSquare.classList.add('active');
            }
        }
    }
    addEventList() {
        document.querySelectorAll('.pawn').forEach(item => {
            item.addEventListener('click', this.showPossibleMoves);
        });
    }
}
exports.Pawn = Pawn;
