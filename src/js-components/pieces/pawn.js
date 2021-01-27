"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const piece_1 = require("./piece");
//pion
class Pawn extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Pawn.png`;
        this.setOnBoard(this.positionX, this.positionY);
        // this.parentSquare.addEventListener('click', this.showPossibleMoves);
        let $self = this;
        this.parentSquare.addEventListener("click", this.showPossibleMoves.bind(this));
    }
    showPossibleMoves() {
        if (this.color === 'white') {
            let positionY1 = this.positionY + 1;
            if (document.getElementById(`${this.positionX}-${positionY1}`).classList.contains('pieceInside')) {
                console.log('no possible moves!');
                return;
            }
            if (this.positionY === 2) {
                for (let i = 2; i < 5; i++) {
                    document.getElementById(`${this.positionX}-${i}`).classList.add('active');
                }
            }
            else {
                document.getElementById(`${this.positionX}-${positionY1}`).classList.add('active');
            }
        }
        else {
            let positionY1 = this.positionY - 1;
            if (this.positionY === 7) {
                for (let i = 7; i > 4; i--) {
                    document.getElementById(`${this.positionX}-${i}`).classList.add('active');
                }
            }
            else {
                document.getElementById(`${this.positionX}-${positionY1}`).classList.add('active');
            }
        }
    }
}
exports.Pawn = Pawn;
