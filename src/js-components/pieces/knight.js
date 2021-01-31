"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Knight = void 0;
const piece_1 = require("./piece");
const board_1 = require("../board");
const game_1 = require("../game");
//skoczek / koń
class Knight extends piece_1.Piece {
    constructor(color, positionX, positionY) {
        super(color, positionX, positionY);
        this.symbol = `../../../static/assets/${this.color}Knight.png`;
        this.setOnBoard(this.positionX, this.positionY);
    }
    showPossibleMoves() {
        this.removeClassActive();
        let possibleMovesIds = [];
        const coordinateX = Object.values(board_1.ID).indexOf(this.positionX) + 1;
        const coordinateY = this.positionY;
        // filling an array with id's of fields where knight maight move
        for (let i = coordinateX - 2; i <= coordinateX + 2; i += 4) {
            if (i >= 1 && i <= 8) {
                for (let j = coordinateY - 1; j <= coordinateY + 1; j += 2) {
                    if (j >= 1 && j <= 8) {
                        possibleMovesIds.push(`${board_1.ID[i]}-${j}`);
                    }
                }
            }
        }
        for (let i = coordinateY - 2; i <= coordinateY + 2; i += 4) {
            if (i >= 1 && i <= 8) {
                for (let j = coordinateX - 1; j <= coordinateX + 1; j += 2) {
                    if (j >= 1 && j <= 8) {
                        possibleMovesIds.push(`${board_1.ID[j]}-${i}`);
                    }
                }
            }
        }
        // if possible move filed is empty (no other figure on it), add a class to indicate
        // that figure can move on it.
        possibleMovesIds.forEach((id) => {
            if (!(document.querySelector(`#${id}`).classList.contains('pieceInside'))) {
                document.querySelector(`#${id}`).classList.add('active');
            }
        });
        //adding event listener to each field with active class to perform a fiuge's move after click
        document.querySelectorAll('.active').forEach((possMove) => {
            possMove.addEventListener('click', () => {
                const coorX = possMove.id.charAt(0);
                const coorY = parseInt(possMove.id.charAt(2));
                if (possMove.classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    this.setOnBoard(coorX, coorY);
                    this.removeClassActive();
                }
            });
        });
    }
}
exports.Knight = Knight;
