"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const board_1 = require("./board");
const pawn_1 = require("./pieces/pawn");
const board_2 = require("./board");
class Game {
    constructor() {
        //private whoNext:string;
        this.whites = [];
        this.gameBoard = new board_1.Board;
        this.gameBoard.drawBoard();
        // this.whites.push(new Queen('white', `${ID[4]}`, 1));
        // this.whites.push(new King('white', `${ID[5]}`, 1));
        // for(let i = 3; i <= 6; i+=3) {
        //     this.whites.push(new Bishop('white', `${ID[i]}`, 1));
        // }
        // for(let i = 2; i <= 7; i+=5) {
        //     this.whites.push(new Knight('white', `${ID[i]}`, 1));
        // }
        // for(let i = 1; i <= 8; i+=7) {
        //     this.whites.push(new Rook('white', `${ID[i]}`, 1));
        // }
        for (let i = 1; i <= 8; i++) {
            this.whites.push(new pawn_1.Pawn('white', `${board_2.ID[i]}`, 2));
        }
    }
    startMove(square) {
        const x = square.id.charAt(0);
        const y = parseInt(square.id.charAt(2));
        for (let p of this.whites) {
            if (p.getPositionX() == x && p.getPositionY() == y)
                console.log(p);
        }
    }
}
exports.Game = Game;
