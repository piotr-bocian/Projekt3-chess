"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bishop = void 0;
const piece_1 = require("./piece");
const board_1 = require("../board");
const game_1 = require("../game");
const endGameCases_1 = require("../endGameCases");
//goniec / laufer
class Bishop extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `./../../../Projekt3-chess/static/assets/${this.color}Bishop.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        //this.removeClassActive();
        const possibleMoves = [];
        const coordinateX = Object.values(board_1.ID).indexOf(this.positionX) + 1;
        const coordinateY = this.positionY;
        // move by first diagonal
        // top right
        var topRight;
        if (9 - coordinateX < 9 - coordinateY) {
            topRight = 9 - coordinateX;
        }
        else {
            topRight = 9 - coordinateY;
        }
        for (let i = 1; i < topRight; i++) {
            if (document.getElementById(`${board_1.ID[coordinateX + i]}-${coordinateY + i}`).classList.contains('pieceInside')) {
                if (!(document.getElementById(`${board_1.ID[coordinateX + i]}-${coordinateY + i}`).getElementsByTagName("img")[0].classList.contains(`${this.color}`))) {
                    possibleMoves.push(`${board_1.ID[coordinateX + i]}-${coordinateY + i}`);
                }
                ;
                break;
            }
            else {
                possibleMoves.push(`${board_1.ID[coordinateX + i]}-${coordinateY + i}`);
            }
        }
        // down left
        var downLeft;
        if (coordinateY - 1 < coordinateX - 1) {
            downLeft = coordinateY;
        }
        else {
            downLeft = coordinateX;
        }
        for (let i = 1; i < downLeft; i++) {
            if (document.getElementById(`${board_1.ID[coordinateX - i]}-${coordinateY - i}`).classList.contains('pieceInside')) {
                if (!(document.getElementById(`${board_1.ID[coordinateX - i]}-${coordinateY - i}`).getElementsByTagName("img")[0].classList.contains(`${this.color}`))) {
                    possibleMoves.push(`${board_1.ID[coordinateX - i]}-${coordinateY - i}`);
                }
                ;
                break;
            }
            else {
                possibleMoves.push(`${board_1.ID[coordinateX - i]}-${coordinateY - i}`);
            }
        }
        // move by second diagonal
        // top left
        var topLeft;
        if (coordinateX < 9 - coordinateY) {
            topLeft = coordinateX;
        }
        else {
            topLeft = 9 - coordinateY;
        }
        for (let i = 1; i < topLeft; i++) {
            if (document.getElementById(`${board_1.ID[coordinateX - i]}-${coordinateY + i}`).classList.contains('pieceInside')) {
                if (!(document.getElementById(`${board_1.ID[coordinateX - i]}-${coordinateY + i}`).getElementsByTagName("img")[0].classList.contains(`${this.color}`))) {
                    possibleMoves.push(`${board_1.ID[coordinateX - i]}-${coordinateY + i}`);
                }
                ;
                break;
            }
            else {
                possibleMoves.push(`${board_1.ID[coordinateX - i]}-${coordinateY + i}`);
            }
        }
        // down right
        var downRight;
        if (coordinateY < 9 - coordinateX) {
            downRight = coordinateY;
        }
        else {
            downRight = 9 - coordinateX;
        }
        for (let i = 1; i < downRight; i++) {
            if (document.getElementById(`${board_1.ID[coordinateX + i]}-${coordinateY - i}`).classList.contains('pieceInside')) {
                if (!(document.getElementById(`${board_1.ID[coordinateX + i]}-${coordinateY - i}`).getElementsByTagName("img")[0].classList.contains(`${this.color}`))) {
                    possibleMoves.push(`${board_1.ID[coordinateX + i]}-${coordinateY - i}`);
                }
                ;
                break;
            }
            else {
                possibleMoves.push(`${board_1.ID[coordinateX + i]}-${coordinateY - i}`);
            }
        }
        return possibleMoves;
    }
    move() {
        this.removeClassActive();
        let possibleMovesArr = this.showPossibleMoves();
        // console.log(possibleMovesArr);
        possibleMovesArr = this.defendKing(possibleMovesArr);
        possibleMovesArr.forEach(id => {
            const square = document.querySelector(`#${id}`);
            square.classList.add('active'); //<--oznaczenie wizualne na szachownicy
            square.addEventListener('click', () => {
                if (square.classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    if (square.innerHTML != '') {
                        game_1.Game.beat(square);
                    }
                    //ZBIERANIE HISTORII RUCHÓW
                    this.history(square);
                    this.historyNotation();
                    //
                    this.setOnBoard(square.id.charAt(0), parseInt(square.id.charAt(2))); //<-- przeniesienie figury po kliknięciu
                    this.removeClassActive();
                    game_1.Game.checkingKings();
                    game_1.Game.changeTimerTurn();
                    endGameCases_1.endGame(game_1.Game.player1Name, game_1.Game.player2Name);
                }
            }, { capture: true });
        });
    }
}
exports.Bishop = Bishop;
