"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const board_1 = require("./board");
const bishop_1 = require("./pieces/bishop");
const king_1 = require("./pieces/king");
const knight_1 = require("./pieces/knight");
const queen_1 = require("./pieces/queen");
const rook_1 = require("./pieces/rook");
const pawn_1 = require("./pieces/pawn");
const board_2 = require("./board");
class Game {
    constructor() {
        this.gameBoard = new board_1.Board;
        this.gameBoard.drawBoard();
        Game.whites.push(new queen_1.Queen('white', `${board_2.ID[4]}`, 1));
        Game.whites.push(new king_1.King('white', `${board_2.ID[5]}`, 1));
        Game.blacks.push(new queen_1.Queen('black', `${board_2.ID[4]}`, 8));
        Game.blacks.push(new king_1.King('black', `${board_2.ID[5]}`, 8));
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
            Game.whites.push(new pawn_1.Pawn('white', `${board_2.ID[i]}`, 2));
            Game.blacks.push(new pawn_1.Pawn('black', `${board_2.ID[i]}`, 7));
        }
    }
    startMove(square) {
        let chosenPiece = Game.getPiece(square);
        if (chosenPiece) {
            this.setLastChosen(chosenPiece);
            chosenPiece.move();
        }
    }
    static getPiece(square) {
        const x = square.id.charAt(0);
        const y = parseInt(square.id.charAt(2));
        if (square.innerHTML != '') {
            for (let p of Game.whites) {
                if (p.getPositionX() == x && p.getPositionY() == y) {
                    return p;
                }
            }
            for (let p of Game.blacks) {
                if (p.getPositionX() == x && p.getPositionY() == y) {
                    return p;
                }
            }
        }
        else {
            return;
        }
    }
    static beat(square) {
        const x = square.id.charAt(0);
        const y = parseInt(square.id.charAt(2));
        let p = Game.getPiece(square);
        if (p) {
            if (p.getColor() === 'white') {
                this.whites.splice(this.whites.indexOf(p), 1);
                square.innerHTML = '';
            }
            else {
                this.blacks.splice(this.blacks.indexOf(p), 1);
                square.innerHTML = '';
            }
        }
        else {
            return;
        }
    }
    setLastChosen(piece) {
        Game.lastChosen = piece;
    }
    static getLastChosen() {
        return Game.lastChosen;
    }
    static getPieces(color) {
        if (color == 'white') {
            return this.whites;
        }
        return this.blacks;
    }
}
exports.Game = Game;
//private whoNext:string;
Game.whites = [];
Game.blacks = [];
