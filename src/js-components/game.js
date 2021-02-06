"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const board_1 = require("./board");
const king_1 = require("./pieces/king");
const queen_1 = require("./pieces/queen");
const rook_1 = require("./pieces/rook");
const pawn_1 = require("./pieces/pawn");
const board_2 = require("./board");
class Game {
    constructor() {
        this.whites = [];
        this.gameBoard = new board_1.Board;
        this.gameBoard.drawBoard();
        this.allMovesHistory = [];
        this.lastMove = '';
        this.whites.push(new queen_1.Queen('white', `${board_2.ID[4]}`, 1));
        this.whites.push(new king_1.King('white', `${board_2.ID[5]}`, 1));
        // for(let i = 3; i <= 6; i+=3) {
        //     this.whites.push(new Bishop('white', `${ID[i]}`, 1));
        // }
        // for(let i = 2; i <= 7; i+=5) {
        //     this.whites.push(new Knight('white', `${ID[i]}`, 1));
        // }
        for (let i = 1; i <= 8; i += 7) {
            this.whites.push(new rook_1.Rook('white', `${board_2.ID[i]}`, 1));
        }
        for (let i = 1; i <= 4; i++) {
            this.whites.push(new pawn_1.Pawn('white', `${board_2.ID[i]}`, 2));
        }
    }
    startMove(square) {
        const x = square.id.charAt(0);
        const y = parseInt(square.id.charAt(2));
        for (let p of this.whites) {
            if (p.getPositionX() == x && p.getPositionY() == y) {
                this.setLastChosen(p);
                p.move();
                this.allMovesHistory.push(p.movesHistory);
                // console.log(this.allMovesHistory);
            }
        }
    }
    //COFANIE RUCHÓW
    reverseMove() {
        for (let p of this.whites) {
            p.reverseMove();
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
