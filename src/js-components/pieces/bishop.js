"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bishop = void 0;
const piece_1 = require("./piece");
//goniec / laufer
class Bishop extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = '../../../static/assets/bishop.png';
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        //kod odpowiadający za pokazanie możliwych ruchów
    }
}
exports.Bishop = Bishop;
