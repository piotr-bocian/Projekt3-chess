"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Queen = void 0;
const board_1 = require("../board");
const piece_1 = require("./piece");
//królowa / hetman
class Queen extends piece_1.Piece {
    constructor(color, positionX, positionY, possibleMoves) {
        super(color, positionX, positionY);
        this.symbol = `../../../../Projekt3-chess/static/assets/whiteQueen.png`;
        this.setOnBoard(this.positionX, this.positionY);
        this.possibleMoves = this.collectPossibleMoves();
    }
    showPossibleMoves() {
        const moves = document.querySelector('.white-queen');
        moves.addEventListener('click', () => {
            this.collectPossibleMoves();
        });
    }
    collectPossibleMoves() {
        // console.log(parseInt(this.positionX, 36) - 9); tworzy liczbę z litery/ a=1,b=2 itd
        //RUCHY PO PRZEKĄTNEJ DZIAŁAJĄ JEDNAK DO TABLICY DODAWANE SĄ DZIWNE WYNKI
        const diagonalMoves = [];
        const moves = [];
        const movesShow = (id) => {
            const movesPossibilities = [...document.querySelectorAll(`#${id}`)];
            movesPossibilities.forEach(el => el.classList.toggle('active'));
        };
        const upDown = () => {
            for (let i = 1; i < 9; i++) {
                if (`${this.positionX}-${i}` !== `${this.positionX}-${this.positionY}`)
                    moves.push(`${this.positionX}-${i}`);
            }
        };
        const leftRight = () => {
            for (let i = 1; i < 9; i++) {
                if (`${board_1.ID[i]}-${this.positionY}` !== `${this.positionX}-${this.positionY}`)
                    moves.push(`${board_1.ID[i]}-${this.positionY}`);
            }
        };
        const diagonal = () => {
            for (let i = 1; i <= 8; i++) {
                //x+1,y+1
                if (!`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`.includes('undefined')) {
                    moves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`);
                }
                // x-1,y-1
                if (!`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`.includes('undefined')) {
                    moves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`);
                }
                //x+1,y-1
                if (!`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`.includes('undefined')) {
                    moves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`);
                }
                //x-1,y+1
                if (!`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`.includes('undefined')) {
                    moves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`);
                }
            }
        };
        ////////////////////////////////tu się dzieją dziwy//////////////////
        const diagonalWeird = () => {
            for (let i = 1; i <= 8; i++) {
                //x+1,y+1
                if (!`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`.includes('undefined')) {
                    diagonalMoves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY + i}`);
                }
                // x-1,y-1
                if (!`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`.includes('undefined')) {
                    diagonalMoves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY - i}`);
                }
                //x+1,y-1
                if (!`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`.includes('undefined')) {
                    diagonalMoves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) + i]}-${this.positionY - i}`);
                }
                //x-1,y+1
                if (!`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`.includes('undefined')) {
                    diagonalMoves.push(`${board_1.ID[(parseInt(this.positionX, 36) - 9) - i]}-${this.positionY + i}`);
                }
            }
        };
        diagonalWeird();
        console.log(diagonalMoves);
        ////////////////////////////////////////////////////////////////////
        diagonal();
        upDown();
        leftRight();
        moves.forEach(id => {
            movesShow(id);
        });
    }
}
exports.Queen = Queen;
