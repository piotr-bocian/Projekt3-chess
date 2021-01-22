"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.King = void 0;
const piece_1 = require("./piece");
class King extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = color === 'white' ? '♔' : '♚'; //<-- w przyszłości bedzie tu ścieżka do img figury
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        //kod odpowiadający za pokazanie możliwych ruchów
    }
}
exports.King = King;
