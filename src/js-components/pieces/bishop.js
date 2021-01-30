"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bishop = void 0;
const piece_1 = require("./piece");
const board_1 = require("../board");
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
        const coordinateX = Object.values(board_1.ID).indexOf(this.positionX) + 1;
        const coordinateY = this.positionY;
        if (this.color === 'white') {
            // move by one diagonal
            if (9 - coordinateX < 9 - coordinateY) {
                for (let i = 1; i < 9 - coordinateX; i++) {
                    document.getElementById(`${board_1.ID[coordinateX + i]}-${coordinateY + i}`).classList.add('active');
                }
            }
            else {
                for (let i = 1; i < 9 - coordinateY; i++) {
                    document.getElementById(`${board_1.ID[coordinateX + i]}-${coordinateY + i}`).classList.add('active');
                }
            }
            if (coordinateY - 1 < coordinateX - 1) {
                for (let i = coordinateY - 1; i > 0; i--) {
                    document.getElementById(`${board_1.ID[coordinateX - i]}-${coordinateY - i}`).classList.add('active');
                }
            }
            else {
                for (let i = coordinateX - 1; i > 0; i--) {
                    document.getElementById(`${board_1.ID[coordinateX - i]}-${coordinateY - i}`).classList.add('active');
                }
            }
            // move by second diagonal
            if (coordinateX - 1 < 9 - coordinateY) {
                for (let i = coordinateX - 1; i > 0; i--) {
                    document.getElementById(`${board_1.ID[coordinateX - i]}-${coordinateY + i}`).classList.add('active');
                }
            }
            else {
                for (let i = 1; i < 9 - coordinateY; i++) {
                    document.getElementById(`${board_1.ID[coordinateX - i]}-${coordinateY + i}`).classList.add('active');
                }
            }
            if (coordinateY - 1 < 9 - coordinateX) {
                for (let i = coordinateY - 1; i > 0; i--) {
                    document.getElementById(`${board_1.ID[coordinateX + i]}-${coordinateY - i}`).classList.add('active');
                }
            }
            else {
                for (let i = 1; i < 9 - coordinateX; i++) {
                    document.getElementById(`${board_1.ID[coordinateX + i]}-${coordinateY - i}`).classList.add('active');
                }
            }
        }
        document.querySelectorAll('.active').forEach((possibleMove) => {
            possibleMove.addEventListener('click', () => {
                const posX = possibleMove.id.charAt(0);
                const posY = parseInt(possibleMove.id.charAt(2));
                if (possibleMove.classList.contains('active')) {
                    this.setOnBoard(posX, posY);
                    this.removeClassActive();
                }
            });
        });
    }
    moveBishop(possibleMove) {
        const posX = possibleMove.id.charAt(0);
        const posY = parseInt(possibleMove.id.charAt(2));
        this.setOnBoard(posX, posY);
    }
    removeClassActive() {
        let elems = document.querySelectorAll('.active');
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('active');
        }
    }
}
exports.Bishop = Bishop;
