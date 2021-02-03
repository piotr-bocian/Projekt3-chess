"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bishop = void 0;
const piece_1 = require("./piece");
const board_1 = require("../board");
const game_1 = require("../game");
//goniec / laufer
class Bishop extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Bishop.png`;
        this.setOnBoard(this.positionX, this.positionY);
        let $self = this;
    }
    showPossibleMoves() {
        this.removeClassActive();
        const possibleMoves = [];
        const coordinateX = Object.values(board_1.ID).indexOf(this.positionX) + 1;
        const coordinateY = this.positionY;
        // move by one diagonal
        // top right
        if (9 - coordinateX < 9 - coordinateY) {
            for (let i = 1; i < 9 - coordinateX; i++) {
                if (document.getElementById(`${board_1.ID[coordinateX + i]}-${coordinateY + i}`).classList.contains('pieceInside')) {
                    break;
                }
                else {
                    possibleMoves.push(`${board_1.ID[coordinateX + i]}-${coordinateY + i}`);
                }
            }
        }
        else {
            for (let i = 1; i < 9 - coordinateY; i++) {
                if (document.getElementById(`${board_1.ID[coordinateX + i]}-${coordinateY + i}`).classList.contains('pieceInside')) {
                    break;
                }
                else {
                    possibleMoves.push(`${board_1.ID[coordinateX + i]}-${coordinateY + i}`);
                }
            }
        }
        // down left
        if (coordinateY - 1 < coordinateX - 1) {
            for (let i = 1; i < coordinateY; i++) {
                if (document.getElementById(`${board_1.ID[coordinateX - i]}-${coordinateY - i}`).classList.contains('pieceInside')) {
                    break;
                }
                else {
                    possibleMoves.push(`${board_1.ID[coordinateX - i]}-${coordinateY - i}`);
                }
            }
        }
        else {
            for (let i = 1; i < coordinateX; i++) {
                if (document.getElementById(`${board_1.ID[coordinateX - i]}-${coordinateY - i}`).classList.contains('pieceInside')) {
                    break;
                }
                else {
                    possibleMoves.push(`${board_1.ID[coordinateX - i]}-${coordinateY - i}`);
                }
            }
        }
        // move by second diagonal
        // top left
        if (coordinateX < 9 - coordinateY) {
            for (let i = 1; i < coordinateX; i++) {
                if (document.getElementById(`${board_1.ID[coordinateX - i]}-${coordinateY + i}`).classList.contains('pieceInside')) {
                    break;
                }
                else {
                    possibleMoves.push(`${board_1.ID[coordinateX - i]}-${coordinateY + i}`);
                }
            }
        }
        else {
            for (let i = 1; i < 9 - coordinateY; i++) {
                if (document.getElementById(`${board_1.ID[coordinateX - i]}-${coordinateY + i}`).classList.contains('pieceInside')) {
                    break;
                }
                else {
                    possibleMoves.push(`${board_1.ID[coordinateX - i]}-${coordinateY + i}`);
                }
            }
        }
        // down right
        if (coordinateY < 9 - coordinateX) {
            for (let i = 1; i < coordinateY; i++) {
                if (document.getElementById(`${board_1.ID[coordinateX + i]}-${coordinateY - i}`).classList.contains('pieceInside')) {
                    break;
                }
                else {
                    possibleMoves.push(`${board_1.ID[coordinateX + i]}-${coordinateY - i}`);
                }
            }
        }
        else {
            for (let i = 1; i < 9 - coordinateX; i++) {
                if (document.getElementById(`${board_1.ID[coordinateX + i]}-${coordinateY - i}`).classList.contains('pieceInside')) {
                    break;
                }
                else {
                    possibleMoves.push(`${board_1.ID[coordinateX + i]}-${coordinateY - i}`);
                }
            }
        }
        // document.querySelectorAll('.active').forEach((possibleMove) => {                 
        //     possibleMove.addEventListener('click', () => {
        //         const posX = possibleMove.id.charAt(0);
        //         const posY = parseInt(possibleMove.id.charAt(2));
        //         if(possibleMove.classList.contains('active') && (Game.getLastChosen() === this)){
        //             this.setOnBoard(posX, posY);
        //             this.removeClassActive();
        //         }                
        //     });      
        // })
        return possibleMoves;
    }
    move() {
        this.removeClassActive();
        const possibleMovesArr = this.showPossibleMoves();
        console.log(possibleMovesArr);
        possibleMovesArr.forEach(id => {
            const square = document.querySelector(`#${id}`);
            square.classList.add('active'); //<--oznaczenie wizualne na szachownicy
            square.addEventListener('click', () => {
                if (square.classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    this.setOnBoard(square.id.charAt(0), parseInt(square.id.charAt(2))); //<-- przeniesienie figury po kliknięciu
                    this.removeClassActive();
                    game_1.Game.checkingKings();
                }
            });
        });
    }
}
exports.Bishop = Bishop;
