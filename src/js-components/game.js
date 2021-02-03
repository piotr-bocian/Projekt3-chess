"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const board_1 = require("./board");
const bishop_1 = require("./pieces/bishop");
const king_1 = require("./pieces/king");
const knight_1 = require("./pieces/knight");
const queen_1 = require("./pieces/queen");
const rook_1 = require("./pieces/rook");
const board_2 = require("./board");
class Game {
    constructor() {
        this.gameBoard = new board_1.Board;
        this.gameBoard.drawBoard();
        //ustawianie figur
        Game.whiteKing = new king_1.King('white', `${board_2.ID[5]}`, 1);
        Game.blackKing = new king_1.King('black', `${board_2.ID[5]}`, 8);
        Game.whites.push(new queen_1.Queen('white', `${board_2.ID[4]}`, 1));
        Game.whites.push(Game.whiteKing);
        Game.blacks.push(new queen_1.Queen('black', `${board_2.ID[4]}`, 8));
        Game.blacks.push(Game.blackKing);
        for (let i = 3; i <= 6; i += 3) {
            Game.whites.push(new bishop_1.Bishop('white', `${board_2.ID[i]}`, 1));
            Game.blacks.push(new bishop_1.Bishop('black', `${board_2.ID[i]}`, 8));
        }
        for (let i = 2; i <= 7; i += 5) {
            Game.whites.push(new knight_1.Knight('white', `${board_2.ID[i]}`, 1));
            Game.blacks.push(new knight_1.Knight('black', `${board_2.ID[i]}`, 8));
        }
        for (let i = 1; i <= 8; i += 7) {
            Game.whites.push(new rook_1.Rook('white', `${board_2.ID[i]}`, 1));
            Game.blacks.push(new rook_1.Rook('black', `${board_2.ID[i]}`, 8));
        }
        for (let i = 1; i <= 8; i++) {
            //Game.whites.push(new Pawn('white', `${ID[i]}`, 2));
            //Game.blacks.push(new Pawn('black', `${ID[i]}`, 7));
        }
    }
    startMove(square) {
        const x = square.id.charAt(0);
        const y = parseInt(square.id.charAt(2));
        for (let p of Game.whites) {
            if (p.getPositionX() == x && p.getPositionY() == y) {
                Game.setLastChosen(p);
                p.move();
            }
        }
        for (let p of Game.blacks) {
            if (p.getPositionX() == x && p.getPositionY() == y) {
                Game.setLastChosen(p);
                p.move();
            }
        }
    }
    static checkingKings() {
        if (Game.whiteKing.isChecked())
            console.log('WHITE KING CHECKED');
        if (Game.blackKing.isChecked())
            console.log('BLACK KING CHECKED');
    }
    static setLastChosen(piece) {
        Game.lastChosen = piece;
    }
    static getLastChosen() {
        return Game.lastChosen;
    }
    static getWhites() {
        return Game.whites;
    }
    static getBlacks() {
        return Game.blacks;
    }
}
exports.Game = Game;
//private whoNext:string;
Game.whites = [];
Game.blacks = [];
