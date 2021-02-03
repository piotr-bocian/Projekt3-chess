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
    }
    showPossibleMoves() {
        this.removeClassActive();
        this.parentSquare.classList.add('selected');
        let posXAttackRight = this.nextChar(this.positionX);
        console.log(posXAttackRight);
        let posXAttackLeft = this.previousChar(this.positionX);
        console.log(posXAttackLeft);
        if (this.color === 'white') {
            let positionY1 = this.positionY + 1;
            let positionY2 = document.getElementById(`${this.positionX}-${positionY1}`);
            let attackRight = document.getElementById(`${posXAttackRight}-${positionY1}`);
            let attackLeft = document.getElementById(`${posXAttackLeft}-${positionY1}`);
            //ATTACK
            if (attackRight !== null) {
                if (attackRight.classList.contains('pieceInside')) {
                    attackRight.classList.add('active');
                }
            }
            if (attackLeft !== null) {
                if (attackLeft.classList.contains('pieceInside')) {
                    attackLeft.classList.add('active');
                }
            }
            //MOVES
            if (this.positionY === 2 && !(positionY2.matches('.pieceInside'))) {
                for (let i = 3; i < 5; i++) {
                    document.getElementById(`${this.positionX}-${i}`).classList.add('active');
                }
            }
            else if (!(positionY2.matches('.pieceInside'))) {
                positionY2.classList.add('active');
            }
        }
        else {
            let positionY1 = this.positionY - 1;
            let positionY2 = document.getElementById(`${this.positionX}-${positionY1}`);
            if (this.positionY === 7) {
                for (let i = 6; i > 4; i--) {
                    document.getElementById(`${this.positionX}-${i}`).classList.add('active');
                }
            }
            else {
                positionY2.classList.add('active');
            }
        }
        document.querySelectorAll('.active').forEach((possibleMove) => {
            possibleMove.addEventListener('click', () => {
                if (possibleMove.classList.contains('active') && this.parentSquare.classList.contains('selected')) {
                    const posX = possibleMove.id.charAt(0);
                    const posY = parseInt(possibleMove.id.charAt(2));
                    this.setOnBoard(posX, posY);
                    this.removeClassActive();
                }
            });
        });
    }
    movePawn(possibleMove) {
        const posX = possibleMove.id.charAt(0);
        const posY = parseInt(possibleMove.id.charAt(2));
        this.setOnBoard(posX, posY);
    }
    removeClassActive() {
        let elems = document.querySelectorAll('.active').forEach(A => A.classList.remove('active'));
        let activePiece = document.querySelectorAll('.selected').forEach(A => A.classList.remove('selected'));
    }
    nextChar(posXRight) {
        return String.fromCharCode(posXRight.charCodeAt(0) + 1);
    }
    previousChar(posXRight) {
        return String.fromCharCode(posXRight.charCodeAt(0) - 1);
    }
}
exports.Pawn = Pawn;
