"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const piece_1 = require("./piece");
//królowa / hetman
class Queen extends piece_1.Piece {
    constructor(color, positionX, positionY, possibleMoves) {
        super(color, positionX, positionY);
        this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;
        this.setOnBoard(this.positionX, this.positionY);
        this.possibleMoves = this.showPossibleMoves();
    }
    showPossibleMoves() {
        const moves = [];
        for (let i = 1; i < 9; i++) {
            if (`${this.positionX}-${i}` !== `${this.positionX}-${this.positionY}`)
                moves.push(`${this.positionX}-${i}`);
        }
        console.log(moves);
    }
}
exports.Queen = Queen;
