"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const board_1 = require("../board");
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
        const diagonalMoves = [];
        const moves = [];
        const movesShow = (id) => {
            const movesPossibilities = [...document.querySelectorAll(`#${id}`)];
            movesPossibilities.forEach(el => el.classList.add('active'));
        };
        const upDown = () => {
            for (let i = 1; i < 9; i++) {
                if (`${this.positionX}-${i}` !== `${this.positionX}-${this.positionY}`)
                    moves.push(`${this.positionX}-${i}`);
            }
        };
        const leftRight = () => {
            for (let i = 1; i < 9; i++) {
                if (`${board_1.ID[i]}-${this.positionY}` !== `${this.positionX}-${this.positionY}`)
                    moves.push(`${board_1.ID[i]}-${this.positionY}`);
            }
        };
        // const diagonal()=>{
        // }
        upDown();
        leftRight();
        moves.forEach(id => {
            movesShow(id);
        });
    }
}
exports.Queen = Queen;
