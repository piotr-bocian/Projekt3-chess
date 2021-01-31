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
    removeClassActive() {
        let elems = document.querySelectorAll('.active');
        for (var i = 0; i < elems.length; i++) {
            elems[i].classList.remove('active');
        }
    }
    showPossibleMoves() {
        this.removeClassActive();
        let possibleMovesIds = [];
        const coordinateX = Object.values(board_1.ID).indexOf(this.positionX) + 1;
        const coordinateY = this.positionY;
        // console.log(coordinateX, coordinateY);
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
        //console.log(possibleMovesIds);
        possibleMovesIds.forEach((id) => {
            if (!(document.querySelector(`#${id}`).classList.contains('pieceInside'))) {
                document.querySelector(`#${id}`).classList.add('active');
            }
        });
        // console.log(this);
        // const moveKnight = (e: HTMLElement) => {
        //     if(e.classList.contains('active')){
        //         const coorX = e.id.charAt(0);
        //         const coorY = parseInt(e.id.charAt(2));
        //         // console.log(coordinateX, coordinateY);
        //         this.setOnBoard(coorX, coorY);
        //         document.querySelectorAll('.active')!.forEach(elem => {
        //             elem.classList.remove('active');
        //         });
        //     }
        // }
        document.querySelectorAll('.active').forEach((possMove) => {
            possMove.addEventListener('click', () => {
                //console.log(possMove);
                // console.log(this);
                const coorX = possMove.id.charAt(0);
                const coorY = parseInt(possMove.id.charAt(2));
                if (possMove.classList.contains('active') && (game_1.Game.getLastChosen() === this)) {
                    // console.log(coordinateX, coordinateY);
                    this.setOnBoard(coorX, coorY);
                    this.removeClassActive();
                }
            });
        });
    }
}
exports.Knight = Knight;
