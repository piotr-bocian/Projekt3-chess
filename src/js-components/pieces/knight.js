"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = void 0;
const piece_1 = require("./piece");
//skoczek / koń
class Knight extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Knight.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        const canMoveToSquare = [];
        const targetDiv = document.getElementById(`${this.positionX}-${this.positionY + 1}`);
        targetDiv.classList.add('active');
        // targetDiv.classList.remove('active');
        return canMoveToSquare;
    }
}
exports.Knight = Knight;
