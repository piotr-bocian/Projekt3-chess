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
const promotion_1 = require("./promotion");
class Game {
    constructor() {
        this.gameBoard = new board_1.Board;
        this.gameBoard.drawBoard();
        //DO SPRAWDZENIA
        this.lastMove = '';
        //
        Game.allMovesHistory = [];
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
            Game.whites.push(new pawn_1.Pawn('white', `${board_2.ID[i]}`, 2));
            Game.blacks.push(new pawn_1.Pawn('black', `${board_2.ID[i]}`, 7));
        }
    }
    //TURY
    static changeTurn() {
        if (Game.round % 2 === 0) {
            Game.currentPlayer = Game.blacks;
        }
        ;
        if (Game.round % 2 === 1) {
            Game.currentPlayer = Game.whites;
        }
        ;
        this.round++;
    }
    ;
    startMove(square) {
        if (!promotion_1.ifPromotion()) {
            let chosenPiece = Game.getPiece(square);
            if (chosenPiece && !(chosenPiece instanceof rook_1.Rook) && Game.currentPlayer.includes(chosenPiece)) {
                Game.setLastChosen(chosenPiece);
                chosenPiece.move();
                //TUTAJ ZBIERAM HISTORIE RUCHOW KAŻDEJ BIERKI
                // Game.allMovesHistory.push(chosenPiece.movesHistory)
                // console.log(Game.allMovesHistory);
            }
            else {
                if (chosenPiece && !(Game.lastChosen instanceof king_1.King) && Game.currentPlayer.includes(chosenPiece)) {
                    Game.setLastChosen(chosenPiece);
                    chosenPiece.move();
                    //TUTAJ ZBIERAM HISTORIE RUCHOW KAŻDEJ BIERKI
                    // Game.allMovesHistory.push(chosenPiece.movesHistory)
                    // console.log(Game.allMovesHistory);
                }
                else if (chosenPiece && Game.currentPlayer.includes(chosenPiece)) {
                    Game.setLastChosen(chosenPiece);
                    Game.castling();
                }
            }
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
                this.beated.push(p);
                square.innerHTML = '';
            }
            else {
                this.blacks.splice(this.blacks.indexOf(p), 1);
                this.beated.push(p);
                square.innerHTML = '';
            }
        }
        else {
            return;
        }
    }
    static checkingKings() {
        if (Game.whiteKing.isChecked()) {
            if (Game.whiteKing.isCheckmated())
                console.log('WHITE KING CHECKMATED');
            else
                console.log('WHITE KING CHECKED');
        }
        if (Game.blackKing.isChecked()) {
            if (Game.blackKing.isCheckmated())
                console.log('BLACK KING CHECKMATED');
            else
                console.log('BLACK KING CHECKED');
        }
    }
    static castling() {
        if (!this.isCastlingPossible())
            return;
        if (Game.lastChosen.getColor() === 'white') {
            if (Game.lastChosen.getPositionX() === 'A') {
                this.whiteKing.setOnBoard('C', 1);
                Game.lastChosen.setOnBoard('D', 1);
            }
            else {
                this.whiteKing.setOnBoard('G', 1);
                Game.lastChosen.setOnBoard('F', 1);
            }
        }
        else {
            if (Game.lastChosen.getPositionX() === 'A') {
                this.blackKing.setOnBoard('C', 8);
                Game.lastChosen.setOnBoard('D', 8);
            }
            else {
                this.blackKing.setOnBoard('G', 8);
                Game.lastChosen.setOnBoard('F', 8);
            }
        }
    }
    static isCastlingPossible() {
        const color = Game.lastChosen.getColor();
        const posX = Game.lastChosen.getPositionX();
        if (!Game.lastChosen.hasMoved && (color === 'white' ? !this.whiteKing.hasMoved : !this.blackKing.hasMoved)) {
            if (posX === 'A') {
                if (color === 'white') {
                    return (document.querySelector('#B-1').innerHTML === ''
                        && document.querySelector('#C-1').innerHTML === ''
                        && document.querySelector('#D-1').innerHTML === ''
                        && this.whiteKing.getDangerZones().indexOf('C-1') === -1);
                }
                else {
                    return (document.querySelector('#B-8').innerHTML === ''
                        && document.querySelector('#C-8').innerHTML === ''
                        && document.querySelector('#D-8').innerHTML === ''
                        && this.blackKing.getDangerZones().indexOf('C-8') === -1);
                }
            }
            if (posX === 'H') {
                if (color === 'white') {
                    return (document.querySelector('#F-1').innerHTML === ''
                        && document.querySelector('#G-1').innerHTML === ''
                        && this.whiteKing.getDangerZones().indexOf('G-1') === -1);
                }
                else {
                    return (document.querySelector('#F-8').innerHTML === ''
                        && document.querySelector('#G-8').innerHTML === ''
                        && this.blackKing.getDangerZones().indexOf('G-8') === -1);
                }
            }
        }
        return false;
    }
    static getPieces(color) {
        if (color == 'white') {
            return this.whites;
        }
        return this.blacks;
    }
    static setLastChosen(piece) {
        Game.lastChosen = piece;
    }
    static getWhites() {
        return Game.whites;
    }
    static getBlacks() {
        return Game.blacks;
    }
    //COFANIE RUCHÓW
    // reverseMove(){
    //     for(let p of Game.whites){
    //             p.reverseMove();
    //     }
    // }
    static getLastChosen() {
        return Game.lastChosen;
    }
}
exports.Game = Game;
Game.whites = [];
Game.blacks = [];
Game.beated = [];
Game.currentPlayer = Game.whites;
Game.round = 0;
