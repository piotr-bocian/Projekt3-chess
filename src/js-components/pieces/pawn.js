"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Pawn = void 0;
const piece_1 = require("./piece");
//pion
class Pawn extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Pawn.png`;
        this.symbol = `../../../../Projekt3-chess/static/assets/whitePawn.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        //kod odpowiadający za pokazanie możliwych ruchów
    }
}
exports.Pawn = Pawn;
