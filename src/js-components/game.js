"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const board_1 = require("./board");
const queen_1 = require("./pieces/queen");
const pawn_1 = require("./pieces/pawn");
const board_2 = require("./board");
class Game {
    constructor() {
        this.whites = [];
        this.gameBoard = new board_1.Board;
        this.gameBoard.drawBoard();
        this.movesHistory = [];
        this.lastMove = '';
        this.whites.push(new queen_1.Queen('white', `${board_2.ID[4]}`, 1));
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
        for (let i = 1; i <= 3; i++) {
            this.whites.push(new pawn_1.Pawn('black', `${board_2.ID[i]}`, 2));
        }
    }
    // history(piece: Piece){
    //     const PositionX = piece.getPositionX();
    //     const PositionY = piece.getPositionY().toString();
    //     // const opisowo = `${piece.color} ${piece.constructor.name} moved from ${fromPositionX}-${fromPositionY} to ${(square).id.charAt(0).toLowerCase()}-${parseInt((square).id.charAt(2))}`;
    //     this.movesHistory.push(`${PositionX}${PositionY}`);
    //     // this.lastMove = opisowo;
    // }
    startMove(square) {
        const x = square.id.charAt(0);
        const y = parseInt(square.id.charAt(2));
        for (let p of this.whites) {
            if (p.getPositionX() == x && p.getPositionY() == y)
                // this.setLastChosen(p);
                p.move();
            // this.movesHistory.push(p.)
            // p.history(p);
            // console.log(this.movesHistory);
        }
    }
    setLastChosen(piece) {
        Game.lastChosen = piece;
    }
    static getLastChosen() {
        return Game.lastChosen;
    }
}
exports.Game = Game;
