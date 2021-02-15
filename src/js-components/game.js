"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Game = void 0;
const board_1 = require("./board");
const bishop_1 = require("./pieces/bishop");
const king_1 = require("./pieces/king");
const knight_1 = require("./pieces/knight");
const piece_1 = require("./pieces/piece");
const queen_1 = require("./pieces/queen");
const rook_1 = require("./pieces/rook");
const pawn_1 = require("./pieces/pawn");
const board_2 = require("./board");
const promotion_1 = require("./promotion");
const timer_1 = require("./timer");
const timeHistoryContainer_1 = require("./timeHistoryContainer");
const addMoveHistory_1 = require("./addMoveHistory");
class Game {
    constructor(time, player1Name, player2Name, target) {
        this.gameBoard = new board_1.Board;
        this.gameBoard.drawBoard();
        this.timeHistory = new timeHistoryContainer_1.timeHistory;
        this.timeHistory.timeHistoryContainer();
        //DO SPRAWDZENIA
        this.lastMove = '';
        //
        //bicie
        Game.beatCounter = 0;
        //cofanie ruchów
        Game.moveCounter = true;
        // Timers:
        Game.whitePlayerTimer = new timer_1.Timer(time, 'timer-white');
        Game.blackPlayerTimer = new timer_1.Timer(time, 'timer-black');
        // Players:
        Game.player1Name = player1Name;
        Game.player2Name = player2Name;
        Game.target = target;
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
    static changeTimerTurn() {
        if (Game.currentPlayer === Game.blacks) {
            this.blackPlayerTimer.start();
            this.whitePlayerTimer.pause();
        }
        else {
            this.whitePlayerTimer.start();
            this.blackPlayerTimer.pause();
        }
    }
    ;
    static endOfTime() {
        if (this.whitePlayerTimer.timerHandler.innerHTML === "00:00" || this.blackPlayerTimer.timerHandler.innerHTML === "00:00") {
            this.whitePlayerTimer.stop();
        }
    }
    ;
    static getWhiteTimer() {
        return this.whitePlayerTimer;
    }
    static getBlackTimer() {
        return this.blackPlayerTimer;
    }
    startMove(square) {
        if (!promotion_1.ifPromotion()) {
            let chosenPiece = Game.getPiece(square);
            if (chosenPiece && Game.currentPlayer.includes(chosenPiece)) {
                Game.setLastChosen(chosenPiece);
                chosenPiece.move();
                Game.beatCounter = 0;
                Game.moveCounter = true;
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
                piece_1.Piece.beated.push(p);
                square.innerHTML = '';
                Game.beatCounter = 1;
            }
            else {
                this.blacks.splice(this.blacks.indexOf(p), 1);
                this.beated.push(p);
                piece_1.Piece.beated.push(p);
                square.innerHTML = '';
                Game.beatCounter = 1;
            }
        }
        else {
            return;
        }
    }
    static checkingKings() {
        if (Game.whiteKing.isChecked()) {
            if (Game.whiteKing.isCheckmated()) {
                console.log('WHITE KING CHECKMATED');
            }
            else {
                console.log('WHITE KING CHECKED');
                if (document.documentElement.lang === 'en') {
                    addMoveHistory_1.addMoveHistory(`White king is checked`, '');
                }
                else {
                    addMoveHistory_1.addMoveHistory('Szach na białym królu', '');
                }
            }
        }
        if (Game.blackKing.isChecked()) {
            if (Game.blackKing.isCheckmated()) {
                console.log('BLACK KING CHECKMATED');
            }
            else {
                console.log('BLACK KING CHECKED');
                if (document.documentElement.lang === 'en') {
                    addMoveHistory_1.addMoveHistory(`Black king is checked`, '');
                }
                else {
                    addMoveHistory_1.addMoveHistory('Szach na czarnym królu', '');
                }
            }
        }
    }
    static isQueensideCastlingPossible() {
        if (Game.lastChosen.getColor() === 'white') {
            for (let p of Game.whites) {
                if (p instanceof rook_1.Rook && p.getPositionX() === 'A' && p.getPositionY() === 1) {
                    return (!Game.whiteKing.hasMoved
                        && !p.hasMoved
                        && document.querySelector('#B-1').innerHTML === ''
                        && document.querySelector('#C-1').innerHTML === ''
                        && document.querySelector('#D-1').innerHTML === ''
                        && !this.whiteKing.isChecked()
                        && this.whiteKing.getDangerZones().indexOf('C-1') === -1);
                }
            }
        }
        else {
            for (let p of Game.blacks) {
                if (p instanceof rook_1.Rook && p.getPositionX() === 'A' && p.getPositionY() === 8) {
                    return (!Game.blackKing.hasMoved
                        && !p.hasMoved
                        && document.querySelector('#B-8').innerHTML === ''
                        && document.querySelector('#C-8').innerHTML === ''
                        && document.querySelector('#D-8').innerHTML === ''
                        && !this.blackKing.isChecked()
                        && this.blackKing.getDangerZones().indexOf('C-8') === -1);
                }
            }
        }
        return false;
    }
    static isKingsideCastlingPossible() {
        if (Game.lastChosen.getColor() === 'white') {
            for (let p of Game.whites) {
                if (p instanceof rook_1.Rook && p.getPositionX() === 'H' && p.getPositionY() === 1) {
                    return (!Game.whiteKing.hasMoved
                        && !p.hasMoved
                        && document.querySelector('#F-1').innerHTML === ''
                        && document.querySelector('#G-1').innerHTML === ''
                        && !this.whiteKing.isChecked()
                        && this.whiteKing.getDangerZones().indexOf('G-1') === -1);
                }
            }
        }
        else {
            for (let p of Game.blacks) {
                if (p instanceof rook_1.Rook && p.getPositionX() === 'H' && p.getPositionY() === 8) {
                    return (!Game.blackKing.hasMoved
                        && !p.hasMoved
                        && document.querySelector('#F-8').innerHTML === ''
                        && document.querySelector('#G-8').innerHTML === ''
                        && !this.blackKing.isChecked()
                        && this.blackKing.getDangerZones().indexOf('G-8') === -1);
                }
            }
        }
        return false;
    }
    //COFANIE RUCHÓW
    static reverseMove() {
        Game.getLastChosen().reverseLastMove(Game.getLastChosen().color);
        //to wyzej działa bez argumentu
        //działa
        if (Game.beatCounter === 1) {
            piece_1.Piece.retLast();
            Game.changeTurn();
            // Game.changeTimerTurn();
            Game.beatCounter = 0;
        }
        Game.changeTimerTurn();
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
    static getWhiteKing() {
        return Game.whiteKing;
    }
    static getBlackKing() {
        return Game.blackKing;
    }
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
